import React from 'react';

const Quiz = ({quiz}) => {
    const {logo, name} = quiz
    return (
        <div className='single-card'>
            <img src={logo} alt="" />
            <h2>Name : {name}</h2>
        </div>
    );
};

export default Quiz;