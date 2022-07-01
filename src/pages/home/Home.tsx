import React, { useEffect, useRef } from 'react';
import Banner from '../../components/banner/Banner';
import ServiceCard from '../../components/serviceCard/ServiceCard';
import iconItineraire from '../../images/itineraire.png';
import iconMoney from '../../images/save-money.png';
import iconLike from '../../images/like.png';


import './Home.css';
import { DividerVertical } from '../../components/dividerVertical/DividerVertical';
import ContactForm from '../../components/ContactForm/ContactForm';
import DownloardApp from '../../components/downloardapp/Downloardapp';
import AboutComponent from '../../components/about/AboutComponent';
import { useTranslation } from 'react-i18next';


const Home: React.FC = () => {
    const { t } = useTranslation();

    const myRef = useRef<any>(null)

    var serviceData = [
        {
            icon: iconLike,
            title: t('service.title1'),
            description: t('service.content1')
        },
        {
            icon: iconItineraire,
            title: t('service.title2'),
            description: t('service.content2')
        },
        {
            icon: iconMoney,
            title: t('service.title3'),
            description: t('service.content3')
        },
    ];


    useEffect(() => {
        myRef.current.scrollIntoView();
    });

    return <div ref={myRef}>
        <Banner></Banner>
        <AboutComponent />
        <DownloardApp />
        <div className="services-row container-fluid section5">
            <DividerVertical></DividerVertical>
            <div className="container">
                <h1 className="text-center mt-5 text-white">Nos services</h1>
                <div className="row pt-5">
                    {serviceData.map((data) => (
                        <div className="col-md-4">
                            <ServiceCard
                                icon={data.icon}
                                title={data.title}
                                description={data.description}
                            >
                            </ServiceCard>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        <ContactForm></ContactForm>
    </div>
};

export default Home;