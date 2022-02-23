import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import { Helmet } from "react-helmet";
import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import AOS from "aos";
import "../../node_modules/aos/dist/aos.css";
import { useTranslation } from "react-i18next";


export const Services = () => {

    return (
        <div className="container-fluid p-0">
            <div className="slider slider_services">
                <div className="col-12 col-lg-6 offset-lg-6 text-center d-flex justify-content-center align-items-center slider px-3">
                    <h2 className="title_slider">OUR SOLUTIONS</h2>
                </div>
            </div>
            <div className="container-fluid">
                <div className="container">
                    <div className="row g-0">
                        <div className="col-lg-4 p-2">
                            <div className="col shadow_box overflow-hidden rounded">
                                <div className="col img_service_up img_scores"></div>
                                <div className="col text-center py-1">
                                    <h4>Scores</h4>
                                </div>
                                <div className="col p-1">
                                    <p>
                                        Sports Stats365’s unique combination of content feeds and products allows us to offer custom-tailored industry solutions. From game odds, props & futures trends analysis - the possibilities are endless! Track games and scores with a direct feed.
                                    </p>
                                    <p>
                                        Sports Stats365’s unique combination of content feeds and products allows us to offer custom-tailored industry solutions. From game odds, props & futures trends analysis - the possibilities are endless! Track games and scores with a direct feed.
                                    </p>
                                </div>
                                <div className="col text-center">

                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 p-2">
                            <div className="col shadow_box overflow-hidden rounded" id="st_ac">
                                <div className="col img_service_up img_stats"></div>
                                <div className="col text-center py-1">
                                    <h4>Stats</h4>
                                </div>
                                <div className="col p-1">
                                    <p>
                                        Sports Stats 365 has created a platform that not only provides industry-leading companies with custom solutions but also allows them to tailor these products based on their specific needs.
                                    </p>
                                    <p>
                                        Our unique combination of content feeds and product offerings gives our clients the flexibility they need for any type or stage in development, as well streamlined process from start through finish - giving you more time than ever before!
                                    </p>

                                    <div className="accordion-item">
                                        <div id="stats_ac" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#st_ac">
                                            <div className="accordion-body">
                                                <p>
                                                    Teams: Check the player’s roster, trades, and overall performance for everyone in your favorite team.
                                                </p>
                                                <p>
                                                    Players: Individually track each players productivity and their accomplishments during the duration of your favorite tournament.
                                                </p>
                                                <p>
                                                    Conference: Stay up to date and be sure to check out your team’s conference standing. Be sure to take all stats into account!
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col text-center">
                                    <div className="accordion-item">
                                        <h2 className="" id="headingThree">
                                            <button className="btn collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#stats_ac" aria-expanded="false" aria-controls="stats_ac">
                                                Expand for more Information
                                            </button>
                                        </h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 p-2">
                            <div className="col shadow_box overflow-hidden rounded">
                                <div className="col img_service_up img_alarm"></div>
                                <div className="col text-center py-1">
                                    <h4>Alarms</h4>
                                </div>
                                <div className="col p-1">
                                    <p>
                                        Select your favorite team in your favorite league and do not miss a beat. Receive notifications with important information about line changes and take advantage of our fast injury reports in order to place your bet.
                                    </p>
                                    <p>
                                        Our alarms include not only line changes, but also injury reports, final game results and closing line, important weather updates and much more.
                                    </p>
                                    <p>
                                        You can choose to get these alerts via email or text through our list of compatible apps.
                                    </p>

                                    <div className="accordion-item">
                                        <div id="stats_alrm" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#st_ac">
                                            <div className="accordion-body">
                                                <p>
                                                    Start of the game: Select and set an alarm up to one hour prior to the start of the game of your chosig. Never miss action again..
                                                </p>
                                                <p>
                                                    Results: Get notified of each point on the event of your choosing with our data feed, which tracks every play in real time.
                                                </p>
                                                <p>
                                                    Injuries: Learn about injured players and who they will be replaced with first hand straight from our API. Whether you are trying to place a bet, trying to build your fantasy, or just trying to find material for your next article, our injury report will be the perfect add on for your feed.
                                                </p>
                                                <p>
                                                    Weather: Inclement weather conditions are common now a days. Get notified when the conditions are too harsh for the players, or when they are perfect for that Hail Mary to land.
                                                </p>
                                                <p>
                                                    Closing Line: Learn about an event’s closing line first hand straight to your mail or via one of our messaging compatible apps. Learn about trends and which way is the market going.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div className="col text-center">
                                    <div className="accordion-item">
                                        <h2 className="" id="headingThree">
                                            <button className="btn collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#stats_alrm" aria-expanded="false" aria-controls="stats_ac">
                                                Expand for more Information
                                            </button>
                                        </h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 p-2">
                            <div className="col shadow_box overflow-hidden rounded">
                                <div className="col img_service_up img_calendar"></div>
                                <div className="col text-center py-1">
                                    <h4>Calentar</h4>
                                </div>
                                <div className="col p-1">
                                    <p>
                                        Check past results, specific game data like team and player stats.
                                    </p>
                                    <p>
                                        Or simply do some research about old lines between two teams in an upcoming match.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 p-2">
                            <div className="col shadow_box overflow-hidden rounded">
                                <div className="col img_service_up img_supp"></div>
                                <div className="col text-center py-1">
                                    <h4>Supplemental Feeds:</h4>
                                </div>
                                <div className="col p-1 m_250">
                                    <ul>
                                        <li>Aggregated Odds</li>
                                        <li>Team / Player Props</li>
                                        <li>Headshots</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 p-2">
                            <div className="col shadow_box overflow-hidden rounded">
                                <div className="col img_service_up img_odds"></div>
                                <div className="col text-center py-1">
                                    <h4>Odds</h4>
                                </div>
                                <div className="col p-1">
                                    <p className="m_450">
                                        We live in a world where the best athletes have to be both physically fit and knowledgeable about their sport. But how can you know what teams will win if there's no way for people who don't follow sports closely stay up-to date with all of it? Sports Stats 365 has developed an innovative solution! The company provides custom tailored odds data which helps media, blogs predictive analytics companies, and anybody else interested; this includes bettors trying out new strategies or just looking at trends throughout history...
                                    </p>

                                    <div className="accordion-item">
                                        <div id="odds_ac" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#st_ac">
                                            <div className="accordion-body">
                                                <ul>
                                                    <li>PRE-MATCH AND IN-PLAY</li>
                                                    <li>ALL PROPS AND FUTURES</li>
                                                    <li>HISTORICAL ODDS</li>
                                                    <li>BETTING TRENDS & INSIGHTS</li>
                                                    <li>GRADING / RESULTING BUILT IN</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item text-center°">
                                    <h2 className="accordion-header" id="headingOne">
                                        <button className="btn collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#odds_ac" aria-expanded="true" aria-controls="odds_ac">
                                            Expand for more Information
                                        </button>
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}