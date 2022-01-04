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
                                        <HashLink className="nav-link" aria-current="page" to="/about_us">About Us</HashLink>
                                    </li>
                                    <li className="nav-item">
                                        <HashLink className="nav-link" to="/faqs">FAQS</HashLink>
                                    </li>
                                    <li className="nav-item">
                                        <HashLink className="nav-link" to="/services">Services</HashLink>
                                    </li>
                                    <li className="nav-item">
                                        <HashLink className="nav-link" to="/contact">Contact</HashLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
                <div className="col-12 col-lg-3 d-flex align-items-center justify-content-center">
                    <HashLink className="pe-3 fw-bold" onClick={() => i18n.changeLanguage("en")}>
                        ENG
                    </HashLink>|
                    <HashLink className="px-3 fw-bold" onClick={() => i18n.changeLanguage("es")}>
                        ESP
                    </HashLink>
                    <HashLink className="pe-3 fw-bold" to="#">
                        <i className="fab fa-facebook"></i>
                    </HashLink>

                    <HashLink className="pe-3 fw-bold" to="#">
                    <i className="fab fa-twitter"></i>
                    </HashLink>
                </div>
            </div>
        </div>
    )

}