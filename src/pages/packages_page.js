import React, { useEffect } from "react";
import { HashLink } from "react-router-hash-link";
import { useTranslation } from "react-i18next";
import AOS from "aos";
function Package_Page() {
    const { t } = useTranslation("global");
    useEffect(() => {
        AOS.init({ duration: 1500 });
        AOS.refresh();
    }, []);
    return (
        <div className="container-fluid p-0" id="packages_page">
            <div className="slider slider_packages d-flex justify-content-center align-items-center">
                <h2 className="text-white">{t('packages.span1')}</h2>
            </div>
            <div className="container">
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
                <div className="row g-0" data-aos="fade-up">
                    <div className="col-12 py-3">
                        <h2 className="py-1 text-center bg_light_blue title_package font_title">{t('packages.span6')}</h2>
                    </div>
                    <div className="col-lg-4 p-2">
                        <div className="col shadow_box package_efect">
                            <div className="col very_dark_grayish_blue text-center font_special text-white fs-2">
                                {t('packages.span2')}
                            </div>
                            <div className="col p-4 pt-3">
                                <ul className="list-unstyled">
                                    <li>{t('packages.span32')}</li>
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
                                    <li>{t('packages.span32')}</li>
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
                                    <li>{t('packages.span32')}</li>
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
                <div className="row g-0" data-aos="fade-up">
                    <div className="col-12 py-3">
                        <h2 className="py-1 text-center bg_light_blue title_package font_title">{t('packages.span7')}</h2>
                    </div>
                    <div className="col-lg-4 p-2">
                        <div className="col shadow_box package_efect">
                            <div className="col very_dark_grayish_blue text-center font_special text-white fs-2">
                                {t('packages.span2')}
                            </div>
                            <div className="col p-4 pt-3">
                                <ul className="list-unstyled">
                                    <li>NFL - NCAA Football</li>
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
                                    <li>NFL - NCAA Football</li>
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
                                    <li>NFL - NCAA Football</li>
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
                <div className="row g-0" data-aos="fade-up">
                    <div className="col-12 py-3">
                        <h2 className="py-1 text-center bg_light_blue title_package font_title">{t('packages.span8')}</h2>
                    </div>
                    <div className="col-lg-4 p-2">
                        <div className="col shadow_box package_efect">
                            <div className="col very_dark_grayish_blue text-center font_special text-white fs-2">
                                {t('packages.span2')}
                            </div>
                            <div className="col p-4 pt-3">
                                <ul className="list-unstyled">
                                    <li>NBA - NCAA Basketball</li>
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
                                    <li>NBA - NCAA Basketball</li>
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
                                    <li>NBA - NCAA Basketball</li>
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
                <div className="row g-0" data-aos="fade-up">
                    <div className="col-12 py-3">
                        <h2 className="py-1 text-center bg_light_blue title_package font_title">{t('packages.span9')}</h2>
                    </div>
                    <div className="col-lg-4 p-2">
                        <div className="col shadow_box package_efect">
                            <div className="col very_dark_grayish_blue text-center font_special text-white fs-2">
                                {t('packages.span2')}
                            </div>
                            <div className="col p-4 pt-3">
                                <ul className="list-unstyled">
                                    <li>MLB - NCAA Baseball</li>
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
                                    <li>MLB - NCAA Baseball</li>
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
                                    <li>MLB - NCAA Baseball</li>
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
                <div className="row g-0" data-aos="fade-up">
                    <div className="col-12 py-3">
                        <h2 className="py-1 text-center bg_light_blue title_package font_title">{t('packages.span10')}</h2>
                    </div>
                    <div className="col-lg-4 p-2">
                        <div className="col shadow_box package_efect">
                            <div className="col very_dark_grayish_blue text-center font_special text-white fs-2">
                                {t('packages.span2')}
                            </div>
                            <div className="col p-4 pt-3">
                                <ul className="list-unstyled">
                                    <li>{t('packages.span33')}</li>
                                    <li>{t('packages.span15')}</li>
                                    <li>{t('packages.span34')}</li>
                                    <li>{t('packages.span35')}</li>
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
                                    <li>{t('packages.span33')}</li>
                                    <li>{t('packages.span15')}</li>
                                    <li>{t('packages.span34')}</li>
                                    <li>{t('packages.span35')}</li>
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
                                    <li>{t('packages.span33')}</li>
                                    <li>{t('packages.span15')}</li>
                                    <li>{t('packages.span34')}</li>
                                    <li>{t('packages.span35')}</li>
                                </ul>
                                <div className="py-2 fw-bold small">{t('packages.span19')}</div>
                                <div className="col text-center">
                                    <HashLink className="bt_pink" to="/contact">{t('butons.question')}</HashLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row g-0" data-aos="fade-up">
                    <div className="col-12 py-3">
                        <h2 className="py-1 text-center bg_light_blue title_package font_title">{t('packages.span11')}</h2>
                    </div>
                    <div className="col-lg-4 p-2">
                        <div className="col shadow_box package_efect">
                            <div className="col very_dark_grayish_blue text-center font_special text-white fs-2">
                                {t('packages.span2')}
                            </div>
                            <div className="col p-4 pt-3">
                                <ul className="list-unstyled">
                                    <li>{t('packages.span36')}</li>
                                    <li>{t('packages.span15')}</li>
                                    <li>{t('packages.span34')}</li>
                                    <li>{t('packages.span37')}</li>
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
                                    <li>{t('packages.span36')}</li>
                                    <li>{t('packages.span15')}</li>
                                    <li>{t('packages.span34')}</li>
                                    <li>{t('packages.span37')}</li>
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
                                    <li>{t('packages.span36')}</li>
                                    <li>{t('packages.span15')}</li>
                                    <li>{t('packages.span34')}</li>
                                    <li>{t('packages.span37')}</li>
                                </ul>
                                <div className="py-2 fw-bold small">{t('packages.span19')}</div>
                                <div className="col text-center">
                                    <HashLink className="bt_pink" to="/contact">{t('butons.question')}</HashLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row g-0" data-aos="fade-up">
                    <div className="col-12 py-3">
                        <h2 className="py-1 text-center bg_light_blue title_package font_title">{t('packages.span12')}</h2>
                    </div>
                    <div className="col-lg-4 p-2">
                        <div className="col shadow_box package_efect">
                            <div className="col very_dark_grayish_blue text-center font_special text-white fs-2">
                                {t('packages.span2')}
                            </div>
                            <div className="col p-4 pt-3">
                                <ul className="list-unstyled">
                                    <li>{t('packages.span15')}</li>
                                    <li>MLS</li>
                                    <li>Liga MX</li>
                                    <li>Canadian Premier League</li>
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
                                    <li>{t('packages.span15')}</li>
                                    <li>MLS</li>
                                    <li>Liga MX</li>
                                    <li>Canadian Premier League</li>
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
                                    <li>{t('packages.span15')}</li>
                                    <li>MLS</li>
                                    <li>Liga MX</li>
                                    <li>Canadian Premier League</li>
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
                <div className="row g-0" data-aos="fade-up">
                    <div className="col-12 py-3">
                        <h2 className="py-1 text-center bg_light_blue title_package font_title">{t('packages.span13')}</h2>
                    </div>
                    <div className="col-lg-4 p-2">
                        <div className="col shadow_box package_efect">
                            <div className="col very_dark_grayish_blue text-center font_special text-white fs-2">
                                {t('packages.span2')}
                            </div>
                            <div className="col p-4 pt-3">
                                <ul className="list-unstyled">
                                    <li>{t('packages.span15')}</li>
                                    <li>Brazil Serie A</li>
                                    <li>Argentina Primera División</li>
                                    <li>Colombia Categoría Primera A</li>
                                    <li>Uruguay Primera División</li>
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
                                    <li>{t('packages.span15')}</li>
                                    <li>Brazil Serie A</li>
                                    <li>Argentina Primera División</li>
                                    <li>Colombia Categoría Primera A</li>
                                    <li>Uruguay Primera División</li>
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
                                    <li>{t('packages.span15')}</li>
                                    <li>Brazil Serie A</li>
                                    <li>Argentina Primera División</li>
                                    <li>Colombia Categoría Primera A</li>
                                    <li>Uruguay Primera División</li>
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
                <div className="row g-0" data-aos="fade-up">
                    <div className="col-12 py-3">
                        <h2 className="py-1 text-center bg_light_blue title_package font_title">{t('packages.span14')}</h2>
                    </div>
                    <div className="col-lg-4 p-2">
                        <div className="col shadow_box package_efect">
                            <div className="col very_dark_grayish_blue text-center font_special text-white fs-2">
                                {t('packages.span2')}
                            </div>
                            <div className="col p-4 pt-3">
                                <ul className="list-unstyled">
                                    <li>{t('packages.span15')}</li>
                                    <li>Costa Rica Primera División</li>
                                    <li>Liga Panameña de Fútbol</li>
                                    <li>Honduras Primera Division</li>
                                    <li>El Salvador Primera Division</li>
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
                                    <li>{t('packages.span15')}</li>
                                    <li>Costa Rica Primera División</li>
                                    <li>Liga Panameña de Fútbol</li>
                                    <li>Honduras Primera División</li>
                                    <li>El Salvador Primera División</li>
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
                                    <li>{t('packages.span15')}</li>
                                    <li>Costa Rica Primera División</li>
                                    <li>Liga Panameña de Fútbol</li>
                                    <li>Honduras Primera Division</li>
                                    <li>El Salvador Primera Division</li>
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
            </div>
            <div className="container-fluid call_to_action_add_more">
                <div className="container">
                    <p>
                    {t('packages.span20')} <span className="fst-italic fw-bold font_pink">{t('packages.span21')}</span> {t('packages.span22')} <span className="fst-italic fw-bold font_pink">{t('packages.span23')}</span> {t('packages.span24')} <a className="fst-italic" href="mailto:sales@sportsstats365.com?subject=Sports Stats 365 packages">sales@sportsstats365.com</a> {t('packages.span22')} <HashLink to="/contact">{t('packages.span25')}</HashLink>.
                    </p>
                    <p>
                    {t('packages.span26')} <span className="fst-italic fw-bold font_pink">{t('packages.span27')}</span> , <span className="fst-italic fw-bold font_pink">{t('packages.span28')}</span>  {t('packages.span29')} <span className="fst-italic fw-bold font_pink">{t('packages.span30')}</span> {t('packages.span31')} <HashLink to="/contact">{t('packages.span25')}</HashLink>.
                    </p>
                </div>
            </div>
        </div>
    )
}
export default Package_Page