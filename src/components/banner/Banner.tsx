import React from 'react';
import './Banner.css';
import OwlCarousel from 'react-owl-carousel';

import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';
import { useTranslation } from 'react-i18next';

const Banner: React.FC = () => {

    const { t } = useTranslation();

    return (
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
                                <h1 className="hero__title">{t('hero.slideText1')}</h1>
                                <div className="hero__subTitle">
                                    {t('hero.slideSubText1')}
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="slider-content">
                                <h1 className="hero__title">{t('hero.slideText2')}</h1>
                                <div className="hero__subTitle">
                                    {t('hero.slideSubText2')}
                                </div>
                            </div>
                        </div>
                    </OwlCarousel>

                </div>
                <div className="col-md-4 d-flex justify-content-center align-items-center">
                    <a href="#commande"><button className="btn btn-more text-color">{t('common.bookNow')}</button></a>
                </div>
            </div>


        </div>
    )
};

export default Banner;