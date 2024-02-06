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
import bannerImage2 from "../../images/img2.png";


const Home: React.FC = () => {
    const { t } = useTranslation();

    const myRef = useRef<any>(null)

    var serviceData = [
        {
            icon: "https://le-de.cdn-website.com/350df5b7f3e548f0b2427f3b3d0ee6aa/dms3rep/multi/opt/AdobeStock_243176712-1920w-1920w.jpg",
            title: "Dépannage 24/7",
            description: "Des serruriers disponibles à tout moment pour résoudre vos problèmes de serrurerie, que ce soit pour une urgence ou une intervention planifiée."
        },
        {
            icon: "https://dugulaselharitasgyor.hu/wp-content/uploads/2023/03/kameras-csovizsgalat-gyor.webp",
            title: "Installation de Serrures et de Systèmes de Sécurité",
            description: "Des experts pour sécuriser votre domicile ou votre entreprise avec des serrures de qualité et des solutions de sécurité avancées."
        },
        {
            icon: "https://dugulaselharitasgyor.hu/wp-content/uploads/2023/03/kameras-csovizsgalat-gyor.webp",
            title: "Conseils Experts",
            description: "Des conseils personnalisés pour renforcer la sécurité de votre propriété, adaptés à vos besoins spécifiques."
        }
    ];


    useEffect(() => {
        myRef.current.scrollIntoView();
    });

    return <div ref={myRef}>
        <Banner></Banner>
        <AboutComponent heading="Contactez-nous" title="Contactez notre service d'urgence de serrures." description="Nous garantissons une aide immédiate à tout moment de la journée! un service compétent et le meilleur possible est très important pour nous, c'est pourquoi notre service de déverrouillage d'urgence est à votre disposition 24 heures sur 24, même les dimanches et jours fériés. alors n'hésitez pas et contactez notre service d'urgence, nous vous ouvrirons votre porte verrouillée et ne vous laisserons pas dehors sous la pluie." image={bannerImage2} />
        <CallRow />
        <div className="container py-100">
            <div className='container'>
                <p className='underline-primary text-bold mb-2'>Nos services</p>
                <h2 className="text-star mb-4">Des services personnalisés adaptés à vos besoins.</h2>
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
        <div className="bg-gray py-100">
            <div className="container ">
                <h1 className="title">Dans quelle mesure vos serrures de porte sont-elles sécurisées ? </h1>
                <p>Très peu de gens y pensent. Au plus tard après une effraction, cela devient un problème majeur. Prévenir plutôt que s'abstenir - Il n'est pas toujours nécessaire de dépenser beaucoup d'argent pour des systèmes de sécurité, des systèmes de verrouillage et des systèmes de clés complexes. Des mesures simples mais efficaces suffisent souvent à protéger votre maison contre le cambriolage et le vol. PEU IMPORTE QU'IL S'AGIT D'UNE PORTE, D'UNE SERRURE OU D'UNE FENÊTRE - NOUS OFFRONS SÉCURITÉ ET AIDE RAPIDE ! En tant qu'interlocuteur compétent pour les questions concernant les serrures, les clés et la sécurité, nous serons heureux de vous conseiller sur les diverses mesures qui peuvent être mises en œuvre rapidement et qui sont à la fois peu coûteuses et efficaces. N'hésitez pas et prenez rendez-vous avec votre spécialiste en technologie de sécurité au Luxembourg au (numéro) - nous vous conseillerons sur place et trouverons avec vous une solution sûre.</p>
            </div>
        </div>
        <div className="py-100">
            <div className="container">
                <h1 className="title">VOTRE SPÉCIALISTE DES SYSTÈMES DE FERMETURE AU LUXEMBOURG</h1>
                <p>S-R&R Locksmith Service est votre interlocuteur pour toutes questions concernant les serrures et les clés ! Nous remplacerons vos anciennes serrures par des serrures de sécurité fiables et serons heureux de vous conseiller sur les questions de sécurité. LA QUINCAILLERIE DE PORTE ET LES BOUTONS DE PORTE PROTÈGENT EFFICACEMENT CONTRE LE CAMBRIOLAGE Il n’est pas toujours nécessaire d’installer des systèmes de sécurité et des systèmes de clés compliqués. Des mesures simples mais efficaces suffisent souvent à protéger votre maison contre le cambriolage et le vol. Il existe toute une série de mesures qui peuvent être mises en œuvre rapidement et qui sont à la fois peu coûteuses et efficaces. Un moyen simple et économique d'offrir une protection supplémentaire consiste à utiliser des ferrures de protection pour les portes et les fenêtres. Ces ferrures de sécurité sont non seulement rapides à installer, mais elles ne peuvent pas être retirées de l'extérieur et offrent une protection supplémentaire au cylindre. Premiers secours après une effraction ! Il est également judicieux de remplacer les poignées de porte et de passer aux boutons de porte, car ceux-ci ne peuvent pas être ouverts facilement, même lorsqu'ils sont déverrouillés.</p>
            </div>
        </div>
        <div className="container-fluid bg-gray">
            <div className="py-100">
                <div className="container">
                    <h1 className="title">PEU IMPORTE QU'IL S'AGIT D'UNE PORTE, D'UNE SERRURE OU D'UN CYLINDRE - NOUS OFFRONS SÉCURITÉ ET AIDE RAPIDE ! </h1>
                    <p>Nous ne sommes pas seulement des experts en serrures, clés et sécurité, mais également votre interlocuteur pour les systèmes de sécurité et les systèmes de boîtes aux lettres. Nous développons des offres sur mesure selon vos souhaits - du système de clés central au montage standardisé de boîtes aux lettres. Vous avez des questions sur notre offre ? Contactez-nous au (+999999999) Nous attendons votre appel avec impatience ! S-R&R Schlësseldéngscht, votre spécialiste des systèmes de verrouillage au Luxembourg</p>
                </div>
            </div>
        </div>
    </div>
};

export default Home;