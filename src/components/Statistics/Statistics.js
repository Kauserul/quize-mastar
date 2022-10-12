import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './Statistics.css'

const Statistics = () => {
    const quiz = useLoaderData()
    const quizData = quiz.data
    console.log(quizData)
    return (
        <div className='container mt-5 d-flex justify-content-center line-chart'>
            <ResponsiveContainer width="80%" height={400}>

                <LineChart width={500} height={400} data={quizData}>
                    <Line type="monotone" dataKey="total" stroke="#82ca9d" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip></Tooltip>
                    <Legend></Legend>
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Statistics;