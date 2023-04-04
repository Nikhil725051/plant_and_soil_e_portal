import { Button, Card, CardActions, CardContent, CardMedia, CircularProgress, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Videos() {

    const navigate = useNavigate();

    const [allVideos, setAllVideos] = useState([]);
    const [isLoading, setLoading] = useState(false);

    const truncate = (str, max = 10) => {
        const array = str.trim().split(' ');
        const ellipsis = array.length > max ? '...' : '';
        return array.slice(0, max).join(' ') + ellipsis;
    };
    useEffect(() => {
        setLoading(true);
        axios.get(process.env.REACT_APP_BASE_URL+'/video/getVideos')
            .then((response) => {
                if (response.statusText === 'OK' || response.status === 200) {
                    console.log(response.data.payload);
                    setLoading(false);
                    setAllVideos(response.data.payload);
                }
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])
    return (
        isLoading === true
        ?
        <Box
            sx={{
                display: 'flex',
                height: '35vh',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
            <CircularProgress />
        </Box>
        :
            <Box
                justifyContent={'center'}
                my={8}
                display={'flex'}
                gap={3}
                flexWrap='wrap'>
                {
                    allVideos.map((video, i) => {
                        return (
                            <Card
                                key={i}
                                sx={{ maxWidth: 300 }}>
                                <CardMedia
                                    component={'iframe'}
                                    sx={{ height: 200 }}
                                    src={video.videoLink}
                                    allowFullScreen

                                />
                                <CardContent>
                                    <Typography fontWeight={300} fontSize={'1rem'} gutterBottom variant="h6" component="div">
                                        {video.title}
                                    </Typography>

                                </CardContent>

                            </Card>
                        );
                    })
                }
            </Box>
        
    );
}

export default Videos;