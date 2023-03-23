import { Button, CircularProgress, Grid, TextField, Typography } from "@mui/material";
import { useContext, useState } from "react";
import Compress from 'compress.js'
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";
import { Box } from "@mui/system";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function WriteArticle() {

    const [title, setTitle] = useState('');
    const [file, setFile] = useState([]);
    const { user, dispatch } = useContext(AuthContext);
    const [status, setStatus] = useState({status: '', mess: ''});
    const [value, setValue] = useState('');


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
        axios.post('http://localhost:8080/article/addArticle', {
            auth: {
                authToken: user.user.auth.token
            },
            payload: {
                title: title,
                article: value,
                image: {
                    name: compressedFile[0].alt,
                    img: compressedFile[0].data
                }
            }
        }
        )
            .then((response) => {
                console.log(response.data);
                setStatus({
                    status: 'success',
                    mess: 'Article added successfully'
                });
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
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}

                onSubmit={(e) => handleSubmit(e)}>
                <Grid paddingX={'10%'} container >
                    <Grid item xs={12} p={1}>
                        <TextField
                            fullWidth
                            required
                            label="Title"
                            variant="outlined"
                            value={title}
                            onChange={(event) => setTitle(event.target.value)}
                        />
                    </Grid>
                    <Grid item xs={12} p={1}>
                        <TextField
                            InputLabelProps={{ shrink: true }}
                            type='file'
                            fullWidth
                            required
                            label="Image"
                            variant="outlined"
                            onChange={(event) => setFile(Array.from(event.target.files))}
                        />
                    </Grid>
                    <Grid item xs={12} p={1}>
                        <ReactQuill theme="snow" value={value} onChange={setValue} />
                    </Grid>
                    <Grid textAlign={"center"} item xs={12} p={1}>
                        <Button sx={{ width: '20%' }} variant="contained" color="primary" type="submit">
                            ADD ARTICLE
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

export default WriteArticle;