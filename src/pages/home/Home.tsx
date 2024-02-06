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
import { CallRow } from '../../components/callrow/callrow';


const Home: React.FC = () => {
    const { t } = useTranslation();

    const myRef = useRef<any>(null)

    var serviceData = [
        {
            icon: "https://le-de.cdn-website.com/350df5b7f3e548f0b2427f3b3d0ee6aa/dms3rep/multi/opt/AdobeStock_243176712-1920w-1920w.jpg",
            title: "Duguláselhárítás",
            description: "Kamerás csővizsgálat DN 30-tól DN 400-ig, HD felbontásban, felvétellel és jegyzőkönyvvel."
        },
        {
            icon: "https://dugulaselharitasgyor.hu/wp-content/uploads/2023/03/kameras-csovizsgalat-gyor.webp",
            title: "Csatornatisztítás (WOMA)",
            description: "Kamerás csővizsgálat DN 30-tól DN 400-ig, HD felbontásban, felvétellel és jegyzőkönyvvel."
        },
        {
            icon: "https://dugulaselharitasgyor.hu/wp-content/uploads/2023/03/kameras-csovizsgalat-gyor.webp",
            title: "Csatornatisztítás (WOMA)",
            description: "Kamerás csővizsgálat DN 30-tól DN 400-ig, HD felbontásban, felvétellel és jegyzőkönyvvel."
        }
    ];


    useEffect(() => {
        myRef.current.scrollIntoView();
    });

    return <div ref={myRef}>
        <Banner></Banner>
        <AboutComponent />
        <CallRow />
        <div className="container py-100">
            <div className='container'>
                <p className='underline-primary text-bold mb-2'>AZ ÖN GYŐRI DUGULÁSELHÁRÍTÓJA</p>
                <h2 className="text-star mb-4">Dugulás esetén számíthat ránk</h2>
            </div>
            <div className="row p-4">
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
        <div className="floating-action-button">
            <div className='d-flex align-items-center justify-content-center'>
                <svg width={50} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 mr-2 text-white mt-2 ml-2 p-2 ">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                </svg>

            </div>
        </div>
    </div>
};

export default Home;