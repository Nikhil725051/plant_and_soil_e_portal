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

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKInput from "components/MKInput";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";

// Images
import bgImage from "assets/images/examples/blog2.jpg";
import { Call } from "@mui/icons-material";

function Detail() {
    return (
        <MKBox component="section" py={{ xs: 0, lg: 6 }}>
            <Container>
                <Grid container item>
                    <MKBox
                        width="100%"
                        bgColor="white"
                        borderRadius="xl"
                        shadow="xl"
                        mb={6}
                        sx={{ overflow: "hidden" }}
                    >
                        <Grid container spacing={2}>
                            <Grid
                                item
                                xs={12}
                                lg={5}
                                position="relative"
                                px={0}
                                sx={{
                                    backgroundImage: 'url(https://cdn.pixabay.com/photo/2016/12/05/16/46/pine-1884335_960_720.jpg)',
                                    backgroundSize: "cover",
                                }}
                            >

                            </Grid>
                            <Grid item xs={12} lg={7}>
                                <MKBox component="form" p={2} method="post">
                                    <MKBox px={3} py={{ xs: 2, sm: 6 }}>
                                        <MKTypography variant="h2" mb={1}>
                                        Botanical Profile
                                        </MKTypography>
                                    </MKBox>
                                    <MKBox pt={0.5} pb={3} px={3}>
                                        <Grid container>
                                            <Grid item xs={12} md={6} pr={1} mb={5}>
                                                <MKTypography variant="h6"  mb={1}>
                                                    Soil Types
                                                </MKTypography>
                                                <MKTypography variant="body2" color="text">
                                                sandy, rocky, and clay soils
                                                </MKTypography>
                                            </Grid>
                                            <Grid item xs={12} md={6} pr={1} mb={5}>
                                            <MKTypography variant="h6"  mb={1}>
                                                    Sun Requirements
                                                </MKTypography>
                                                <MKTypography variant="body2" color="text">
                                                Full Sun to Partial Shade
                                                </MKTypography>
                                            </Grid>
                                            <Grid item xs={12} md={6} pr={1} mb={5}>
                                            <MKTypography variant="h6"  mb={1}>
                                                    Flower Time
                                                </MKTypography>
                                                <MKTypography variant="body2" color="text">
                                                Summer, Late summer or early fall
                                                </MKTypography>
                                            </Grid>
                                            <Grid item xs={12} md={6} pr={1} mb={5}>
                                            <MKTypography variant="h6"  mb={1}>
                                            Containers
                                                </MKTypography>
                                                <MKTypography variant="body2" color="text">
                                                Suitable in 3 gallon or larger
                                                </MKTypography>
                                            </Grid>
                                            <Grid item xs={12} md={6} pr={1} mb={5}>
                                            <MKTypography variant="h6"  mb={1}>
                                            Plant Habit
                                                </MKTypography>
                                                <MKTypography variant="body2" color="text">
                                                Herb/Forb
                                                </MKTypography>
                                            </Grid>
                                        </Grid>
                                        <Grid
                                            container
                                            item
                                            xs={12}
                                            md={6}
                                            justifyContent="flex-end"
                                            textAlign="right"
                                            ml="auto"
                                        >
                                            <MKButton variant="gradient" color="info">
                                                <Call sx={{marginRight: 1}}></Call>
                                                Planting Tips
                                            </MKButton>
                                        </Grid>
                                    </MKBox>
                                </MKBox>
                            </Grid>
                        </Grid>
                    </MKBox>
                </Grid>
            </Container>
        </MKBox>
    );
}

export default Detail;
