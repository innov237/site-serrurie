import React, { useEffect, useRef } from "react";
import { DividerVertical } from "../../components/dividerVertical/DividerVertical";
import "./service.css";
import iconTimer from '../../images/full-time.png';
import iconItineraire from '../../images/itineraire.png';
import iconMoney from '../../images/save-money.png';
import iconLike from '../../images/like.png';
import ServiceCard from "../../components/serviceCard/ServiceCard";
import Hero from "../../components/hero/hero";
import { useTranslation } from 'react-i18next';

const Service: React.FC = () => {

  const myRef = useRef<any>(null)

  const { t } = useTranslation();


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

  return <>
    <div className="content-s" ref={myRef}>
      <Hero subTitle="|" title={t('common.service')} />
      <section>
        <div className="services-row container-fluid primary-bg">
          <DividerVertical></DividerVertical>
          <div className="container container-sm">
            <div className="row pt-5">
              {serviceData.map((data) => (
                <div className="col-md-4">
                  <ServiceCard
                    icon={data.icon}
                    title={data.title}
                    description={data.description}
                  ></ServiceCard>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  </>
};

export default Service;
