import React from "react";
import { HashLink } from "react-router-hash-link";

import logo_vacio from "../assets/img/logo_vacio.webp"

export const Footer = () => {

    return (
        <div className="footer py-5">
            <div className="row g-0 text-center">
                <div className="col-12 col-lg-4">
                    <div className="col-12 fs-4">LINKS</div>
                    <ul className="list-unstyled">
                        <li>
                            <HashLink to="/">Home</HashLink>
                        </li>
                        <li>
                            <HashLink to="/faqs">FAQS</HashLink>
                        </li>
                        <li>
                            <HashLink to="/abou t_us">About Us</HashLink>
                        </li>
                        <li>
                            <HashLink to="/services">Services</HashLink>
                        </li>
                        <li>
                            <HashLink to="/contact">Contact</HashLink>
                        </li>
                    </ul>
                </div>
                <div className="col-12 col-lg-4 d-flex justify-content-center align-items-center">
                    COPYRIGHT SPORTS STATS 2021
                </div>
                <div className="col-12 col-lg-4 p-2">
                    <img src={logo_vacio} alt="logo of the site" className="img-fluid"></img>
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
                    </div>
                </div>
            </div>
        </div>
    )

}