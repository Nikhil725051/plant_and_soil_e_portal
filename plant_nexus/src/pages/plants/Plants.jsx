import { Button, Card, CardActions, CardContent, CardMedia, CircularProgress, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Plants() {

    const navigate = useNavigate();
    const [isLoading, setLoading] = useState(false);

    const [allPlants, setAllPlants] = useState([]);

    const truncate = (str, max = 10) => {
        const array = str.trim().split(' ');
        const ellipsis = array.length > max ? '...' : '';
        return array.slice(0, max).join(' ') + ellipsis;
    };
    useEffect(() => {
        setLoading(true);
        axios.get(process.env.REACT_APP_BASE_URL + '/plant/fetchPlants')
            .then((response) => {
                if (response.statusText === 'OK' || response.status === 200) {
                    console.log(response.data.payload);
                    setLoading(false);
                    setAllPlants(response.data.payload);
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
                    allPlants.map((plant, i) => {
                        return (
                            <Card
                                key={i}
                                sx={{ maxWidth: 300 }}>
                                <CardMedia
                                    sx={{ height: 200 }}
                                    image={plant.imgUrl}
                                    title="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {plant.name}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {truncate(plant.description)}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button
                                        onClick={() => navigate('/plantDetail', { state: plant })}
                                        size="small">
                                        Learn More
                                    </Button>
                                </CardActions>
                            </Card>
                        );
                    })
                }
            </Box>

    );
}

export default Plants;