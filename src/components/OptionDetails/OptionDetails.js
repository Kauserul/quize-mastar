import React from 'react';

const OptionDetails = ({option}) => {
    return (
        <div>
            <input type="checkbox" className="radio" />
            <p>{option}</p>
        </div>
    );
};

export default OptionDetails;