import React from 'react';
import OptionDetails from '../OptionDetails/OptionDetails';
import './QuestionDetails.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEye } from '@fortawesome/free-solid-svg-icons'
import { toast } from 'react-toastify';

const QuestionDetails = ({ questions }) => {
    const { question, options } = questions;
    // console.log(questions)

    const handleRight = (option) =>{
        const quiz = questions.correctAnswer === option;
        if(quiz){
            // alert('Right Ans');
            toast.success('Right Ans', {autoClose:1000})
        }
        else{
            // alert('Wrong Ans')
            toast.error('Wrong Ans', {autoClose: 1000})
        }
    }

    const handleEyeButton = () =>{
        toast.success(`${questions.correctAnswer}`, {autoClose : 2000})
    }

    return (
        <div className='container mt-5 question rounded'>
            <div className='d-flex justify-content-between align-items-center'>
                <h3 className='w-75 m-auto'>{question}</h3>
                <FontAwesomeIcon onClick={handleEyeButton} icon={faEye}></FontAwesomeIcon>
            </div>
            <div className='options'>
                {
                    options.map(option => <OptionDetails
                        
                        option={option}
                        handleRight={handleRight}
                    ></OptionDetails>)
                }
            </div>
        </div>
    );
};

export default QuestionDetails;