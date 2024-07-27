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
import axiosInstance from './axiosintercepter'; // Ensure this path is correct

const Wsubmitform3 = () => {
    const [form, setForm] = useState({
        week_name: 'Week 3', // Updated value for Week 3
        submission_status: '',
        grading_status: '',
        online_text: '',
        submission_comments: ''
    });

    const [loading, setLoading] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        // Fetch the data when the component mounts
        const fetchData = async () => {
            try {
                const response = await axiosInstance.get('/api/wsubmitdata');
                const data = response.data.find(item => item.week_name === form.week_name);

                if (data) {
                    setForm({
                        week_name: data.week_name,
                        submission_status: data.submission_status,
                        grading_status: data.grading_status,
                        online_text: data.online_text,
                        submission_comments: data.submission_comments
                    });
                    setIsSubmitted(data.submission_status === 'Submitted');
                }
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, [form.week_name]);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setForm((prevForm) => ({
            ...prevForm,
            [name]: value,
        }));
    };

    const capValue = async () => {
        setLoading(true);

        try {
            const payload = {
                online_text: form.online_text,
                submission_comments: form.submission_comments,
                submission_status: 'Submitted',
                grading_status: form.grading_status
            };

            const res = await axiosInstance.put(`/api/addsubmission/${form.week_name}`, payload);
            alert(res.data.message);
            setIsSubmitted(true);

            // Redirect to Wsubmitlink3
            navigate('/wsubmitlink3');
        } catch (error) {
            console.error("There was an error submitting the form!", error);
            alert('Error submitting the form. Please try again.');
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
                                            onClick={capValue}
                                            disabled={isSubmitted || loading} // Disable if submitted or loading
                                        >
                                            {loading ? 'Submitting...' : 'Submit'}
                                        </Button>
                                        <Link to={'/wsubmitlink3'}>
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
}

export default Wsubmitform3;
