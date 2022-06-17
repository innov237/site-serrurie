import React from "react";
import { Button, Form } from "react-bootstrap";
import { DividerVertical } from "../../components/dividerVertical/DividerVertical";
import "./service.css";
import raceMan from '../../images/image-ongo.png';
import team from '../../images/team.jpg';
import seremoApp from '../../images/seremo.png';
import lugginApp from '../../images/luggin.png';
import iconTimer from '../../images/full-time.png';
import iconItineraire from '../../images/itineraire.png';
import iconMoney from '../../images/save-money.png';
import iconLike from '../../images/like.png';
import carCity from '../../images/car-city.png';
import ServiceCard from "../../components/serviceCard/ServiceCard";
import Hero from "../../components/hero/hero";

var serviceData = [
    {
        icon: iconLike,
        title: "Livraison Express",
        description: "Les envois sont généralement livrés dans l'heure de l'enlèvement ou au plus tard endéans la deuxième heure."
    },
    {
        icon: iconItineraire,
        title: "Idistribution / Colis",
        description: "Vous pouvez suivre votre itinéraire et votre déplacement sur votre spartphone et partager les informations à des proches."
    },
    {
        icon: iconMoney,
        title: "Relève de courrier",
        description: "Vous désirez que vos colis, cadeaux ou invitations arrivent dans un état impeccable à destination ? Utilisez De Coursier pour toutes vos distributions et envois."
    },
    {
        icon: iconTimer,
        title: "Relève de courrier",
        description: "Le matin, De Coursier récupère quotidiennement le courrier, les recommandés et les colis entrants des entreprises dans les boîtes postales, et les livres au client"
    },
    {
        icon: iconTimer,
        title: "Relève de courrier",
        description: "Le matin, De Coursier récupère quotidiennement le courrier, les recommandés et les colis entrants des entreprises dans les boîtes postales, et les livres au client"
    },
    {
        icon: iconTimer,
        title: "Relève de courrier",
        description: "Le matin, De Coursier récupère quotidiennement le courrier, les recommandés et les colis entrants des entreprises dans les boîtes postales, et les livres au client"
    },

];

const Service: React.FC = () => (
  
  <>
    <div className="content-s">
      <Hero  subTitle="Nos" title="service"/>
      <section>
        <div className="services-row container-fluid primary-bg">
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
                  ></ServiceCard>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  </>
);

export default Service;
