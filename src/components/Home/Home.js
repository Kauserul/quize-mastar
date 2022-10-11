import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';
import './Home.css'

const Home = () => {
    const apiQuizs = useLoaderData();
    const quizs = apiQuizs.data
    console.log(quizs);
    return (
        <div>
            <div className='home container mt-3'>
                <div className='home-des ms-4'>
                    <h2 className='mb-4'>QuizMasters</h2>
                    <p>The duty of the Quizmaster is to round out the evaluation portion of the meeting in an upbeat way, testing the audience’s listening skills.  It is a question-and-answer period, highlighting interesting information learned throughout the meeting. You lead by exemplifying your own active listening.</p>
                </div>
            </div>
            <div>
                {
                    quizs.map(quiz => <Quiz 
                        key={quiz.id}
                        quiz={quiz}
                    ></Quiz>)
                }
            </div>
        </div>
    );
};

export default Home;