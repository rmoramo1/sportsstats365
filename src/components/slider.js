import React from "react";
import { useTranslation } from "react-i18next";
export const Slider = () => {
    const { t, i18n } = useTranslation("global");
    return (

        <div id="carouselExampleFade" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item slider slider1 active">
                    <div className="col-12 text-center d-flex justify-content-center align-items-center slider">
                        <h2 className="title_slider">{t('slider.slider1')}</h2>
                    </div>
                </div>
                <div className="carousel-item slider slider2">
                    <div className="col-12 text-center d-flex justify-content-center align-items-center slider">
                        <h2 className="title_slider col-12 col-lg-6">{t('slider.slider2')}e</h2>
                    </div>
                </div>
                <div className="carousel-item slider slider3">
                    <div className="text-center d-flex justify-content-center align-items-center slider">
                        <h2 className="title_slider col-12 col-lg-6">{t('slider.slider3')}</h2>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>

    )
}