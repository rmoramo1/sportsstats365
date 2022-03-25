import React, { useEffect } from "react";
import { HashLink } from "react-router-hash-link";
import { useTranslation } from "react-i18next";
import AOS from "aos";
function Package() {
    const { t, i18n } = useTranslation("global");
    useEffect(() => {
        AOS.init({ duration: 1500 });
        AOS.refresh();
    }, []);
    return (
        <div className="container-fluid span_package py-3">
            <div className="container">
                <div className="col-12">
                    <h1 className="text-center">Basic packages that include US 4 Main Sports</h1>
                </div>
                <div className="row g-0" data-aos="fade-up">
                    <div className="col-12 py-3">
                        <h2 className="py-1 text-center bg_light_blue title_package font_title">{t('packages.span5')}</h2>
                    </div>
                    <div className="col-lg-4 p-2" >
                        <div className="col shadow_box package_efect">
                            <div className="col very_dark_grayish_blue text-center font_special text-white fs-2">
                                {t('packages.span2')}
                            </div>
                            <div className="col p-4 pt-3">
                                <ul className="list-unstyled">
                                    <li>{t('packages.span5')}</li>
                                    <li>{t('packages.span15')}</li>
                                    <li>{t('packages.span16')}</li>
                                    <li>{t('packages.span17')}</li>
                                    <li>{t('packages.span18')}</li>
                                </ul>
                                <div className="py-2 fw-bold small">{t('packages.span19')}</div>
                                <div className="col text-center">
                                    <HashLink className="bt_pink" to="/contact">{t('butons.question')}</HashLink>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 p-2">
                        <div className="col shadow_box package_efect">
                            <div className="col very_dark_grayish_blue text-center font_special text-white fs-2">
                                {t('packages.span3')}
                            </div>
                            <div className="col p-4 pt-3">
                                <ul className="list-unstyled">
                                    <li>{t('packages.span5')}</li>
                                    <li>{t('packages.span15')}</li>
                                    <li>{t('packages.span16')}</li>
                                    <li>{t('packages.span17')}</li>
                                    <li>{t('packages.span18')}</li>
                                </ul>
                                <div className="py-2 fw-bold small">{t('packages.span19')}</div>
                                <div className="col text-center">
                                    <HashLink className="bt_pink" to="/contact">{t('butons.question')}</HashLink>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 p-2">
                        <div className="col shadow_box package_efect">
                            <div className="col very_dark_grayish_blue text-center font_special text-white fs-2">
                                {t('packages.span4')}
                            </div>
                            <div className="col p-4 pt-3">
                                <ul className="list-unstyled">
                                    <li>{t('packages.span5')}</li>
                                    <li>{t('packages.span15')}</li>
                                    <li>{t('packages.span16')}</li>
                                    <li>{t('packages.span17')}</li>
                                    <li>{t('packages.span18')}</li>
                                </ul>
                                <div className="py-2 fw-bold small">{t('packages.span19')}</div>
                                <div className="col text-center">
                                    <HashLink className="bt_pink" to="/contact">{t('butons.question')}</HashLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 py-5 text-center">
                    <h2>To see all the packages and find the perfect one for you.</h2>
                    <HashLink smooth className="bt_pink px-2" to="/packages_page#packages_page">See all the packages</HashLink>
                </div>
            </div>
        </div>
    )
};
export default Package;