import React from 'react';
import logo from '../../images/logo.png';
import email from '../../images/email.png';
import facebook from '../../images/facebook.png';
import twitter from '../../images/twitter.png';
import linkedin from '../../images/linkedin.png';
import instagram from '../../images/instagram.png';
import { DividerVertical } from '../dividerVertical/DividerVertical';
import './Footer.css'


export const Footer = () => (
    <div className="footer bg-footer contact">
        <DividerVertical></DividerVertical>
        <div className="container pb-5 d-flex align-items-center justify-content-center">
            <div className="row align-items-end">
                <div className="col-md-6 pb-4">
                    <img src={logo} alt="logo" style={{ width: "200px" }} className="pt-5 pb-1" />
                    <p style={{ color: "#80889B;", fontSize: "15px" }}>
                        Nous vous offrons les meilleurs moyens de transport pour tous vos déplacement urbains. Nous mettons votre sécurité au cœur de notre Système. Nous veillons à votre tranquillité et à votre confort durant votre parcours de bout en bout.
                    </p>
                    <img src={facebook} className="social-icon" style={{ width: "30px" }} alt="" />
                    <img src={twitter} className="social-icon" style={{ width: "30px" }} alt="" />
                    <img src={linkedin} className="social-icon" style={{ width: "30px" }} alt="" />
                    <img src={instagram} className="social-icon" style={{ width: "30px" }} alt="" />
                </div>
                <div className="col-md-3 pb-4">
                    <ul>
                        <li><h3 className='text-secondary mb-2'>Localisation</h3></li>
                        <li className="mt-3">
                            Yaoundé, Cameroun - Round poind nlongkak <br/> face hotel fraco
                        </li>

                    </ul>

                </div>
                <div className="col-md-3 pb-4">
                    <ul>
                        <li><h3  className='text-secondary mb-2'>Nous contacter</h3></li>
                        <li className="mt-2">  (+237) 672 317 791 </li>
                        <li className="mt-2">  (+237) 659 466 358</li>
                        <li className="mt-2">  contact@ongo237.com</li>
                    </ul>

                </div>

                <div className="col-md-12 text-center pt-5">
                    <p>   © 2022 Windam. All rights reserved.</p>
                </div>
            </div>

        </div>
    </div>
);