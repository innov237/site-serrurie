import React from 'react';
import './Banner.css';
import OwlCarousel from 'react-owl-carousel';

import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';
import mobileApp from "../../images/app.jpg";

const Banner: React.FC = () => (

    <div className="banner-div container-fluid">
        <div className="row container">
            <div className="col-md-8">
                <OwlCarousel
                    className="owl-theme"
                    items={1}
                    dots={true}
                    dotClass="dot-div"
                    dotsSpeed={true}
                    autoplay={true}
                    autoplaySpeed={500}
                    loop={true}
                >
                    <div className="item">
                        <div className="slider-content">
                            <h1 className="hero__title">Windam le service de livraison express au Luxembourg</h1>
                            <div className="hero__subTitle">
                                Nous vous offrons les meilleurs moyens de transport pour tous vos déplacement urbains.
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="slider-content">
                            <h1 className="hero__title">Votre partenaire de confiance pour tous vos envois</h1>
                            <div className="hero__subTitle">
                                Nous veillons à votre tranquillité et à votre confort durant votre parcours de bout en bout.
                            </div>
                        </div>
                    </div>
                </OwlCarousel>

            </div>
            <div className="col-md-4 d-flex justify-content-center align-items-center">
                <a href="#contact"><button className="btn btn-more">Commandez</button></a>
            </div>
        </div>


    </div>
);

export default Banner;