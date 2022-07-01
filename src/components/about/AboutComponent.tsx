import React from "react";
import { DividerVertical } from "../../components/dividerVertical/DividerVertical";
import "./About.css";
import about from '../../images/about.png';
import { useTranslation } from 'react-i18next';

const About: React.FC = () => {

    const { t } = useTranslation();

    return <>
        <div className="footer conntainer-fluid section2" id="about">
            <DividerVertical></DividerVertical>
            <div className="container pb-0 pt-0 d-flex align-items-center justify-content-center">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <h1 className="pb-5 text-secondary mt-5">{t('about.title')}</h1>
                        <p style={{ color: "#f2f2f5", fontSize: "18px" }}>
                        {t('about.content1')}
                        </p>
                        <p style={{ color: "#f2f2f5", fontSize: "18px" }}>
                        {t('about.content2')}
                        </p>
                    </div>
                    <div className="col-md-6">
                        <img src={about} alt="about" style={{ width: "100%", objectFit: "contain" }} className="pt-5 pb-3" />
                    </div>

                </div>

            </div>
            <DividerVertical></DividerVertical>
        </div>
    </>;
}
export default About;
