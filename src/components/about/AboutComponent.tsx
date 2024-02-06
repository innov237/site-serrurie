import React from "react";
import { DividerVertical } from "../../components/dividerVertical/DividerVertical";
import "./About.css";
import about from '../../images/about.png';
import { useTranslation } from 'react-i18next';
import PageHeading from "../page-heading/page-heading";

const About: React.FC = () => {

    const { t } = useTranslation();

    return <>
        <div className="container-fluid about bg-gray">
            <div className="container py-100">
                <div className="row justify-center align-items-center">
                    <div className="col-md-6">
                        <span className="underline-primary text-bold">Contatez-nous</span>
                        <h1 className="title">Contactez notre service d'urgence de serrures.</h1>
                        <p className="subTitle mb-4">
                         Nous garantissons une aide immédiate à tout moment de la journée! un service compétent et le meilleur possible est très important pour nous, c'est pourquoi notre service de déverrouillage d'urgence est à votre disposition 24 heures sur 24, même les dimanches et jours fériés. alors n'hésitez pas et contactez notre service d'urgence, nous vous ouvrirons votre porte verrouillée et ne vous laisserons pas dehors sous la pluie.
                        </p>
                        <p className='text-bold'>
                            <svg width={23} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 mr-2 primary-color">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>
                            Precíz, tiszta munkavégzés
                        </p>
                        <p className='py-3 text-bold'>
                            <svg width={23} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 mr-2 primary-color">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>
                            Olcsó árak, átlátható árképzés
                        </p>
                        <p className='text-bold'>
                            <svg width={23} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 mr-2 primary-color">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>
                            Gyors, 1 órán belüli kiszállás
                        </p>

                        <div className='mt-5'>
                            <button type="button" className="btn btn-primary d-flex">
                                <svg width={30} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 mr-3">
                                    <path fillRule="evenodd" d="M19.5 9.75a.75.75 0 0 1-.75.75h-4.5a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 1 1.5 0v2.69l4.72-4.72a.75.75 0 1 1 1.06 1.06L16.06 9h2.69a.75.75 0 0 1 .75.75Z" clipRule="evenodd" />
                                    <path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clipRule="evenodd" />
                                </svg>Appelez: +9999999999</button>
                        </div>

                    </div>

                    <div className="col-md-6">
                        <img className="img-fluid d-block object-fit-cover raduis" src="https://i.pinimg.com/564x/9c/24/81/9c2481bece82b0757e90a434afafe2ec.jpg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    </>;
}
export default About;
