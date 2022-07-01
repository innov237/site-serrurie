import { MenuItem, Select } from "@material-ui/core";
import React, { ChangeEvent, useState } from "react"
import { Controller, useForm } from "react-hook-form";
import { useTranslation } from 'react-i18next';
import { Language } from "./Language";
import Usaflag from "../images/usa-today.png";
import Franceflag from "../images/france.png";
import Allemandflag from "../images/allemand.png";
import './Lang.css';

type Color = {
    color: boolean,
}

const Lang: React.FC<Color> = (props) => {


    const { i18n } = useTranslation();
    const [lang, setLang] = useState<Language>(i18n.language as Language);
    const { register } = useForm<any>();


    let changeLanguage = (event: ChangeEvent<HTMLSelectElement>) => {
        let language = event.target.value;
        switch (language) {
            case Language.EN:
                setLang(Language.EN);
                i18n.changeLanguage(Language.EN);
                break;
            case Language.FR:
                setLang(Language.FR);
                i18n.changeLanguage(Language.FR);
                break;
            case Language.DE:
                setLang(Language.DE);
                i18n.changeLanguage(Language.DE);
                break;
            default:
                setLang(Language.FR);
                i18n.changeLanguage(Language.FR);
                break;
        }
    }

    return (
        <div className="menu__item__link mt-2 ml-5">

            <Select
                labelId="demo-simple-select-label"
                id="my-input"
                type="select"
                name="lang"
                disableUnderline={true}
                value={lang}
                inputRef={register}
                onChange={(e: any) => changeLanguage(e)}
            >
                <MenuItem value={Language.EN}> <img src={Usaflag} alt="en" className="flag-sm" /><span className="text-black"> EN</span></MenuItem>
                <MenuItem value={Language.FR} selected={true}> <img src={Franceflag} alt="fr" className="flag-sm" /><span className="text-black"> FR</span></MenuItem>
                <MenuItem value={Language.DE} selected={true}> <img src={Allemandflag} alt="fr" className="flag-sm" /><span className="text-black"> DE</span></MenuItem>

            </Select>

        </div>
    )
}

export default Lang;