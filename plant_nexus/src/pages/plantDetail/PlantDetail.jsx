import { Card, CardContent, CardMedia, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import { Box } from "@mui/system";
import { useLocation } from "react-router-dom";


function PlantDetail() {

    const location = useLocation();
    const theme = useTheme();
    const isSmallerScreen = useMediaQuery(theme.breakpoints.down('sm'));

    return (<Box sx={{
        my: 10,
        display: 'flex',
        flexDirection: 'column',
        gap: 5,
        justifyContent: 'center',
        alignItems: 'center'
    }}>
        <Card sx={{ width: '80%', padding: 5 }}>
            <Typography textAlign={'center'} mb={2} component="div" variant="h5">
                {location.state?.name}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" component="div">
                {location.state?.description}
            </Typography>
        </Card>

        <Card sx={{
            display: 'flex',
            flexDirection: isSmallerScreen ? 'column' : 'row',
            width: '80%'
        }}>
            <CardMedia
                component="img"
                sx={{ width: isSmallerScreen ? '100%' : 500 }}
                image={location.state?.imgUrl}
                alt="Live from space album cover"
            />
            <CardContent>
                <Typography my={2} component="div" variant="h5">
                    Botanical Profile
                </Typography>
                <Grid container>
                    <Grid item xs={12} >
                        <Typography variant="subtitle2" component="div">
                            Soil Types
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary" component="div">
                            {location.state?.soilTypes}
                        </Typography>
                    </Grid>
                    <Grid mt={2} item xs={12} md={6}>
                        <Typography variant="subtitle2" component="div">
                            Sun Requirements
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary" component="div">
                            {location.state?.sunRequirements}
                        </Typography>
                    </Grid>
                    <Grid mt={2} item xs={12} md={6}>
                        <Typography variant="subtitle2" component="div">
                            Flower Time
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary" component="div">
                            {location.state?.flowerTime}
                        </Typography>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>

    </Box>);
}

export default PlantDetail;