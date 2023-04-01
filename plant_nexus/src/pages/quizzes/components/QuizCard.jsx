import { Box, Card, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";

function QuizCard({ question, i }) {

    const [selectedOption, setSelectedOption] = useState('');

    return (

        <Card
            sx={{
                padding: 5,
                display: 'flex',
                flexDirection: 'column',
                gap: 3
            }}>
            <FormControl>
                <FormLabel
                    sx={{
                        '&.Mui-focused': {
                            color: selectedOption ? (selectedOption === question.answerOption ? 'green' : 'red') : 'rgba(0, 0, 0, 0.6)'
                        },
                        color: selectedOption ? (selectedOption === question.answerOption ? 'green' : 'red') : 'rgba(0, 0, 0, 0.6)'
                    }}
                    id="demo-controlled-radio-buttons-group">
                    {i + 1}.&nbsp;{question.question}
                </FormLabel>
                <RadioGroup
                    aria-labelledby="demo-controlled-radio-buttons-group"
                    name="controlled-radio-buttons-group"
                    value={selectedOption}
                    onChange={(e) => setSelectedOption(parseInt(e.target.value))}
                >
                    {question.options.map((option) => {
                        return (
                            <FormControlLabel
                                value={option.optionNo}
                                control={<Radio />}
                                label={option.option}
                                sx={{
                                    '& .MuiSvgIcon-root': {
                                        color: selectedOption === option.optionNo && selectedOption !== question.answerOption
                                            ? 'red' : (selectedOption && option.optionNo === question.answerOption
                                                ? 'green' : undefined),
                                    }
                                }}
                            ></FormControlLabel>
                        );
                    })}
                </RadioGroup>
            </FormControl>
        </Card>);
}

export default QuizCard;