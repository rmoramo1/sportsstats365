import react from "react";
import { HashLink } from "react-router-hash-link";

export const Package = () => {
    return (
        <div className="container-fluid span_package py-3">
            <div className="container">
                <div className="row g-0">
                    <div className="col-lg-4 p-2">
                        <div className="col shadow_box package_efect">
                            <div className="col very_dark_grayish_blue text-center font_special text-white fs-2">
                                BASIC
                            </div>
                            <div className="col sp_pack_trans p-5 pt-3">
                                <ul className="list-unstyled">
                                    <li>4 Sports</li>
                                    <li>2000 API calls per hour</li>
                                    <li>Leagues</li>
                                    <li>Teams</li>
                                    <li>Standings</li>
                                    <li>Players</li>
                                </ul>
                            <div className="col text-center">
                                <HashLink className="bt_blue" to="/contact">Obtain the Package</HashLink>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 p-2">
                        <div className="col shadow_box package_efect">
                            <div className="col very_dark_grayish_blue text-center font_special text-white fs-2">
                                Premium
                            </div>
                            <div className="col sp_pack_trans p-5 pt-3">
                                <ul className="list-unstyled">
                                    <li>4 Sports</li>
                                    <li>10000 API calls per hour</li>
                                    <li>Leagues</li>
                                    <li>Teams</li>
                                    <li>Standings</li>
                                    <li>Players</li>
                                    <li>Odds</li>
                                    <li>Fixtures</li>
                                </ul>
                            <div className="col text-center">
                                <HashLink className="bt_blue" to="/contact">Obtain the Package</HashLink>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 p-2">
                        <div className="col shadow_box package_efect">
                            <div className="col very_dark_grayish_blue text-center font_special text-white fs-2">
                                Platinum
                            </div>
                            <div className="col sp_pack_trans p-5 pt-3">
                                <ul className="list-unstyled">
                                    <li>8  Sports</li>
                                    <li>30000 API calls per hour</li>
                                    <li>Leagues</li>
                                    <li>Teams</li>
                                    <li>Standings</li>
                                    <li>Players</li>
                                    <li>Odds</li>
                                    <li>Fixtures</li>
                                </ul>
                            <div className="col text-center">
                                <HashLink className="bt_blue" to="/contact">Obtain the Package</HashLink>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}