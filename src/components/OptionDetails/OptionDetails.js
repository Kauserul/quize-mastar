import React from 'react';
import './OptionDetails.css'

const OptionDetails = ({ option,handleRight }) => {
    return (
        <div className='option'>
            <button onClick={()=>handleRight(option)}>
                <input type="radio" className="radio me-2" />
                <p>{option}</p>
            </button>
        </div>
    );
};

export default OptionDetails;