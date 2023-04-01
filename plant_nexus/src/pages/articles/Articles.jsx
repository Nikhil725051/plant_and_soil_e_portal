import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";

import axios from "axios";
import { useNavigate } from "react-router-dom";

function Articles() {

    const navigate = useNavigate();

    const [allArticles, setAllArticles] = useState([]);

    const truncate = (str, max = 10) => {
        const array = str.trim().split(' ');
        const ellipsis = array.length > max ? '...' : '';
        return array.slice(0, max).join(' ') + ellipsis;
    };
    useEffect(() => {
        axios.get('http://localhost:8080/article/fetchArticles')
            .then((response) => {
                if (response.statusText === 'OK') {
                    console.log(response.data.payload);
                    setAllArticles(response.data.payload);
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
                    allArticles.map((article, i) => {
                        return (
                            <Card
                                key={i}
                                sx={{ maxWidth: 345 }}>
                                <CardMedia
                                    sx={{ height: 200 }}
                                    image={article.imgUrl}
                                    title="green iguana"
                                />
                                <CardContent>
                                    <Typography fontWeight={300} fontSize={'1rem'} gutterBottom variant="h6" component="div">
                                        {article.title}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button
                                        onClick={() => navigate('/articles/article', { state: article })}
                                        size="small">
                                        Read More
                                    </Button>
                                </CardActions>
                            </Card>
                        );
                    })
                }
            </Box>
        </>
    );
}

export default Articles;