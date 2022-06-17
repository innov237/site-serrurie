import React from 'react';
import Banner from '../../components/banner/Banner';
import ServiceCard from '../../components/serviceCard/ServiceCard';
import iconweb from '../../images/icon-web.png';
import icondesign from '../../images/icon-design.png';
import iconstrategy from '../../images/icon-strategy.png';
import iconhosting from '../../images/icon-hosting.png';
import iconmarketing from '../../images/icon-marketing.png';
import iconia from '../../images/icon-ia.png';
import iconformation from '../../images/icon-formation.png';
import iconserviceclient from '../../images/icon-service-client.png';
import raceMan from '../../images/image-ongo.png';
import team from '../../images/team.jpg';
import seremoApp from '../../images/seremo.png';
import lugginApp from '../../images/luggin.png';
import iconTimer from '../../images/full-time.png';
import iconItineraire from '../../images/itineraire.png';
import iconMoney from '../../images/save-money.png';
import iconLike from '../../images/like.png';
import carCity from '../../images/car-city.png';


import './Home.css';
import { DividerVertical } from '../../components/dividerVertical/DividerVertical';
import TypeCourseCard from '../../components/TypeCourseCard/TypeCourseCard';

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

var avantageData = [
    { img: seremoApp, title: "Rentrez-vous souvent très tard ?", description: "Protègez-vous mieux contre l'insécurité ambiante dans les moyens déplacements courants dans les zones urbains." },
    { img: iconTimer, title: "Êtes-vous étrangé ou de la diaspora ?", description: "Réduisez considérablement vos factures de location de véhicules lors de vos séjours au Cameroun" },
    { img: iconTimer, title: "Êtes-vous pressé ?", description: "Épargnez-vous les longues attentes sur les trotoirs à la recherche d'un moyen de déplacement" },
    { img: iconTimer, title: "En avez-vous marre de la surcharge ?", description: "Commandez un véhicule confortable où votre tranquillité et votre satisfaction seront les priorités" },
    { img: lugginApp, title: "Planifiez-vous un voyage ou une sortie ?", description: "Trouvez le véhicule approprié pour en quelques clics ou réservez un véhicule des heures ou des jours à l'avance" },
    { img: lugginApp, title: "Rentabilisez votre véhicule personnel", description: "Ne courrez pas pour aller chercher vos enfants à l'école, Ongo peut le faire pour vous." },
];

var typeCourse = [
    { img: "https://images.caradisiac.com/logos-ref/modele/modele--peugeot-508-2e-generation/S0-modele--peugeot-508-2e-generation.jpg", title: "Classique", description: "Ce sont des véhicules propres, confortables vous permettant de faire une course à quatre." },
    // { img: process.env.PUBLIC_URL + "/images/desmathsformation.png", title: "Class VIP", description: "Ce sont des véhicules climatisés, confortables vous permettant de faire une course à trois."},
    { img: "https://occasions4x4.fr/wp-content/uploads/2011/08/4x4-japonais.jpg", title: "Class VIP", description: "Ce sont des véhicules climatisés, confortables vous permettant de faire une course à trois." },
    { img: "https://cdn-s-www.leprogres.fr/images/D8FE8277-1B51-47E4-B9AC-1B9AAEF1F55A/NW_raw/plus-petit-que-son-predecesseur-le-nouveau-combo-fait-costaud-et-tient-la-route-photo-opel-1573580290.jpg", title: "Utilitaire", description: "Ce sont des véhicules propres, confortables vous permettant de transporter les utilitaires." },
];


const Home: React.FC = () => (
    <div>
        <Banner></Banner>
        <div className="footer conntainer-fluid section2">
            <DividerVertical></DividerVertical>
            <div className="container pb-4 pt-5 d-flex align-items-center justify-content-center">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <h1 className="pb-5 text-secondary">A propos</h1>
                        <p style={{ color: "#f2f2f5", fontSize: "18px" }}>
                            Professionnel ou particulier, que ce soit une enveloppe, un classeur ou un carton, nous nous engageons à ce que votre produit soit livré au bon endroit, au bon moment
                        </p>
                        <p style={{ color: "#f2f2f5", fontSize: "18px" }}>
                            Profitez d'une équipe expérimentée dans le domaine de la livraison express.
                        </p>
                    </div>
                    <div className="col-md-6">
                        <img src={raceMan} alt="logo" style={{ width: "100%" }} className="pt-5 pb-3" />
                    </div>

                </div>

            </div>
            <DividerVertical></DividerVertical>
        </div>
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

        {/* <div className="realisations section4" id="portfolio">
            <DividerVertical></DividerVertical>
            <div className="container  pt-5 pb-5 d-flex align-items-center justify-content-center">
                <div className="row align-items-start">
                    <div className="col-md-12">
                        <h1 style={{ color: "black" }} className="">Nos Courses</h1>
                        <p className="mt-2 pt-2 pb-5" style={{ color: "black" }}>Ongo vous présente des classes de véhicule appropriés quelque soit la circonstance.</p>
                    </div>
                    <div className="col-md-12">
                        <div className="row">
                            {typeCourse.map((data) => (
                                <div className="col-md-4">
                                    <TypeCourseCard image={data.img} title={data.title} description={data.description} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div> */}
    </div>
);

export default Home;