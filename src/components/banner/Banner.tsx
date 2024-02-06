import React, { useState } from 'react';
import './Banner.css';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { useTranslation } from 'react-i18next';
import { Carousel } from 'react-bootstrap';
import bannerImage from "../../images/img1.png";

const Banner: React.FC = () => {

    const { t } = useTranslation();

    var bannerData = [
        { "text": t('hero.slideText1'), "subtext": t('hero.slideSubText1') },
        { "text": t('hero.slideText2'), "subtext": t('hero.slideSubText1') }
    ];

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex: any, e: any) => {
        setIndex(selectedIndex);
    };

    return (
        <div className="container-fluid banner-div">
            <div className="container py-160">
                <div className="row justify-center align-items-center">
                    <div className="col-md-7">
                        <h1 className="title">S-R&R Schlësseldéngscht votre service de serrurerie d'urgence 24h/24 et 7j/7.</h1>
                        <p className="subTitle mb-4">
                            Vous vous trouvez devant une porte verrouillée, vous avez perdu votre clé, est-elle coincée ou cassée ? Pas de panique, S-R&R Schlësseldéngscht vous viendra en aide dans les plus brefs délais partout au Luxembourg.
                        </p>
                        <p className='text-bold'>
                            <svg width={23} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 mr-2 yellow-color">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>

                            Spécialiste des systèmes de fermeture
                        </p>
                        <p className='py-2 text-bold'>
                            <svg width={23} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 mr-2 yellow-color">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>
                            Service rapide et sécurisé
                        </p>
                        <p className='text-bold'>
                            <svg width={23} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 mr-2 yellow-color">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>
                            Coût abordable
                        </p>

                        <div className='mt-5'>
                            <button type="button" className="btn btn-primary btn-large d-flex">
                                <svg width={30} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 mr-3 mt-1">
                                    <path fillRule="evenodd" d="M19.5 9.75a.75.75 0 0 1-.75.75h-4.5a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 1 1.5 0v2.69l4.72-4.72a.75.75 0 1 1 1.06 1.06L16.06 9h2.69a.75.75 0 0 1 .75.75Z" clipRule="evenodd" />
                                    <path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clipRule="evenodd" />
                                </svg>+9999999999</button>
                        </div>

                    </div>

                    <div className="col-md-5">
                        <img src={bannerImage} className="img-fluid" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Banner;