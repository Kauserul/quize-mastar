import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuestionDetails from '../QuestionDetails/QuestionDetails';

const QuizQuestion = () => {
    const QuizQuestion = useLoaderData()
    const questions = QuizQuestion.data.questions;
    // console.log(questions)
    return (
        <div>
            {
                questions.map(question => <QuestionDetails
                    key={question.id}
                    questions={question}
                ></QuestionDetails>)
            }
        </div>
    );
};

export default QuizQuestion;