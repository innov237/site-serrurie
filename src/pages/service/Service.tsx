import React, { useEffect, useRef } from "react";
import { DividerVertical } from "../../components/dividerVertical/DividerVertical";
import "./service.css";
import iconItineraire from '../../images/itineraire.png';
import iconMoney from '../../images/save-money.png';
import iconLike from '../../images/like.png';
import ServiceCard from "../../components/serviceCard/ServiceCard";
import { useTranslation } from 'react-i18next';
import PageHeading from "../../components/page-heading/page-heading";
import AboutComponent from "../../components/about/AboutComponent";

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
    <div className="conntainer-fluid section2" id="about" ref={myRef}>
      <div style={{ paddingTop: "100px" }}>
        <PageHeading />
        <AboutComponent />
      </div>
    </div>
  </>
};

export default Service;
