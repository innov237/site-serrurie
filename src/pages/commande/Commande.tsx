import React, { useEffect, useRef } from "react";
import "./Commande.css";
import { useTranslation } from 'react-i18next';
import Service from "../service/Service";
import PageHeading from "../../components/page-heading/page-heading";
import AboutComponent from "../../components/about/AboutComponent";

const Commande: React.FC = () => {

  const myRef = useRef<any>(null)

  const { t } = useTranslation();

  useEffect(() => {
    myRef.current.scrollIntoView();
  });

  function onSubmit(data: any) {
    data.preventDefault();

    console.log(data.target);
  }

  return <>
    <div className="conntainer-fluid section2" id="about" ref={myRef}>
      <div style={{ paddingTop: "100px" }}>
      <PageHeading title="À propos" description="À propos de nous" />
        <AboutComponent heading="Contactez-nous" title="Contactez notre service d'urgence de serrures." description="Nous garantissons une aide immédiate à tout moment de la journée! un service compétent et le meilleur possible est très important pour nous, c'est pourquoi notre service de déverrouillage d'urgence est à votre disposition 24 heures sur 24, même les dimanches et jours fériés. alors n'hésitez pas et contactez notre service d'urgence, nous vous ouvrirons votre porte verrouillée et ne vous laisserons pas dehors sous la pluie." image="https://i.pinimg.com/564x/9c/24/81/9c2481bece82b0757e90a434afafe2ec.jpg" />
      </div>
    </div>
  </>
};

export default Commande;
