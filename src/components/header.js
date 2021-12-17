import React from "react";
import { HashLink } from 'react-router-hash-link';
import { useTranslation } from "react-i18next";
import logo from '../assets/img/logo1.webp'

export const Header = () => {
    const { t, i18n } = useTranslation("global");
    return (
        <div className="container-fluid bg_pink">
            <div className="row g-0">
                <div className="col-12 col-lg-3">
                    <img className="img-fluid" src={logo} alt="logo del sitio"></img>
                </div>
                <div className="col-12 col-lg-9 py-2 text-white text-center">
                    <HashLink className="pe-3 text-white fw-bold" onClick={() => i18n.changeLanguage("en")}>
                        ENG
                    </HashLink>|
                    <HashLink className="ps-3 text-white fw-bold" onClick={() => i18n.changeLanguage("es")}>
                        ESP
                    </HashLink>
                </div>
            </div>
        </div>
    )

}