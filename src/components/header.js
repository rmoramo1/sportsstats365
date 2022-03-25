import React from "react";
import { HashLink } from 'react-router-hash-link';
import { useTranslation } from "react-i18next";
import logo from '../assets/img/logo1.webp'

export const Header = () => {
    const { t, i18n } = useTranslation("global");
    return (
        <div className="container-fluid">
            <div className="row g-0">
                <div className="col-12 col-lg-3">
                    <HashLink to="/">
                        <img className="img-fluid" src={logo} alt="logo del sitio"></img>
                    </HashLink>
                </div>
                <div className="col col-lg-6">
                    <nav className="navbar navbar-expand-lg">
                        <div className="container-fluid">
                            <button className="navbar-toggler mx-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <i className="fas fa-bars"></i>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNav">
                                <ul className="navbar-nav mx-auto">
                                    <li className="nav-item">
                                        <HashLink className="nav-link" aria-current="page" to="/about_us">{t('menu.about')}</HashLink>
                                    </li>
                                    <li className="nav-item">
                                        <HashLink className="nav-link" aria-current="page" to="/packages_page">{t('menu.packages')}</HashLink>
                                    </li>
                                    <li className="nav-item">
                                        <HashLink className="nav-link" to="/faqs">FAQS</HashLink>
                                    </li>
                                    <li className="nav-item">
                                        <HashLink className="nav-link" to="/services">{t('menu.services')}</HashLink>
                                    </li>
                                    <li className="nav-item">
                                        <HashLink className="nav-link" to="/contact">{t('menu.contact')}</HashLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
                <div className="col-12 col-lg-3 d-flex align-items-center justify-content-center">
                    <div className="col-12">
                        <button className="btn pe-3 fw-bold" onClick={() => i18n.changeLanguage("en")}>
                            ENG
                        </button>|
                        <button className="btn px-3 fw-bold" onClick={() => i18n.changeLanguage("es")}>
                            ESP
                        </button>
                        <HashLink className="pe-3 fw-bold" to="#">
                            <i className="fab fa-facebook"></i>
                        </HashLink>

                        <HashLink className="pe-3 fw-bold" to="#">
                            <i className="fab fa-twitter"></i>
                        </HashLink>
                    </div>
                </div>
            </div>
        </div>
    )

}