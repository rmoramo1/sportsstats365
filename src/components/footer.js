import React from "react";
import { HashLink } from "react-router-hash-link";
import { useTranslation } from "react-i18next";
import logo_vacio from "../assets/img/logo_vacio.webp";

export const Footer = () => {
    const { t } = useTranslation("global");
    return (
        <div className="footer py-2">
            <div className="row g-0 text-center">
                <div className="col-12 col-lg-4">
                    <div className="col-12 fs-4">{t('menu.LINKS')}</div>
                    <ul className="list-unstyled">
                        <li>
                            <HashLink smooth to="/home#home">{t('menu.home')}</HashLink>
                        </li>
                        <li>
                            <HashLink smooth to="/faqs#faqs">FAQS</HashLink>
                        </li>
                        <li className="nav-item">
                            <HashLink smooth aria-current="page" to="/packages_page#packages_page">{t('menu.packages')}</HashLink>
                        </li>
                        <li>
                            <HashLink smooth to="/about_us#about_us">{t('menu.about')}</HashLink>
                        </li>
                        <li>
                            <HashLink smooth to="/services#services">{t('menu.services')}</HashLink>
                        </li>
                        <li>
                            <HashLink smooth to="/contact#contact">{t('menu.services')}</HashLink>
                        </li>
                    </ul>
                </div>
                <div className="col-12 col-lg-4 d-flex justify-content-center align-items-center">
                    <img src={logo_vacio} alt="logo of the site" className="img-fluid"></img>
                </div>
                <div className="col-12 col-lg-4 d-flex justify-content-center align-items-center">
                    <div className="row g-0 fs-2 pt-3">
                        <div className="col-6 text-end pe-2">
                            <HashLink to="/">
                                <i className="fab fa-facebook"></i>
                            </HashLink>
                        </div>
                        <div className="col-6 text-start">
                            <HashLink to="/">
                                <i className="fab fa-twitter"></i>
                            </HashLink>
                        </div>
                        <div className="col-12">
                            <a className="fst-italic link_footer" href="mailto:sales@sportsstats365.com?subject=Sports Stats 365 packages">sales@sportsstats365.com</a>
                        </div>
                        <div className="col-12 fs-5">
                        {t('contact.span7')} <br/>
                            <a href="tel:+1-877-944-3767">+1-877-944-3767</a>
                        </div>
                        <div className="col-12 fs-5">
                        {t('contact.span8')} <br/>
                            <a href="tel:+01-800-099-0620">+01-800-099-0620</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-12 d-flex justify-content-center align-items-center">
                COPYRIGHT SPORTS STATS 2022
            </div>
        </div>
    )

}