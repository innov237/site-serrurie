import React, { useState } from 'react';
import './Header.css';
import logo from '../../images/mylogo-old.png';
import iconMenu from '../../images/menu.svg';
import iconClose from '../../images/close.svg';
import Lang from '../../enums/Lang';
import { useTranslation } from 'react-i18next';


export default function Header() {

    const [shoMenu, setstate] = useState(false);
    const [overflowType, setstateOverFlow] = useState("block");
    const { t } = useTranslation();

    const css = `
    body {
        overflow:${overflowType};
    }
    `;

    const showMenuf = () => {
        setstate(!shoMenu);
        if (shoMenu == false) {
            setstateOverFlow("hidden");
        } else {
            setstateOverFlow("block");
        }

    }

    return (
        <div>
            <style>
                {css}
            </style>
            <div className='toptext__nav text-center text-white text-bold py-2'>Är schlësseldéngscht fir d'aganzt Lëtzebuerger Land <br /> Zënter 2010 zu Lëtzebuerg</div>
            <nav className="navbar navbar-lg conntainer-fluid" role="navigation">
                <div className="navbar hidden-sm">
                    <a className="navbar-brand" href="#"><img src={logo} alt="logo" className="logo" /></a>
                    <div className='d-flex'>
                        <span className='text-primary text-bold slogan'>Serrurier d'urgence</span>
                    </div>
                </div>

                <div className="navbar navbar-expand">
                    <ul className="nav navbar-nav navbar-left d-flex align-items-center">
                        <li className="nav-item"><a className="nav-link" href="#">Accueil</a></li>
                        <li className="nav-item"><a className="nav-link" href="#about">À propos</a></li>
                        <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
                        <div className="mb-3 nav-item navbar-left d-flex align-items-center">
                            <Lang color={false} />
                        </div>
                    </ul>
                </div>
                <div className="nav-menu">
                    <div className='d-flex justify-content-center align-items-center'>
                        <a className="navbar-brand" href="#"><img src={logo} alt="logo" className="logo" height={120} /></a>
                        <span className='text-primary text-bold slogan ml-1'>Serrurier d'urgence</span>
                    </div>
                    <div className="d-flex justify-content-center align-items-center">
                        <li className="nav-item mb-4" style={{ float: 'left' }}><Lang color={false} /></li>
                        <li onClick={showMenuf} className="nav-item text-white" style={{ float: 'right' }}>{!shoMenu ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-20 h-20">
                            <path width={100} stroke-linecap="round" stroke-linejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM3.75 12h.007v.008H3.75V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm-.375 5.25h.007v.008H3.75v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                        </svg>
                            : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-20 h-20">
                                <path width={100} stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                            </svg>
                        } </li>
                    </div>
                </div>

            </nav>
            <div className="menu__collaps" style={{ display: shoMenu ? "block" : "none" }}>
                <div className="menu__collaps__items">

                    <ol>
                        <li>
                            <a href="/" onClick={showMenuf}>
                                Accueil
                            </a>
                        </li>
                        <li>
                            <a href="#about" onClick={showMenuf}>
                                À propos
                            </a>
                        </li>
                        <li>
                            <a href="#contact" onClick={showMenuf}>
                                Contact
                            </a>
                        </li>

                    </ol>

                </div>
            </div>
        </div>

    );

};

