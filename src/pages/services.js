
import { Helmet } from "react-helmet";
import React, { useEffect } from "react";
import AOS from "aos";
import "../../node_modules/aos/dist/aos.css";
import { useTranslation } from "react-i18next";
function Services(){
    const { t } = useTranslation("global");
    useEffect(() => {
		AOS.init({ duration: 1500 });
		AOS.refresh();
	}, []);
    return (
        <div className="container-fluid p-0" id="services">
            <div className="slider slider_services">
                <div className="col-12 col-lg-6 offset-lg-6 text-center d-flex justify-content-center align-items-center slider px-3">
                    <h2 className="title_slider">{t('services.span1')}</h2>
                </div>
            </div>
            <div className="container-fluid">
                <div className="container">
                    <div className="row g-0">
                        <div className="col-lg-4 p-2" data-aos="fade-right">
                            <div className="col shadow_box overflow-hidden rounded">
                                <div className="col img_service_up img_scores"></div>
                                <div className="col text-center py-1">
                                    <h4>{t('services.span2')}</h4>
                                </div>
                                <div className="col p-1">
                                    <p>
                                    {t('services.span3')}
                                    </p>
                                    <p>
                                    {t('services.span4')}
                                    </p>
                                </div>
    
                            </div>
                        </div>
                        <div className="col-lg-4 p-2" data-aos="fade-up">
                            <div className="col shadow_box overflow-hidden rounded" id="st_ac">
                                <div className="col img_service_up img_stats"></div>
                                <div className="col text-center py-1">
                                    <h4>{t('services.span5')}</h4>
                                </div>
                                <div className="col p-1">
                                    <p>
                                    {t('services.span6')}
                                    </p>
                                    <p>
                                    {t('services.span7')}
                                    </p>

                                    <div className="accordion-item">
                                        <div id="stats_ac" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#st_ac">
                                            <div className="accordion-body">
                                                <p>
                                                {t('services.span8')}
                                                </p>
                                                <p>
                                                {t('services.span9')}
                                                </p>
                                                <p>
                                                {t('services.span10')}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col text-center">
                                    <div className="accordion-item">
                                        <h2 className="" id="headingThree">
                                            <button className="btn collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#stats_ac" aria-expanded="false" aria-controls="stats_ac">
                                            {t('butons.expand')}
                                            </button>
                                        </h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 p-2" data-aos="fade-left">
                            <div className="col shadow_box overflow-hidden rounded">
                                <div className="col img_service_up img_alarm"></div>
                                <div className="col text-center py-1">
                                    <h4>{t('services.span11')}</h4>
                                </div>
                                <div className="col p-1">
                                    <p>
                                    {t('services.span12')}
                                    </p>
                                    <p>
                                    {t('services.span13')}
                                    </p>
                                    <p>
                                    {t('services.span14')}
                                    </p>

                                    <div className="accordion-item">
                                        <div id="stats_alrm" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#st_ac">
                                            <div className="accordion-body">
                                                <p>
                                                {t('services.span15')}
                                                </p>
                                                <p>
                                                {t('services.span16')}
                                                </p>
                                                <p>
                                                {t('services.span17')}
                                                </p>
                                                <p>
                                                {t('services.span18')}.
                                                </p>
                                                <p>
                                                {t('services.span19')}
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div className="col text-center">
                                    <div className="accordion-item">
                                        <h2 className="" id="headingThree">
                                            <button className="btn collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#stats_alrm" aria-expanded="false" aria-controls="stats_ac">
                                                {t('butons.expand')}
                                            </button>
                                        </h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 p-2" data-aos="fade-right">
                            <div className="col shadow_box overflow-hidden rounded">
                                <div className="col img_service_up img_calendar"></div>
                                <div className="col text-center py-1">
                                    <h4>{t('services.span20')}</h4>
                                </div>
                                <div className="col p-1">
                                    <p>
                                    {t('services.span21')}
                                    </p>
                                    <p>
                                    {t('services.span22')}.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 p-2" data-aos="fade-up">
                            <div className="col shadow_box overflow-hidden rounded">
                                <div className="col img_service_up img_supp"></div>
                                <div className="col text-center py-1">
                                    <h4>{t('services.span23')}</h4>
                                </div>
                                <div className="col p-1 m_250">
                                    <ul>
                                        <li>{t('services.span24')}</li>
                                        <li>{t('services.span25')}</li>
                                        <li>{t('services.span26')}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 p-2" data-aos="fade-left">
                            <div className="col shadow_box overflow-hidden rounded">
                                <div className="col img_service_up img_odds"></div>
                                <div className="col text-center py-1">
                                    <h4>{t('services.span27')}</h4>
                                </div>
                                <div className="col p-1">
                                    <p className="m_450">
                                    {t('services.span28')}
                                    </p>

                                    <div className="accordion-item">
                                        <div id="odds_ac" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#st_ac">
                                            <div className="accordion-body">
                                                <ul>
                                                    <li>{t('services.span29')}</li>
                                                    <li>{t('services.span30')}</li>
                                                    <li>{t('services.span31')}</li>
                                                    <li>{t('services.span32')}</li>
                                                    <li>{t('services.span33')}</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item text-center°">
                                    <h2 className="accordion-header" id="headingOne">
                                        <button className="btn collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#odds_ac" aria-expanded="true" aria-controls="odds_ac">
                                            {t('butons.expand')}
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
};
export default Services;