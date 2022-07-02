import React from 'react';
import logo from '../../images/logo.png';
import facebook from '../../images/facebook.png';
import twitter from '../../images/twitter.png';
import linkedin from '../../images/linkedin.png';
import instagram from '../../images/instagram.png';
import { DividerVertical } from '../dividerVertical/DividerVertical';
import './Footer.css'
import { useTranslation } from 'react-i18next';


export const Footer = () => {
    const { t } = useTranslation();
    return (
        <div className="footer bg-footer contact">
            <DividerVertical></DividerVertical>
            <div className="container pb-5 d-flex align-items-center justify-content-center">
                <div className="row align-items-end">
                    <div className="col-md-6 pb-4">
                        <img src={logo} alt="logo" style={{ width: "100px" }} className="pt-5 pb-5" />
                        <p style={{ color: "#80889B;", fontSize: "15px" }}>
                        {t('footer.content')}
                        </p>
                        <img src={facebook} className="social-icon" style={{ width: "30px" }} alt="" />
                        <img src={twitter} className="social-icon" style={{ width: "30px" }} alt="" />
                        <img src={linkedin} className="social-icon" style={{ width: "30px" }} alt="" />
                        <img src={instagram} className="social-icon" style={{ width: "30px" }} alt="" />
                    </div>
                    <div className="col-md-3 pb-4">
                        <ul>
                            <li><h3 className='text-secondary mb-2'>{t('footer.adress')}</h3></li>
                            <li className="mt-3">
                                242 rue de Luxembourg  <br /> L-8077 Bertrange
                            </li>

                        </ul>

                    </div>
                    <div className="col-md-3 pb-4">
                        <ul>
                            <li><h3 className='text-secondary mb-2'>{t('footer.contact')}</h3></li>
                            <li className="mt-2">  (+352) 661 759 755 </li>
                            <li className="mt-2">  contact@windam.lu</li>
                        </ul>

                    </div>

                    <div className="col-md-12 text-center pt-5">
                        <p>{t('common.copyright')}</p>
                    </div>
                </div>

            </div>
        </div>
    )
};