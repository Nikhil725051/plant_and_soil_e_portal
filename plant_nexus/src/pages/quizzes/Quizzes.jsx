import { Box, Card, CircularProgress, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import QuizCard from "./components/QuizCard";

function Quizzes() {

    const [allQuestions, setAllQuestions] = useState([]);
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        axios.get(process.env.REACT_APP_BASE_URL + '/quiz/getQuestions')
            .then((response) => {
                if (response.statusText === 'OK' || response.status === 200) {
                    console.log(response.data.payload);
                    setLoading(false);
                    setAllQuestions(response.data.payload);
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
                {allQuestions.map((question, i) => {
                    return (
                        <QuizCard question={question} i={i} />
                    );
                })}
            </Box>);
}

export default Quizzes;