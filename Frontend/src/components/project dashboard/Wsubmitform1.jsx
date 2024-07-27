import {
  Button,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  TextField,
  Typography
} from '@mui/material';
import React, { useState, useEffect } from 'react';
import Breadcrumbs from '../Breadcrumbs';
import { Link, useNavigate } from 'react-router-dom';
import axiosInstance from './axiosintercepter';
import jwtDecode from 'jwt-decode'; // Ensure jwt-decode is installed

const Wsubmitform1 = () => {
  
  const [form, setForm] = useState({
    week_name: 'Week 1',
    submission_status: 'Submitted',
    grading_status: 'Not Graded',
    online_text: '',
    submission_comments: '',
    grade: 'Not Graded',
    graded_by: 'Not Graded'
  });

  const [loading, setLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate = useNavigate();
  // const [studentId, setStudentId] = useState('');
  // const [projectId, setProjectId] = useState('');
  // const [loggedInStudentId, setLoggedInStudentId] = useState('');
  

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const token = localStorage.getItem('token');
  //       if (token) {
  //         // const decodedToken = jwtDecode(token);
  //         // setStudentId(decodedToken.studentId);
  //         // setProjectId(decodedToken.projectId);

  //         const response = await axiosInstance.get('http://localhost:3000/wsubmitdata', {
  //           headers: {
  //             Authorization: `Bearer ${token}`
  //           }
  //         });

  //         const data = response.data.find(item => item.week_name === form.week_name);

  //         if (data) {
  //           setForm({
  //             week_name: data.week_name,
  //             submission_status: data.submission_status,
  //             grading_status: data.grading_status,
  //             online_text: data.online_text,
  //             submission_comments: data.submission_comments,
  //             grade: data.grade,
  //             graded_by: data.graded_by
  //           });
  //           setIsSubmitted(data.submission_status === 'Submitted');
  //         }
  //       }
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };

  //   fetchData();
  // }, [form.week_name]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm(prevForm => ({
      ...prevForm,
      [name]: value
    }));
  };
  // useEffect(() => {
  const handleSubmit = async () => {
    setLoading(true);

    try {
        const token = localStorage.getItem('token');
        const payload = {
            week_name: form.week_name,
            submission_status: form.submission_status,
            grading_status: form.grading_status,
            online_text: form.online_text,
            submission_comments: form.submission_comments,
            grade: form.grade,
            graded_by: form.graded_by
            // Uncomment and include if needed
            // project: projectId, 
            // student: loggedInStudentId
        };

        const res = await axiosInstance.post('http://localhost:3000/addsubmissiondata', {payload}, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        alert(res.data.message);  // Ensure that 'message' exists in the response
        setIsSubmitted(true);
        navigate('/wsubmitlink1');
    } catch (error) {
        console.error("There was an error submitting the form!", error);
        const errorMessage = error.response?.data?.message || 'Error submitting the form. Please try again.';
        alert(errorMessage);
    } finally {
        setLoading(false);
    }
};

  return (
    <>
      <Breadcrumbs />
      <Grid container justifyContent="center" style={{ marginTop: "13%" }}>
        <Grid item xs={12} md={10} lg={8}>
          <TableContainer component={Paper} style={{ marginBottom: "20px" }}>
            <Typography variant="h6" style={{ padding: "10px" }}>
              <b>Submission Form</b>
            </Typography>
            <Table sx={{ minWidth: 650 }} aria-label="submission 1 table">
              <TableBody>
                <TableRow>
                  <TableCell component="th" scope="row">Online text</TableCell>
                  <TableCell align="left">
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        required
                        id="outlined-online-text"
                        name="online_text"
                        value={form.online_text}
                        onChange={handleChange}
                      />
                    </Grid>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row">Submission comments</TableCell>
                  <TableCell align="left">
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        required
                        id="outlined-submission-comments"
                        name="submission_comments"
                        value={form.submission_comments}
                        onChange={handleChange}
                      />
                    </Grid>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row">
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={handleSubmit}
                      disabled={isSubmitted || loading}
                    >
                      {loading ? 'Submitting...' : 'Submit'}
                    </Button>
                    <Link to={'/wsubmitlink1'}>
                      <Button variant="outlined" color="error" style={{ marginLeft: '10px' }}>Cancel</Button>
                    </Link>
                  </TableCell>
                  <TableCell align="left"></TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </>
  );
};

export default Wsubmitform1;
