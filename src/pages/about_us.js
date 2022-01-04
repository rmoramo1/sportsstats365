import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import { Helmet } from "react-helmet";
import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import AOS from "aos";
import "../../node_modules/aos/dist/aos.css";
import { useTranslation } from "react-i18next";

export const About_Us = () => {
    const { t, i18n } = useTranslation("global");
    return (
        <div className="container-fluid p-0">
            <div className="slider slider_about_us">
                <div className="col-12 col-lg-6 offset-lg-6 text-center d-flex justify-content-center align-items-center slider px-3">
                    <h2 className="title_slider">About Us</h2>
                </div>
            </div>
            <div className="container py-5">
                <p className="fs-5">
                    Sports Stats 365 was created as a tool for sporting fans to be able and keep track of an ever-changing market. By compiling and analyzing data from the most influential sports leagues, users can compare and choose, in a much more intelligent way, the line that they wish to beat. If your goal is not gambling, but entertainment, our data feed can power tournaments that go from fantasy and office squares all the way to survivor pools and quinielas.
                </p>
            </div>
            <div className="container-fluid p-0">
                <div className="row p-0 g-0">
                    <div className="col-lg-6 bg_light_blue m_50 d-flex justify-content-center align-items-center p-5 text-white">
                        <div>
                            <p>
                                When it comes to reporting, news outlets can select from a wide array of information to broadcast. Player stats, team standings, injuries and trades are all included in our feed.
                            </p>
                            <p>
                                Sports Stats 365 is the one stop solution for all your sporting needs. In today’s day and age, and with a market that changes constantly, keeping track can sometimes be exhausting. With us as your partner, you can monitor and analyze all major sporting events around the globe. Educating yourself and acquiring real-time information has never been easier!
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-6 about_us_sp_img"></div>
                </div>
            </div>
            <div className="container-fluid about_sp_dot d-flex justify-content-center align-items-center">
                <div className="container text-white">
                Sports Stats 365 has established itself as an industry leader in delivering data coverage for sports with their comprehensive, real-time analysis of every possible event. The company's live game analysts are constantly monitoring upcoming games to ensure they set the standard on accuracy by capturing all that happens at once - even if it occurs off camera or during replays!
                </div>
            </div>
        </div>
    )
}