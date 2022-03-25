
import { Helmet } from "react-helmet";
import React, { useEffect } from "react";
import AOS from "aos";
import "../../node_modules/aos/dist/aos.css";
import { useTranslation } from "react-i18next";

function About_Us(){
    const { t } = useTranslation("global");
    useEffect(() => {
		AOS.init({ duration: 1500 });
		AOS.refresh();
	}, []);
    return (
        <div className="container-fluid p-0" id="about_us">
            <div className="slider slider_about_us">
                <div className="col-12 col-lg-6 offset-lg-6 text-center d-flex justify-content-center align-items-center slider px-3">
                    <h2 className="title_slider">{t('about.span1')}</h2>
                </div>
            </div>
            <div className="container py-5">
                <p className="fs-5" data-aos="fade-down">
                {t('about.span2')}
                </p>
            </div>
            <div className="container-fluid p-0">
                <div className="row p-0 g-0">
                    <div className="col-lg-6 bg_light_blue m_50 d-flex justify-content-center align-items-center p-5 text-white" >
                        <div data-aos="fade-right">
                            <p>
                            {t('about.span3')}
                            </p>
                            <p>
                            {t('about.span4')}
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-6 about_us_sp_img"></div>
                </div>
            </div>
            <div className="container-fluid about_sp_dot d-flex justify-content-center align-items-center">
                <div className="container text-white" data-aos="zoom-in">
                {t('about.span5')}
                </div>
            </div>
        </div>
    )
};
export default About_Us;