import React from 'react';
import '../style/Card.css';

const ImageCard = ({ src, alt }) => {
    return (
        <div className="image-card card">
            <img src={src} alt={alt}/>
        </div>
    );
};

export default ImageCard;