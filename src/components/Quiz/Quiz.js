import React from 'react';
import { Link } from 'react-router-dom';
import './Quiz.css'

const Quiz = ({ quiz,handleButton }) => {
    // console.log(handleQuiz);
    const { logo, name, id } = quiz

    

    return (
        <div className='all-card'>
            <div className='single-card'>
                <img src={logo} alt="" />
                <div className='quiz-info'>
                    <h2>{name}</h2>
                    <Link to={`/home/${id}`}><button>Go to Quiz</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Quiz;