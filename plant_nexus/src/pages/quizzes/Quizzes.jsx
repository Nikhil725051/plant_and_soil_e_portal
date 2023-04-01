import { Box, Card, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import QuizCard from "./components/QuizCard";

function Quizzes() {

    const [allQuestions, setAllQuestions] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/quiz/getQuestions')
            .then((response) => {
                if (response.statusText === 'OK') {
                    console.log(response.data.payload);
                    setAllQuestions(response.data.payload);
                }
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])
    return (<Box
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