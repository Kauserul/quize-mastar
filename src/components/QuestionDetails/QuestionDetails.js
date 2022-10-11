import React from 'react';
import OptionDetails from '../OptionDetails/OptionDetails';

const QuestionDetails = ({questions}) => {
    const {question, options} = questions
    return (
        <div>
            <h3>{question}</h3>
            {
                options.map(option => <OptionDetails
                    option={option}
                ></OptionDetails>)
            }
        </div>
    );
};

export default QuestionDetails;