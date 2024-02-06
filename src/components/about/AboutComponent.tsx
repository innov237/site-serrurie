import React from "react";
import { useTranslation } from 'react-i18next';
import { Button } from 'react-bootstrap';
import './About.css';

interface AboutProps {
    heading:string,
    title: string;
    description: string;
    image: string;
}

const About: React.FC<AboutProps> = ({ heading, title, description, image }) => {
    const { t } = useTranslation();

    return (
        <div className="container-fluid about bg-gray">
            <div className="container py-100">
                <div className="row justify-center align-items-center">
                    <div className="col-md-6">
                        <span className="underline-primary text-bold">{heading}</span>
                        <h1 className="title">{title}</h1>
                        <p className="subTitle mb-4">{description}</p>
                        <div className='mt-5'>
                            <Button variant="primary" className="d-flex">
                                <svg width={30} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 mr-3">
                                    <path fillRule="evenodd" d="M19.5 9.75a.75.75 0 0 1-.75.75h-4.5a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 1 1.5 0v2.69l4.72-4.72a.75.75 0 1 1 1.06 1.06L16.06 9h2.69a.75.75 0 0 1 .75.75Z" clipRule="evenodd" />
                                    <path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clipRule="evenodd" />
                                </svg> +999999999
                            </Button>
                        </div>
                    </div>
                    <div className="col-md-6 mt-4">
                        <img className="img-fluid d-block object-fit-cover radius" src={image} alt="About" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
