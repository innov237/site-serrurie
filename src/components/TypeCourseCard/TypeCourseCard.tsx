import React from 'react';
import './TypeCourseCard.css';

type Props = {
    image: string,
    title: string,
    description: string,
}

const TypeCourseCard: React.FC<Props> = ({ image, title, description }) => (

    <div className="app-card">
        <div className="card-container">
            <img style={{ width: "100%", maxHeight: "270px" }} className="app__img" src={image} alt="img" />
        </div>
        <div className="app-card-content">
            <h1 className="badge">{title}</h1>
            <p className="pt-2">{description}</p>
        </div>
    </div>

);

export default TypeCourseCard;