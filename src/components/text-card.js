import React from 'react';
import '../style/Card.css';

const TextCard = ({ id, title, text }) => {
    return (
        <div id={id} className="card">
            <div className="card-title">
                <h2>{title}</h2>
                <hr />
            </div>
            <pre><p className="card-text">
                {text}
            </p></pre>
        </div>
    );
};

export default TextCard;