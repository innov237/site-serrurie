import React from 'react';
import logo from '../../images/mylogo.png';
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
        <div className="footer contact container-fluid">
            <div className="container py-100">
                <div className="row align-items-start justify-content-center">
                    <div className="col-md-4 pb-4">
                        <img src={logo} alt="logo" style={{ width: "200px" }} className="pt-2 pb-2" />
                        <p className='mb-4 text-bold' style={{ fontSize: "15px" }}>
                            Duguláselhárítás Győr. Professzionális duguláselhárítás és csatornatisztítás Győrben és környékén, Non-Stop, bontás nélkül, garanciával, szakembertől.
                        </p>
                        <img src={facebook} className="social-icon" style={{ width: "30px" }} alt="" />
                        <img src={twitter} className="social-icon" style={{ width: "30px" }} alt="" />
                        <img src={linkedin} className="social-icon" style={{ width: "30px" }} alt="" />
                        <img src={instagram} className="social-icon" style={{ width: "30px" }} alt="" />
                    </div>
                    <div className="col-md-4 pb-4">
                        <ul>
                            <li><h3 className='text-primary mb-4 underline-primary'>Szolgáltatásaink</h3></li>
                            <li className="mt-4 text-sm">
                                9022 Győr, Bajcsy-Zsilinszky út 59.
                            </li>
                            <li className="mt-3 text-sm">
                                9022 Győr, Bajcsy-Zsilinszky út 59.
                            </li>
                            <li className="mt-3 text-sm">
                                9022 Győr, Bajcsy-Zsilinszky út 59.
                            </li>
                            <li className="mt-3 text-sm">
                                9022 Győr, Bajcsy-Zsilinszky út 59.
                            </li>

                        </ul>

                    </div>
                    <div className="col-md-4 pb-4">
                        <ul>
                            <li><h3 className='text-primary underline-primary mb-4'>Hírlevél</h3></li>
                            <li className="mt-4 d-flex text-sm">
                                <svg width={20} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 mr-2 text-primary">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                                </svg>

                                +36 70 408 4732
                            </li>
                            <li className="mt-2 d-flex text-sm py-2">
                                <svg width={20} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 mr-2 text-primary">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                                </svg>

                                info@dugulaselharitas.hu
                            </li>
                            <li className="mt-2 d-flex text-sm">
                                <svg width={20} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 mr-2 text-primary">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                </svg>
                                9022 Győr, Bajcsy-Zsilinszky út 59.
                            </li>
                        </ul>
                    </div>

                    <div className="col-md-12 text-center pt-5">
                        <hr />
                        <p>Minden jog fenntartva © 2023 Duguláselhárítás Győr</p>
                    </div>
                </div>

            </div>
        </div>
    )
};