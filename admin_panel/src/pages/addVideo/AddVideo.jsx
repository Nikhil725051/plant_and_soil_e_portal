import { Button, CircularProgress, Grid, TextField, Typography } from "@mui/material";
import { useContext, useState } from "react";
import Compress from 'compress.js'
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";
import { Box } from "@mui/system";

function AddVideo() {

    const [videoTitle, setVideoTitle] = useState('');
    const [videoUrl, setVideoUrl] = useState('');
    const { user, dispatch } = useContext(AuthContext);
    const [status, setStatus] = useState({ status: '', mess: '' });



    const handleSubmit = async (e) => {        
        e.preventDefault();
        setStatus({
            status: 'loading',
            mess: ''
        });
        axios.post(process.env.REACT_APP_BASE_URL+'/video/addVideo', {
            auth: {
                authToken: user.user.auth.token
            },
            payload: {
                title: videoTitle,
                videoLink: videoUrl,
            }
        }
        )
            .then((response) => {
                console.log(response.data);
                setStatus({
                    status: 'success',
                    mess: 'Video added successfully'
                });
                setVideoTitle('');
                setVideoUrl('');
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
                <Grid sx={{ width: '45%' }} container >
                    <Grid item xs={12} md={6} p={1}>
                        <TextField
                            fullWidth
                            required
                            label="Video Title"
                            variant="outlined"
                            value={videoTitle}
                            onChange={(event) => setVideoTitle(event.target.value)}
                        />
                    </Grid>
                    <Grid item xs={12} md={6} p={1}>
                        <TextField
                            fullWidth
                            required
                            label="Video Url"
                            variant="outlined"
                            value={videoUrl}
                            onChange={(event) => setVideoUrl(event.target.value)}
                        />
                    </Grid>
                    <Grid textAlign={"center"} item xs={12} p={1}>
                        <Button fullWidth variant="contained" color="primary" type="submit">
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

export default AddVideo;