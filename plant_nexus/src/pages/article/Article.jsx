import { Box, Typography, useMediaQuery, useTheme } from '@mui/material'
import { useLocation } from 'react-router-dom';
function Article() {

    const location = useLocation();
    const theme = useTheme();
    const isSmallerScreen = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Box m={5} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Box
                sx={{
                    width: isSmallerScreen ? '100%' : 800,
                    display: 'flex',
                    flexDirection: 'column',

                }}>
                <img
                    style={{
                        height: isSmallerScreen ? 300 : 500,
                        width: '100%',
                        objectFit: 'cover'
                    }}
                    src={location.state?.imgUrl}>

                </img>

                <Typography mt={3} variant='h5'>
                    {location.state?.title}
                </Typography>
                <Typography sx={{
                    fontSize: '15px',
                    padding: '0px',
                }}
                    mt={3}
                    variant='h5'>
                    {new Date(location.state?.createdAt).toLocaleDateString()}
                </Typography>
                <Typography sx={{
                    fontSize: '15px',
                    padding: '0px',
                }}
                    dangerouslySetInnerHTML={{
                        __html: location.state?.article,
                    }}
                    mt={3} variant='h5'>

                </Typography>
                <Typography sx={{
                    fontSize: '15px',
                    padding: '0px',
                }}

                    mt={1} variant='h5'>
                    Posted By: {location.state?.postedBy}
                </Typography>



            </Box>
        </Box>
    );
}

export default Article;