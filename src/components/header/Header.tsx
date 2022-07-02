import React, { useState } from 'react';
import './Header.css';
import logo from '../../images/logo-bn.png';
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
            <nav className="navbar navbar-lg conntainer-fluid" role="navigation">
                <div className="navbar hidden-sm">
                    <a className="navbar-brand" href="#"><img src={logo} alt="logo" className="logo" /></a>
                </div>

                <div className="navbar navbar-expand">
                    <ul className="nav navbar-nav navbar-left">
                        <li className="nav-item"><a className="nav-link" href="#">{t('menu.home')}</a></li>
                        <li className="nav-item"><a className="nav-link" href="#commande">{t('menu.booking')}</a></li>
                        <li className="nav-item"><a className="nav-link" href="#service">{t('menu.services')}</a></li>
                        <li className="nav-item"><a className="nav-link" href="#contact">{t('menu.contact')}</a></li>
                        <li className="nav-item"><a className="nav-link" href="#about">{t('menu.about')}</a></li>
                        <div className="pb-5 nav-item">
                            <Lang color={false} />
                        </div>
                    </ul>
                </div>
                <div className="nav-menu">
                    <div>
                        <a className="navbar-brand" href="#"><img src={logo} alt="logo" className="logo" /></a>
                    </div>
                    <div className="d-flex justify-content-center align-items-center">
                        <li className="nav-item mb-4" style={{ float: 'left' }}><Lang color={false} /></li>
                        <li onClick={showMenuf} className="nav-item" style={{ float: 'right' }}><img src={!shoMenu ? iconMenu : iconClose} className="menu-icon" style={{ width: "50px" }} /></li>
                    </div>
                </div>

            </nav>
            <div className="menu__collaps" style={{ display: shoMenu ? "block" : "none" }}>
                <div className="menu__collaps__items">

                    <ol>
                        <li>
                            <a href="/" onClick={showMenuf}>
                                {t('menu.home')}
                            </a>
                        </li>
                        <li>
                            <a href="#commande" onClick={showMenuf}>
                                {t('menu.booking')}
                            </a>
                        </li>
                        <li>
                            <a href="#service" onClick={showMenuf}>
                                {t('menu.services')}
                            </a>
                        </li>
                        <li>
                            <a href="#contact" onClick={showMenuf}>
                                {t('menu.contact')}
                            </a>
                        </li>
                        <li>
                            <a href="#about" onClick={showMenuf}>
                                {t('menu.about')}
                            </a>
                        </li>
                    </ol>

                </div>
            </div>
        </div>

    );

};

