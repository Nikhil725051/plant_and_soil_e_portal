/*
=========================================================
* Material Kit 2 React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKAvatar from "components/MKAvatar";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";

// Images
import profilePicture from "assets/images/bruce-mars.jpg";

function Description() {
    return (
        <MKBox component="section" py={{ xs: 6 }} px={{ xs: 6, sm: 20 }}>
            <MKTypography textAlign='center' sx={{ marginBottom: 3 }} variant="h3">Cone Flower</MKTypography>
            <MKTypography textAlign='center' variant="body1" fontWeight="light" color="text">
            Coneflowers are popular perennials with good reason. They are heat and drought resistant, easy to grow, bloom for months, make great cut flowers, and attract birds and pollinators.
            Coneflowers come in glorious shades of pink, orange, yellow, red, and chartreuse, as well as a range of flower forms—standard shuttlecock to horizontal ruffs to doubles with a powder-puff center.<br />
            </MKTypography>
        </MKBox>
    );
}

export default Description;
