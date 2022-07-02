import React, {useState} from 'react';
import './Banner.css';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { useTranslation } from 'react-i18next';
import { Carousel } from 'react-bootstrap';

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
        <div className="banner-div container-fluid">
            <div className="row container">
                <div className="col-md-8">
                    <Carousel activeIndex={index} onSelect={handleSelect}>
                        {bannerData.map((result, index) => {
                            return <Carousel.Item>
                                <div className="item" key={index}>
                                    <div className="slider-content">
                                        <h1 className="hero__title">{result['text']}</h1>
                                        <div className="hero__subTitle">
                                            {result['subtext']}
                                        </div>
                                    </div>
                                </div>
                            </Carousel.Item>
                        })}
                    </Carousel>
                    <div className="row mdot-div">
                        <div className={index == 0 ? "active col-2" : "col-2"}>
                            <span className="text-secondary">.</span>
                        </div>
                        <div className={index == 1 ? "active col-2" : "col-2"}>
                            <span className="text-secondary">.</span>
                        </div>
                    </div>
                </div>

                <div className="col-md-4 d-flex justify-content-center align-items-center">
                    <a href="#commande"><button className="btn btn-more text-color">{t('common.bookNow')}</button></a>
                </div>
            </div>


        </div>
    )
};

export default Banner;