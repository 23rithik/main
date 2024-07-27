import * as React from 'react';
import { useState, useEffect, memo } from 'react';
import Box from '@mui/material/Box';
import { SimpleTreeView } from '@mui/x-tree-view/SimpleTreeView';
import { TreeItem } from '@mui/x-tree-view/TreeItem';
import { Grid, LinearProgress, Paper, styled, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import Breadcrumbs from '../Breadcrumbs'; // Adjust this path if necessary
import axiosInstance from './axiosintercepter'; // Adjust this path if necessary

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 15,
  borderRadius: 5,
  '& .MuiLinearProgress-bar': {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
  },
}));

const StyledPaper = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  width: '100%',
  color: theme.palette.text.primary,
}));

const TreeViewComponent = memo(({ row, index, isWeekend }) => {
  const getStatusLabel = (status) => (status === 'graded' ? 'Graded' : 'Not Graded');

  const linkTo = `/wsubmitlink${index + 1}`;
  const isLinkDisabled = (weekName) => {
    const weekNumber = parseInt(weekName.replace('Week ', ''), 10);
    return weekNumber >= 1 && weekNumber <= 6 && !isWeekend;
  };

  return (
    <Grid item xs={11} md={8}>
      <StyledPaper sx={{ my: 1, p: 2 }}>
        <Typography noWrap>
          <SimpleTreeView>
            <TreeItem itemId={row.week_name} label={row.week_name}>
              <TreeItem
                nodeId={`${row.week_name}-description`}
                label={
                  <div style={{ whiteSpace: 'normal', wordBreak: 'break-word', textAlign: 'justify' }}>
                    {row.description || 'No description'}
                  </div>
                }
                sx={{ marginBottom: 2 }}
              />
              
              {isLinkDisabled(row.week_name) ? (
                <Typography color="textSecondary">Submit (Available on Weekends)</Typography>
              ) : (
                <Link to={linkTo} style={{ textDecoration: 'none' }}>
                  <TreeItem itemId={`${row.week_name}-submit`} label="Submit" />
                </Link>
              )}
              
              <TreeItem itemId={`${row.week_name}-status`} label={`Status: ${getStatusLabel(row.grading_status)}`} />
            </TreeItem>
          </SimpleTreeView>
        </Typography>
      </StyledPaper>
    </Grid>
  );
});

const Wsubmit = () => {
  const [rows, setRows] = useState([]);
  const [progressValue, setProgressValue] = useState(0);
  const [loading, setLoading] = useState(true);
  const [isWeekend, setIsWeekend] = useState(false);

  useEffect(() => {
    const fetchSubmissionData = () => {
      const token = localStorage.getItem('token');
      axiosInstance.get('http://localhost:3000/wsubmitdata', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
        .then((res) => {
          setRows(res.data);
          setLoading(false);
        })
        .catch((error) => {
          console.error('Error fetching submissions:', error);
          setLoading(false);
        });
    };

    fetchSubmissionData();
  }, []);

  useEffect(() => {
    const gradedWeeks = rows.filter(row => row.grading_status === 'graded').length;
    const totalWeeks = rows.length;
    const progress = totalWeeks > 0 ? (gradedWeeks / totalWeeks) * 100 : 0;
    setProgressValue(progress);
  }, [rows]);

  useEffect(() => {
    const currentDay = new Date().getDay();
    setIsWeekend(currentDay === 6 || currentDay === 0); // 6 is Saturday, 0 is Sunday
  }, []);

  const sortRowsByWeek = (rows) => {
    const order = [
      'Week 1',
      'Week 2',
      'Week 3',
      'Week 4',
      'Week 5',
      'Week 6',
      'Final Report',
      'Viva Voce',
    ];

    return rows.sort((a, b) => {
      return order.indexOf(a.week_name) - order.indexOf(b.week_name);
    });
  };

  const sortedRows = sortRowsByWeek(rows);

  if (loading) {
    return <Typography variant="h6">Loading...</Typography>;
  }

  return (
    <>
      <Breadcrumbs />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '100vh',
          px: { xs: 2, sm: 3, md: 5 },
        }}
      >
        <Grid lg={12} container justifyContent="center" alignItems="center" spacing={2} style={{ marginTop: "13%", marginRight: "4%" }}>
          <Grid item xs={11} md={8}>
            <StyledPaper sx={{ my: 1, p: 2, background: 'lightgray' }}>
              <Typography>
                <Box sx={{ width: '100%' }}>
                  <Typography variant="subtitle1" gutterBottom>
                    Progress based on Graded Projects:
                  </Typography>
                  <BorderLinearProgress variant="determinate" value={progressValue} />
                </Box>
              </Typography>
            </StyledPaper>
          </Grid>

          {sortedRows.map((row, index) => (
            <TreeViewComponent key={row.week_name} row={row} index={index} isWeekend={isWeekend} />
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default Wsubmit;
