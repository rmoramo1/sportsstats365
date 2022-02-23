import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import { Helmet } from "react-helmet";
import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import AOS from "aos";
import "../../node_modules/aos/dist/aos.css";
import { useTranslation } from "react-i18next";

export const FAQS = () => {
    return (
        <div className="container-fluid p-0">
            <div className="slider slider_faqs">
                <div className="col-12 col-lg-6 offset-lg-6 text-center d-flex justify-content-center align-items-center slider px-3">
                    <h2 className="title_slider">FAQS</h2>
                </div>
            </div>
            <div className="container-fluid p-0">
                <div className="row g-0 accordion" id="faqs_accordion">
                    <div className="col-4 very_dark_grayish_blue">
                        <div className="sticky-top " >
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingOne">
                                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#scrambled_data" aria-expanded="true" aria-controls="scrambled_data">
                                        Scrambled Data
                                    </button>
                                </h2>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingTwo">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#free_trial_overview" aria-expanded="false" aria-controls="free_trial_overview">
                                        Free Trial Overview
                                    </button>
                                </h2>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingThree">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sports_league_coverage" aria-expanded="false" aria-controls="sports_league_coverage">
                                        Sports & League Coverage
                                    </button>
                                </h2>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingThree">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#subscriptions" aria-expanded="false" aria-controls="subscriptions">
                                        Subscriptions
                                    </button>
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className="col-8 ">
                        <div className="accordion-item">
                            <div id="scrambled_data" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#faqs_accordion">
                                <div className="accordion-body">
                                    <p className="fw-bold">What does "scrambled" data mean?</p>
                                    <p className="">Our Free Trial might have some values that are "scrambled," which means they're randomly adjusted up or down between 5% and 20%. Values like scores, game stats and other data points will be scrambled while schedule information isn't affected by this process.</p>
                                    <p className="fw-bold">Why scramble your data?</p>
                                    <p className="">We take advantage of scrambled data points like scores, stats and odds in order to give away our Free Trial without ever having an expiration date so that customers can do a full assessment on what we offer before deciding if they want to pay for one month or more up front.</p>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <div id="free_trial_overview" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#faqs_accordion">
                                <div className="accordion-body">
                                    <p className="fw-bold">What if I need more API calls for my API Free Trial?</p>
                                    <p className="">Our Developer Subscriptions provide you with 100,000 API Calls per month and a key that works for any of the sports we cover.</p>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <div id="sports_league_coverage" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#faqs_accordion">
                                <div className="accordion-body">
                                    <p className="fw-bold">What specific sports and leagues do you cover?</p>
                                    <p className="">
                                        <ul>
                                            <li>NFl</li>
                                            <li>MLB</li>
                                            <li>NBA</li>
                                            <li>NHL</li>
                                            <li>NCAA FOOTBALL</li>
                                            <li>NCAA BASKETBALL</li>
                                            <li>PGA / GOLF</li>
                                            <li>NASCAR</li>
                                            <li>SOCCER</li>
                                            <li>MMA</li>
                                            <li>BOXING</li>
                                        </ul>
                                    </p>
                                    <p className="fw-bold">What data feeds do you offer for each sport, and what data points are available within each feed?</p>
                                    <p className="">Our data feeds are segmented into three groups:</p>
                                    <p>
                                        1.	Free: what is offered for free/accurate via our Free Trial, including things such as:
                                    </p>
                                    <ul>
                                        <li>Schedules</li>
                                        <li>Standings</li>
                                        <li>Teams</li>
                                        <li>Players/Rosters</li>
                                    </ul>
                                    <p>
                                        2.	Core Feeds:
                                    </p>
                                    <ul>
                                        <li>Tier 1: Scores</li>
                                        <li>Tier 2: Team Stats</li>
                                        <li>Tier 3: Player Stats</li>
                                        <li>Tier 4: Play by Play</li>
                                    </ul>
                                    <p>
                                        3.	Supplemental Feeds:
                                    </p>
                                    <ul>
                                        <li>Aggregated Odds</li>
                                        <li>Team / Player Props</li>
                                        <li>Headshots</li>
                                    </ul>


                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <div id="subscriptions" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#faqs_accordion">
                                <div className="accordion-body">
                                    <p className="fw-bold">What types of subscriptions are offered for the various APIs and feeds you offer?</p>
                                    <p className="">Subscriptions provide users with access to data before and after each game, but not during games. The Real Time Subscription gives you unparalleled insight into your team's performance by giving real-time updates on the status of every play!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}