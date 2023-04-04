import { Button, CircularProgress, Grid, TextField, Typography } from "@mui/material";
import { useContext, useState } from "react";
import Compress from 'compress.js'
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";
import { Box } from "@mui/system";

function AddQuiz() {

    const [question, setQuestion] = useState('');
    const [option1, setOption1] = useState('');
    const [option2, setOption2] = useState('');
    const [option3, setOption3] = useState('');
    const [option4, setOption4] = useState('');
    const [answerOption, setAnswerOption] = useState('');
    const [file, setFile] = useState([]);
    const { user, dispatch } = useContext(AuthContext);
    const [status, setStatus] = useState({ status: '', mess: '' });


    const handleSubmit = async (e) => {
        e.preventDefault();
        const compressor = new Compress();
        var compressedFile;
        try {
            compressedFile = await compressor.compress(file, {
                maxSizeKB: 120,
                useWebWorker: true
            });

        } catch (err) {
            console.log(err)
        }
        setStatus({
            status: 'loading',
            mess: ''
        });
        axios.post(process.env.REACT_APP_BASE_URL+'/quiz/addQuestion', {
            auth: {
                authToken: user.user.auth.token
            },
            payload: {
                question: question,
                options: [
                    {
                        optionNo: 1,
                        option: option1,
                    },
                    {
                        optionNo: 2,
                        option: option2,
                    },
                    {
                        optionNo: 3,
                        option: option3,
                    },
                    {
                        optionNo: 4,
                        option: option4,
                    }
                ],
                answerOption: parseInt(answerOption)
            }
        }
        )
            .then((response) => {
                console.log(response.data);
                setStatus({
                    status: 'success',
                    mess: 'Quiz added successfully'
                });
                setQuestion('');
                setOption1('');
                setOption2('');
                setOption3('');
                setOption4('');
                setAnswerOption('');
            })
            .catch((err) => {
                console.log(err);
                setStatus({
                    status: 'failed',
                    mess: 'Some error occured'
                });
            })

    }
    return (
        status.status === 'loading' ?
            <Box sx={{
                display: 'flex',
                height: '100vh',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <CircularProgress />
            </Box>
            :
            <form
                style={{
                    height: '100vh',
                    width: '100vw',

                    display: 'flex',

                    alignItems: 'center',
                    justifyContent: 'center'
                }}

                onSubmit={(e) => handleSubmit(e)}>
                <Grid sx={{ paddingX: '10%' }} container >
                    <Grid item xs={12} p={1}>
                        <TextField
                            fullWidth
                            required
                            label="Question"
                            variant="outlined"
                            value={question}
                            onChange={(event) => setQuestion(event.target.value)}
                        />
                    </Grid>
                    <Grid item xs={12} md={6} p={1}>
                        <TextField
                            fullWidth
                            required
                            label="Option 1"
                            variant="outlined"
                            value={option1}
                            onChange={(event) => setOption1(event.target.value)}
                        />
                    </Grid>
                    <Grid item xs={12} md={6} p={1}>
                        <TextField
                            fullWidth
                            required
                            label="Option 2"
                            variant="outlined"
                            value={option2}
                            onChange={(event) => setOption2(event.target.value)}
                        />
                    </Grid>
                    <Grid item xs={12} md={6} p={1}>
                        <TextField
                            fullWidth
                            required
                            label="Option 3"
                            variant="outlined"
                            value={option3}
                            onChange={(event) => setOption3(event.target.value)}
                        />
                    </Grid>
                    <Grid item xs={12} md={6} p={1}>
                        <TextField
                            fullWidth
                            required
                            label="Option 4"
                            variant="outlined"
                            value={option4}
                            onChange={(event) => setOption4(event.target.value)}
                        />
                    </Grid>
                    <Grid item xs={12} md={6} p={1}>
                        <TextField
                            fullWidth
                            required
                            label="Enter option number of the correct option"
                            variant="outlined"
                            value={answerOption}
                            onChange={(event) => setAnswerOption(event.target.value)}
                        />
                    </Grid>

                    <Grid textAlign={"center"} item xs={12} p={1}>
                        <Button sx={{minWidth: '20%'}} variant="contained" color="primary" type="submit">
                            ADD
                        </Button>
                    </Grid>
                    {
                        status.mess
                        &&
                        <Grid textAlign={"center"} item xs={12} p={1}>
                            <Typography color={status.status === 'success' ? 'success.main' : 'error'} variant="subtitle1">{status.mess}!</Typography>
                        </Grid>
                    }
                </Grid>
            </form>
    );
}

export default AddQuiz;