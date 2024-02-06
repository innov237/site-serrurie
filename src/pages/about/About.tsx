import React, { useEffect, useRef } from "react";
import "./About2.css";
import AboutComponent from "../../components/about/AboutComponent";
import PageHeading from "../../components/page-heading/page-heading";
const About: React.FC = () => {

    const myRef = useRef<any>(null)


    useEffect(() => {
        myRef.current.scrollIntoView();
    });

    return <>
        <div className="conntainer-fluid section2" id="about" ref={myRef}>
            <div style={{ paddingTop: "100px" }}>
                <PageHeading title="À propos" description="À propos de nous" />
                <AboutComponent heading="À propos" title="S-R&R Schlësseldéngscht : Votre Service de Serrurerie d'Urgence 24h/24 et 7j/7 au Luxembourg" description="Vous vous trouvez devant une porte verrouillée, vous avez perdu votre clé, est-elle coincée ou cassée ? Pas de panique, S-R&R Schlësseldéngscht vous viendra en aide dans les plus brefs délais partout au Luxembourg." image="https://i.pinimg.com/564x/9c/24/81/9c2481bece82b0757e90a434afafe2ec.jpg" />
            </div>
        </div>
    </>
};

export default About;
