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

// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";

// Presentation page sections

// Presentation page components

// Routes
import routes from "routes";

import MKBadge from "components/MKBadge";
import { Button, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from "@mui/material";

import { makeStyles } from "@mui/styles";
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(3),
    },
    button: {
        margin: theme.spacing(1, 0),
    },
}));

function Quizz() {

    const classes = useStyles();
    const [selectedAnswers, setSelectedAnswers] = useState({});

    const handleAnswerChange = (questionId, answerId) => {
        setSelectedAnswers({
            ...selectedAnswers,
            [questionId]: answerId,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(selectedAnswers);
        // submit the answers to server or do something else
    };

    const questions = [
        {
            id: 1,
            text: 'What is the capital of France?',
            options: [
                { id: 'a', text: 'Paris' },
                { id: 'b', text: 'London' },
                { id: 'c', text: 'Berlin' },
                { id: 'd', text: 'Rome' },
                { id: 'e', text: 'Madrid' },
            ],
        },
        {
            id: 2,
            text: 'What is the largest continent by land area?',
            options: [
                { id: 'a', text: 'Africa' },
                { id: 'b', text: 'Asia' },
                { id: 'c', text: 'Europe' },
                { id: 'd', text: 'North America' },
                { id: 'e', text: 'South America' },
            ],
        },
    ];
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
                            Explore the Diversity of Plants
                        </MKTypography>
                        <MKTypography variant="body1" color="text">
                            Discover a diverse collection of plants, each with unique features and care requirements.
                        </MKTypography>
                    </Grid>
                </Container>
                <Grid container gap={6} ml={5}>
                    <form onSubmit={handleSubmit}>
                        {questions.map((question) => (
                           <Grid item xs={12}>
                             <FormControl
                                 key={question.id}
                                 component="fieldset"
                                 className={classes.formControl}
                             >
                                 <FormLabel component="legend">{`${question.id}. ${question.text}`}</FormLabel>
                                 <RadioGroup
                                     aria-label={question.text}
                                     name={`question-${question.id}`}
                                     value={selectedAnswers[question.id] || ''}
                                     onChange={(event) =>
                                         handleAnswerChange(question.id, event.target.value)
                                     }
                                 >
                                     {question.options.map((option) => (
                                         <FormControlLabel
                                             key={option.id}
                                             value={option.id}
                                             control={<Radio />}
                                             label={option.text}
                                         />
                                     ))}
                                 </RadioGroup>
                             </FormControl>
                           </Grid>
                        ))}
                        <Button
                            variant="contained"
                            color="primary"
                            type="submit"
                            className={classes.button}
                        >
                            Submit
                        </Button>
                    </form>
                </Grid>

            </Card>
            {/* <MKBox pt={6} px={1} mt={6}>
                <DefaultFooter content={footerRoutes} />
            </MKBox> */}
        </>
    );
}

export default Quizz;
