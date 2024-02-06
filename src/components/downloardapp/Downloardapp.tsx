import React from 'react';
import { DividerVertical } from '../dividerVertical/DividerVertical';
import app from '../../images/phone-build.png';
import './Downloardapp.css';
import { useTranslation } from 'react-i18next';

const DownloardApp: React.FC = () => {

    const { t } = useTranslation();

    return <>
        <div className="conntainer-fluid downloadSection" id="about">
            <DividerVertical></DividerVertical>
            <div className="container pb-0 pt-0 d-flex align-items-center justify-content-center">
                <div className="row align-items-center">
                    <div className="col-md-7">
                        <h1 className="pb-5 text-secondary">{t('downloadApp.title')}</h1>
                        <p style={{ fontSize: "18px" }}>
                        {t('downloadApp.content')}
                        </p>
                        {/* <p style={{ fontSize: "18px" }}>
                            Profitez d'une équipe expérimentée dans le domaine de la livraison express.
                        </p> */}
                        <div className="mt-5">
                            <img src="https://www.seremo.co/static/media/btn-app-store.22b3eea5.svg" alt="" style={{ cursor: "pointer" }} />
                            <img src="https://www.seremo.co/static/media/btn-play-store.4ccff2d3.svg" alt="" style={{ marginLeft: "5px", cursor: "pointer" }} />
                        </div>
                    </div>
                    <div className="col-md-5">
                        <div className="w-100 d-flex align-items-center justify-content-center">
                            <img src={app} alt="about" className="pt-5 pb-3" style={{ width: "70%" }} />
                        </div>
                    </div>
                </div>

            </div>
            <DividerVertical></DividerVertical>
        </div>
    </>;
}
export default DownloardApp;
