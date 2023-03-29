import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";


function Home() {



    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                height: '100vh',
                justifyContent: 'center',
                alignItems: 'center',

            }}
        >
            <Typography
                textAlign={'center'}
                mb={5}
                mt={3}
                variant="h5">
                Hi, {user.user?.payload.user.fullName}, <br />
                What would you like to do today?
            </Typography>
            <Grid sx={{ overflowY: 'auto', paddingY: '5px' }} justifyContent={'center'} gap={2} container>
                <Card
                    sx={{ maxWidth: 345 }}
                    onClick={() => navigate('/addPlant')}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="140"
                            image="https://cdn.pixabay.com/photo/2015/06/25/14/13/fern-821293_960_720.jpg"
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                ADD PLANT
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Share your knowledge and insights with others by submitting detailed information about specific plants and their care.
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                <Card
                    onClick={() => navigate('/writeArticle')}
                    sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="140"
                            image="https://images.unsplash.com/photo-1563121661-cd531f4fb8cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1158&q=80"
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                WRITE ARTICLE
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Write an article related to plant and soil management. Share your knowledge and insights with others by submitting your original content on this topic.
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                <Card
                onClick={() => navigate('/addVideo')}
                 sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="140"
                            image="https://images.unsplash.com/photo-1567566221756-5282476c4684?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                ADD VIDEO
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Share your knowledge and insights with others through visual media by submitting your original video content on this topic.
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                <Card
                    onClick={() => navigate('/addQuizz')}
                    sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="140"
                            image="https://images.unsplash.com/photo-1539628399213-d6aa89c93074?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                ADD QUIZZ
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Test the knowledge of others and help them learn by submitting your original quiz content on this topic.
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid>
        </Box>
    );
}

export default Home;