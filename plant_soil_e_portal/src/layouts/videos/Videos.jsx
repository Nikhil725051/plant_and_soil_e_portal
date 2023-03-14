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
import Card from "@mui/material/Card";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKSocialButton from "components/MKSocialButton";

// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";


// Presentation page components
import BuiltByDevelopers from "pages/Presentation/components/BuiltByDevelopers";

// Routes
import routes from "routes";
import footerRoutes from "footer.routes";


import MKBadge from "components/MKBadge";


function Videos() {
    return (
        <>
            <DefaultNavbar
                routes={routes}
                action={{
                    type: "external",
                    route: "https://www.creative-tim.com/product/material-kit-react",
                    label: "free download",
                    color: "info",
                }}
                sticky
            />
            <MKBox
                minHeight="75vh"
                width="100%"
                sx={{
                    backgroundImage: `url('https://cdn.pixabay.com/photo/2015/06/25/14/13/fern-821293_960_720.jpg')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    display: "grid",
                    placeItems: "center",
                }}
            >
                <Container>
                    <Grid container item xs={12} lg={7} justifyContent="center" mx="auto">
                        <MKTypography
                            variant="h1"
                            color="white"
                            mt={-6}
                            mb={1}
                            sx={({ breakpoints, typography: { size } }) => ({
                                [breakpoints.down("md")]: {
                                    fontSize: size["3xl"],
                                },
                            })}
                        >
                            PlantNexus{" "}
                        </MKTypography>
                        <MKTypography
                            variant="body1"
                            color="white"
                            textAlign="center"
                            px={{ xs: 6, lg: 12 }}
                            mt={1}
                        >
                            Grow with Confidence: Your One-Stop Hub for Plant and Soil Management.
                        </MKTypography>
                    </Grid>
                </Container>
            </MKBox>
            <Card
                sx={{
                    minHeight: '100vh',
                    p: 2,
                    mx: { xs: 2, lg: 3 },
                    mt: -8,
                    mb: 4,
                    backgroundColor: ({ palette: { white }, functions: { rgba } }) => rgba(white.main, 0.8),
                    backdropFilter: "saturate(200%) blur(30px)",
                    boxShadow: ({ boxShadows: { xxl } }) => xxl,
                }}
            >
                <Container>
                    <Grid
                        container
                        item
                        xs={12}
                        lg={6}
                        flexDirection="column"
                        alignItems="center"
                        sx={{ textAlign: "center", my: 6, mx: "auto", px: 0.75 }}
                    >
                        <MKBadge
                            variant="contained"
                            color="info"
                            badgeContent="Learn"
                            container
                            sx={{ mb: 2 }}
                        />
                        <MKTypography variant="h2" fontWeight="bold">
                            The Green Scene
                        </MKTypography>
                        <MKTypography variant="body1" color="text">
                            Discover eco-friendly plant and soil management techniques for healthy plants and soil.
                        </MKTypography>
                    </Grid>
                </Container>
                <Grid container gap={6} justifyContent='center'>
                    <Grid item xs={12} md={3}>
                        <MKTypography display="inline" variant="h5" textTransform="capitalize" fontWeight="regular">
                            Complete Guide to Purple Coneflower - Echinacea purpurea
                        </MKTypography>
                        <iframe width="300" height="315" src="https://www.youtube.com/embed/Ty3oM31RtVo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <iframe width="300" height="315" src="https://www.youtube.com/embed/Ty3oM31RtVo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <iframe width="300" height="315" src="https://www.youtube.com/embed/Ty3oM31RtVo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <iframe width="300" height="315" src="https://www.youtube.com/embed/Ty3oM31RtVo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </Grid>
                </Grid>

            </Card>
            {/* <MKBox pt={6} px={1} mt={6}>
                <DefaultFooter content={footerRoutes} />
            </MKBox> */}
        </>
    );
}

export default Videos;
