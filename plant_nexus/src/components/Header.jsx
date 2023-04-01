import { Typography } from "@mui/material";
import { Box } from "@mui/system";

function Header() {
    return (<Box
        sx={{
            backgroundImage: 'url(https://cdn.pixabay.com/photo/2015/06/25/14/13/fern-821293_960_720.jpg)',
            backgroundSize: 'cover'
        }}
        display={'flex'}
        justifyContent='center'
        alignItems={'center'}
        height={500}>
       <Box textAlign={'center'}>
         <Typography variant="h3" color={'white'} fontWeight={300}>PlantNexus</Typography>
         <Typography variant="h6" fontWeight={200} color={'white'}> Grow with Confidence: Your One-Stop Hub for Plant and Soil Management.</Typography>
       </Box>
    </Box>);
}

export default Header;