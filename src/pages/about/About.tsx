import React from "react";
import { Button, Form } from "react-bootstrap";
import { DividerVertical } from "../../components/dividerVertical/DividerVertical";
import "./about.css";
import raceMan from '../../images/image-ongo.png';
const About: React.FC = () => 
<>
<div className="footer conntainer-fluid section2" id="about">
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
</>;

export default About;
