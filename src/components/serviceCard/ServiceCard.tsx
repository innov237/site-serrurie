import React from 'react';
import './ServiceCard.css';

type Props = {
    title: string,
    icon: string,
    description: string,
}

const ServiceCard: React.FC<Props> = ({
    title,
    icon,
    description,
}) => (
        <div className="card shadow-sm p-4" id="parent">
            <img src={icon} alt="icon" className="circular-border" /> <br />
            <h1>{title}</h1>
            <div className="divider divider"></div>
            <p className="mt-4">{description}</p>
        </div>
    );

export default ServiceCard;