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
        <PageHeading title="À propos" description="À propos de nous" />
        <AboutComponent heading="Contactez-nous" title="Contactez notre service d'urgence de serrures." description="Nous garantissons une aide immédiate à tout moment de la journée! un service compétent et le meilleur possible est très important pour nous, c'est pourquoi notre service de déverrouillage d'urgence est à votre disposition 24 heures sur 24, même les dimanches et jours fériés. alors n'hésitez pas et contactez notre service d'urgence, nous vous ouvrirons votre porte verrouillée et ne vous laisserons pas dehors sous la pluie." image="https://i.pinimg.com/564x/9c/24/81/9c2481bece82b0757e90a434afafe2ec.jpg" />
      </div>
    </div>
  </>
};

export default Service;
