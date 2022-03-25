import React, { useEffect } from "react";
import { HashLink } from "react-router-hash-link";
import AOS from "aos";
import { useTranslation } from "react-i18next";
import img_deports from "../assets/img/sports_illstration.webp";

export const Call_to_action = () => {
    const { t } = useTranslation("global");
    useEffect(() => {
		AOS.init({ duration: 1500 });
		AOS.refresh();
	}, []);
    return (
        <div className="container-fluid bg_light_blue py-5">
            <div className="row g-0">
                <div className="col-12 col-lg-6 py-lg-5" data-aos="zoom-in-right">
                    <img src={img_deports} alt="image of sports" className="img-fluid" />
                </div>
                <div className="col-12 col-lg-6 text-white d-flex align-items-center px-1 px-lg-5" data-aos="zoom-out-up">
                    <div>
                        <p>
                        {t('call_action.span1')}
                        </p>
                        <p>
                        {t('call_action.span2')}
                        </p>
                        <div className="col text-center">
                            <HashLink to="/contact" className="bt_white">{t('butons.information')}</HashLink>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}