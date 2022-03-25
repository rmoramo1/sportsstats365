import { Helmet } from "react-helmet";
import React from "react";
import { useTranslation } from "react-i18next";

function FAQS() {
    const { t } = useTranslation("global");
    return (
        <div className="container-fluid p-0" id="faqs">
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
                                        {t('faqs.span1')}
                                    </button>
                                </h2>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingTwo">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#free_trial_overview" aria-expanded="false" aria-controls="free_trial_overview">
                                        {t('faqs.span2')}
                                    </button>
                                </h2>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingThree">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sports_league_coverage" aria-expanded="false" aria-controls="sports_league_coverage">
                                        {t('faqs.span3')}
                                    </button>
                                </h2>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingThree">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#subscriptions" aria-expanded="false" aria-controls="subscriptions">
                                        {t('faqs.span4')}
                                    </button>
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className="col-8 ">
                        <div className="accordion-item">
                            <div id="scrambled_data" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#faqs_accordion">
                                <div className="accordion-body">
                                    <p className="fw-bold">{t('faqs.span5')}?</p>
                                    <p className="">{t('faqs.span6')}</p>
                                    <p className="fw-bold">{t('faqs.span7')}</p>
                                    <p className="">{t('faqs.span8')}</p>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <div id="free_trial_overview" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#faqs_accordion">
                                <div className="accordion-body">
                                    <p className="fw-bold">{t('faqs.span9')}</p>
                                    <p className="">{t('faqs.span10')}</p>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <div id="sports_league_coverage" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#faqs_accordion">
                                <div className="accordion-body">
                                    <p className="fw-bold">{t('faqs.span11')}</p>
                                    <p className="">
                                        <ul>
                                            <li>NFl</li>
                                            <li>MLB</li>
                                            <li>NBA</li>
                                            <li>NHL</li>
                                            <li>NCAA FOOTBALL</li>
                                            <li>NCAA BASKETBALL</li>
                                            <li>GOLF</li>
                                            <li>NASCAR</li>
                                            <li>MOTO GP</li>
                                            <li>SOCCER</li>
                                            <li>MMA</li>
                                            <li>BOXING</li>
                                        </ul>
                                    </p>
                                    <p className="fw-bold">{t('faqs.span12')}</p>
                                    <p className="">{t('faqs.span13')}</p>
                                    <p>
                                        {t('faqs.span14')}
                                    </p>
                                    <ul>
                                        <li>{t('faqs.span15')}</li>
                                        <li>{t('faqs.span16')}</li>
                                        <li>{t('faqs.span17')}</li>
                                        <li>{t('faqs.span18')}</li>
                                    </ul>
                                    <p>
                                        {t('faqs.span19')}
                                    </p>
                                    <ul>
                                        <li>{t('faqs.span20')}</li>
                                        <li>{t('faqs.span21')}</li>
                                        <li>{t('faqs.span22')}</li>
                                        <li>{t('faqs.span23')}</li>
                                    </ul>
                                    <p>
                                        {t('faqs.span24')}
                                    </p>
                                    <ul>
                                        <li>{t('faqs.span25')}</li>
                                        <li>{t('faqs.span26')}</li>
                                        <li>{t('faqs.span27')}</li>
                                    </ul>


                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <div id="subscriptions" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#faqs_accordion">
                                <div className="accordion-body">
                                    <p className="fw-bold">{t('faqs.span28')}</p>
                                    <p className="">{t('faqs.span29')}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};
export default FAQS;