import { Button, Card, CardActions, CardContent, CardMedia, CircularProgress, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";

import axios from "axios";
import { useNavigate } from "react-router-dom";

function Articles() {

    const navigate = useNavigate();
    const [isLoading, setLoading] = useState(false);

    const [allArticles, setAllArticles] = useState([]);

    const truncate = (str, max = 10) => {
        const array = str.trim().split(' ');
        const ellipsis = array.length > max ? '...' : '';
        return array.slice(0, max).join(' ') + ellipsis;
    };
    useEffect(() => {
        setLoading(true);
        axios.get(process.env.REACT_APP_BASE_URL + '/article/fetchArticles')
            .then((response) => {
                if (response.statusText === 'OK' || response.status === 200) {
                    console.log(response.data.payload);
                    setLoading(false);
                    setAllArticles(response.data.payload);
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
                    allArticles.map((article, i) => {
                        return (
                            <Card
                                key={i}
                                sx={{ maxWidth: 300 }}>
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
        
    );
}

export default Articles;