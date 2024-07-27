import * as React from 'react';
import Box from '@mui/material/Box';
import { Grid, Paper, styled, Typography } from '@mui/material';
import Breadcrumbs from '../Breadcrumbs';
import axios from 'axios';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Link from '@mui/material/Link';

const StyledPaper = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(3),
  width: '100%', // Set width to 100% to take full width
  color: theme.palette.text.primary,
}));

const Reference = () => {
  const [referenceData, setReferenceData] = React.useState([]);

  React.useEffect(() => {
    const fetchReferenceData = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://localhost:3000/getrefs', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setReferenceData(response.data);
        console.log('Fetched references:', response.data);
      } catch (error) {
        console.error('Error fetching reference data:', error);
      }
    };

    fetchReferenceData(); // Fetch data when component mounts
  }, []); // Empty dependency array means fetch data once on mount

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
        <Grid container justifyContent="center" alignItems="center" spacing={2}>
          {referenceData.map((week) => (
            <Grid key={week.weekNumber} item xs={11} md={8}>
             
                <Accordion sx={{ my: 1 }}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls={`week${week.weekNumber}-content`}
                    id={`week${week.weekNumber}-header`}
                  >
                    Week {week.weekNumber}: {week.title}
                  </AccordionSummary>
                  <AccordionDetails>
                    <Grid container spacing={2}>
                      {week.materials && Array.isArray(week.materials) && week.materials.map((material, index) => (
                        <Grid item xs={12} key={index}>
                          <Paper variant="outlined" sx={{ p: 2 }}>
                            <Typography variant="h6" gutterBottom>
                              {material.title || "Untitled Material"}
                            </Typography>
                            <Typography>{material.description || "No description available."}</Typography>
                            <Typography>Type: {material.type || "Unknown"}</Typography>
                            {material.type === 'link' ? (
                              <Link href={material.url} target="_blank" rel="noopener noreferrer">
                                URL
                              </Link>
                            ) : (
                              <Typography>File: {material.url || "No file URL available."}</Typography>
                            )}
                          </Paper>
                        </Grid>
                      ))}
                    </Grid>
                  </AccordionDetails>
                </Accordion>
           
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default Reference;
