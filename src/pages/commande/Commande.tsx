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
        <PageHeading />
        <AboutComponent/>
      </div>
    </div>
  </>
};

export default Commande;
