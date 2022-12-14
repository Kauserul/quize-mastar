import { faArrowAltCircleRight, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import './Quiz.css'

const Quiz = ({ quiz }) => {
    // console.log(handleQuiz);
    const { logo, name, id } = quiz

    // console.log(quiz);

    return (
        <div className='all-card'>
            <div className='single-card'>
                <img src={logo} alt="" />
                <div className='quiz-info'>
                    <h2>{name}</h2>
                    <Link to={`/home/${id}`}>
                        <button>Go to Quiz <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></button>                   
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Quiz;