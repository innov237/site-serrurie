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
    <div className="card shadow-sm flex align-items-center" id="parent">
        <img src={icon} alt="icon" className="circular-border" /> <br />
        <div className='px-2'>
            <h1 className='text-center'>{title}</h1>
            <p className="mt-4 text-center">{description}</p>
        </div>
    </div>
);

export default ServiceCard;