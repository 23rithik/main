import {
  Button,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography
} from '@mui/material';
import React, { useState, useEffect } from 'react';
import Breadcrumbs from '../Breadcrumbs';
import { Link } from 'react-router-dom';
import axiosInstance from './axiosintercepter'; // Ensure this path is correct

const Wsubmitlink4 = () => {
  const [submission, setSubmission] = useState(null); // State to store the fetched submission data
  const [loading, setLoading] = useState(true); // State to manage loading status

  useEffect(() => {
    const fetchSubmissionData = () => {
      const token = localStorage.getItem('token');
      axiosInstance.get('http://localhost:3000/wsubmitdata', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
        .then((res) => {
          const week1Data = res.data.find(item => item.week_name === 'Week 4');
          setSubmission(week1Data);
          setLoading(false);
        })
        .catch((error) => {
          console.error('Error fetching submissions:', error);
          setLoading(false);
        });
    };

    fetchSubmissionData();
  }, []);

  if (loading) {
    return <Typography variant="h6" style={{ padding: "10px" }}>Loading...</Typography>;
  }

  if (!submission) {
    return <Typography variant="h6" style={{ padding: "10px" }}>No data found for Week 1</Typography>;
  }

  return (
    <>
      <Breadcrumbs />
      <Grid container justifyContent="center" style={{ marginTop: "13%" }}>
        <Grid item xs={12} md={10} lg={8}>
          <TableContainer component={Paper} style={{ marginBottom: "20px" }}>
            <Typography variant="h6" style={{ padding: "10px" }}>
              <b>Submission</b>
            </Typography>
            <Table sx={{ minWidth: 650 }} aria-label="submission 1 table">
              <TableBody>
                <TableRow>
                  <TableCell component="th" scope="row">Submission status</TableCell>
                  <TableCell align="left">{submission.submission_status}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row">Grading status</TableCell>
                  <TableCell align="left">{submission.grading_status}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row">Due date</TableCell>
                  <TableCell align="left">12-12-12</TableCell> {/* Adjust as needed */}
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row">Online text</TableCell>
                  <TableCell align="left">{submission.online_text}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row">Submission comments</TableCell>
                  <TableCell align="left">{submission.submission_comments}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row">
                    <Link to={'/wsubmitform4'} style={{ textDecoration: 'none' }}>
                      <Button 
                        variant="contained" 
                        color="primary" 
                        disabled={submission.submission_status === 'Submitted'}
                      >
                        Submit
                      </Button>
                    </Link>
                    <Link to={'/wsubmit'}>
                      <Button variant="outlined" color="error" style={{ marginLeft: '10px' }}>Cancel</Button>
                    </Link>
                  </TableCell>
                  <TableCell align="left"></TableCell>
                </TableRow>
                {submission.submission_status === 'Submitted' && (
                  <TableRow>
                    <TableCell colSpan={2} align="center">
                      <Typography variant="h6" color="textSecondary">
                        Submission has been completed.
                      </Typography>
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>

          <TableContainer component={Paper} style={{ marginTop: "20px", marginBottom: "50px" }}>
            <Typography variant="h6" style={{ padding: "10px" }}>
              <b>Feedback</b>
            </Typography>
            <Table sx={{ minWidth: 650 }} aria-label="submission 2 table">
              <TableBody>
                <TableRow>
                  <TableCell component="th" scope="row">Grade</TableCell>
                  <TableCell align="left">{submission.grade || 'Not Submitted'}</TableCell> {/* Adjust as needed */}
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row">Graded By</TableCell>
                  <TableCell align="left">{submission.graded_by || 'Not graded'}</TableCell> {/* Adjust as needed */}
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </>
  );
}

export default Wsubmitlink4;
