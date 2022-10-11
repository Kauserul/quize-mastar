import React from 'react';
import './OptionDetails.css'

const OptionDetails = ({option}) => {
    return (
        <div className='option'>
            <input type="radio" className="radio me-2"/>
            <p>{option}</p>
        </div>
    );
};

export default OptionDetails;