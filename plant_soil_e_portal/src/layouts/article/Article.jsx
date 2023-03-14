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
import Card from "@mui/material/Card";
import { Box, width } from "@mui/system";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";

// Routes
import routes from "routes";

function Article() {
    const bgImage = "https://cdn.pixabay.com/photo/2016/12/05/16/46/pine-1884335_960_720.jpg"
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
                transparent
                light
            />
            <MKBox bgColor="white">
                <MKBox
                    minHeight="25rem"
                    width="100%"
                    sx={{
                        backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
                            `${linearGradient(
                                rgba(gradients.dark.main, 0.8),
                                rgba(gradients.dark.state, 0.8)
                            )}, url(${bgImage})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        display: "grid",
                        placeItems: "center",
                    }}
                />
                <Card
                    sx={{
                        p: 2,
                        mx: { xs: 2, lg: 3 },
                        mt: -8,
                        mb: 4,
                        backgroundColor: ({ palette: { white }, functions: { rgba } }) => rgba(white.main, 0.8),
                        backdropFilter: "saturate(200%) blur(30px)",
                        boxShadow: ({ boxShadows: { xxl } }) => xxl,
                    }}
                >
                    <MKBox
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center'
                        }}
                        component="section"
                        py={{ xs: 2, lg: 6 }}>
                        <MKTypography marginBottom={2} variant="h3" fontWeight="bold">
                            Growing and Caring for Coneflowers: A Comprehensive Guide
                        </MKTypography>
                        <MKTypography marginBottom={3} variant="body1" color="text" >
                            Coneflowers are easy to grow and can add color and interest to any garden or landscape.
                        </MKTypography>
                        <Box marginBottom={3} width='80%' height="500px">
                            <img src={bgImage} style={{ objectFit: 'cover', width: '100%', height: '100%' }}></img>
                        </Box>
                        <Box sx={{ paddingX: '10%' }}>
                            <MKTypography marginBottom={2} variant="body1" color="text" >
                                Coneflowers, also known as Echinacea, are a popular perennial plant with vibrant, daisy-like flowers that bloom throughout the summer and into the fall. They are native to North America and have been used for their medicinal properties for centuries. Today, coneflowers are a staple in many gardens and landscapes, as they are easy to grow, require minimal maintenance, and attract pollinators such as bees and butterflies. In this article, we will cover everything you need to know about growing and caring for coneflowers.

                                <br /><br /> Choosing the Right Location<br /> <br />

                                Coneflowers are sun-loving plants that require at least six hours of direct sunlight per day. They also prefer well-draining soil that is rich in organic matter. Before planting, choose a location that receives ample sunlight and has soil that drains well. Avoid planting coneflowers in areas that are prone to standing water or have heavy clay soils.

                                <br /><br /> Planting Coneflowers <br /> <br />

                                The best time to plant coneflowers is in the spring, after the last frost. To plant, dig a hole that is twice the width of the root ball and deep enough to cover the base of the stem. Gently loosen the roots and place the plant in the hole, making sure the top of the root ball is level with the soil surface. Backfill the hole with soil, and water thoroughly to settle the soil around the roots.

                                <br /><br />Caring for Coneflowers <br /> <br />

                                Watering: Coneflowers are drought-tolerant plants, but they still require regular watering during periods of extended dryness. Water deeply once or twice a week, depending on the weather conditions. Avoid overhead watering, as this can lead to fungal diseases.

                                Fertilizing: Coneflowers do not require a lot of fertilizer, but they will benefit from a light application of balanced fertilizer in the spring, as well as a light application of compost or organic matter in the fall.

                                Deadheading: To encourage prolonged blooming, deadhead spent flowers regularly throughout the summer. Simply remove the spent flower heads by cutting them off at the base of the stem.

                                Pruning: In the fall, after the first hard frost, cut back the stems to the ground. This will help prevent the spread of disease and encourage new growth in the spring.

                                Pest and Disease Control: Coneflowers are generally resistant to pests and diseases, but they can be susceptible to powdery mildew and aster yellows. To prevent these problems, provide adequate spacing between plants to allow for good air circulation, avoid overhead watering, and remove any infected plant material immediately.

                                <br /><br />Conclusion<br /><br />

                                Coneflowers are a beautiful and easy-to-grow perennial plant that can add color and interest to any garden or landscape. By following these simple tips for growing and caring for coneflowers, you can enjoy their vibrant blooms year after year. So why not add some coneflowers to your garden this year and see how they can enhance your outdoor space?
                            </MKTypography>
                        </Box>
                        {/* <Box display='flex'>
                          <MKTypography variant="body1" color="text" fontSize='0.9em'>
                          POSTED BY: TEST USER
                          </MKTypography>
                          <MKTypography variant="body1" color="text" fontSize='0.9em'>
                          POSTED ON: 28 JAN 202
                          </MKTypography>
                      </Box> */}
                    </MKBox>
                </Card>
            </MKBox>
        </>
    );
}

export default Article;
