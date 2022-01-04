import React from "react";
import { HashLink } from "react-router-hash-link";
import img_deports from "../assets/img/sports_illstration.webp"

export const Call_to_action = () => {
    return (
        <div className="container-fluid bg_light_blue py-5">
            <div className="row g-0">
                <div className="col-12 col-lg-6 py-lg-5">
                    <img src={img_deports} alt="image of sports" className="img-fluid" />
                </div>
                <div className="col-12 col-lg-6 text-white d-flex align-items-center px-1 px-lg-5">
                    <div>
                        <p>
                            Not only player stats and tracking scores, with the SportsStats API you can even track odds movements!
                            Monitor the lines since the market opens all the way to the event’s closing line.
                        </p>
                        <p>
                            With our platform, you can monitor how the line moves in your favor and choose the best time to place a wager.
                        </p>
                        <div className="col text-center">
                            <HashLink to="/contact" className="bt_white">Contact Us for more Information</HashLink>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}