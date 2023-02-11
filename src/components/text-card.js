import React from 'react';
import '../style/Card.css';

const Card = ({ title, text }) => {
    return (
        <div className="card">
            <div className="card-title">
                <h2>{title}</h2>
                <hr />
            </div>
            <p className="card-text">{text}</p>
        </div>
    );
};

export default Card;