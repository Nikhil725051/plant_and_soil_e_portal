import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Videos() {

    const navigate = useNavigate();

    const [allVideos, setAllVideos] = useState([]);

    const truncate = (str, max = 10) => {
        const array = str.trim().split(' ');
        const ellipsis = array.length > max ? '...' : '';
        return array.slice(0, max).join(' ') + ellipsis;
    };
    useEffect(() => {
        axios.get('http://localhost:8080/video/getVideos')
            .then((response) => {
                if (response.statusText === 'OK') {
                    console.log(response.data.payload);
                    setAllVideos(response.data.payload);
                }
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])
    return (
        <>
            {/* <Box textAlign='center' my={5}>
             <Typography fontSize={'2rem'} textTransform={'uppercase'} variant="h3" color={'green'} fontWeight={600} >
                 Explore the Diversity of Plants
             </Typography>
             <Typography variant="subtitle1" color="grey" fontWeight={800} fontSize='1rem'>
                 Discover a diverse collection of plants, each with unique features and care requirements.
             </Typography>
           </Box> */}
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
                                sx={{ maxWidth: 345 }}>
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
        </>
    );
}

export default Videos;