import React from 'react';
import OptionDetails from '../OptionDetails/OptionDetails';
import './QuestionDetails.css'

const QuestionDetails = ({ questions }) => {
    const { question, options } = questions
    return (
        <div className='container mt-5 question'>
            <h3>{question}</h3>
            <div className='options'>
                {
                    options.map(option => <OptionDetails
                        option={option}
                    ></OptionDetails>)
                }
            </div>
        </div>
    );
};

export default QuestionDetails;