import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuestionDetails from '../QuestionDetails/QuestionDetails';

const QuizQuestion = () => {
    const QuizQuestion = useLoaderData()
    const questions = QuizQuestion.data.questions;
    const quizName = QuizQuestion.data.name
    return (
        <div>
            {
                <h2 className='mt-4'>Question From <span className='text-primary'>{quizName}</span></h2>
            }
            {
                questions.map(question => <QuestionDetails
                    key={question.id}
                    questions={question}
                    quizName={quizName}
                ></QuestionDetails>)
            }
        </div>
    );
};

export default QuizQuestion;