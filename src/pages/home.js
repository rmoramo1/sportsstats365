import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import { Helmet } from "react-helmet";
import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import AOS from "aos";
import "../../node_modules/aos/dist/aos.css";
/*componentes*/
import { Tabs_index } from "../components/tabs_index";
import { Slider } from "../components/slider";
import { useTranslation } from "react-i18next";
/* img */
import site_img from '../assets/img/site_muestra.webp'

export const Home = () => {
	const { store, actions } = useContext(Context);
	const { t, i18n } = useTranslation("global");
	useEffect(() => {
		AOS.init({ duration: 1500 });
	}, []);
	return (
		<div className="container-fluid p-0">
			<Slider />
			<div className="container-fluid p-0 m-0">
				<div className="row g-0">
					<div className="col-12 col-lg-6 bg_pink m_15 text-white d-flex justify-content-center align-items-center">
						<h2>{t('home.span1')}</h2>
					</div>
					<div className="col-12 col-lg-6 bg_pink_dark text-white m_15 d-flex justify-content-center align-items-center">
						<h2>{t('home.span2')}</h2>
					</div>
				</div>
			</div>
			<div className="container-fluid p-0">
				<div className="p-5">
					<h4>{t('home.span3')}</h4>
				</div>
				<div className="row g-0">
					<div className="col-12 col-lg-8 p-5 d-flex justify-content-center align-items-center bg_pink_dark text-white">
						<p className="fs-5">{t('home.span4')}</p>
					</div>
					<div className="col-12 col-lg-4 overflow-hidden">
						<img src={site_img} className="img-fluid img_effect_big" alt="image of site"></img>
					</div>
				</div>
			</div>
			<div className="container py-5">
				<div className="col-12">
					<p>
						{t('home.span5')}
					</p>
					<p>
						{t('home.span6')}
					</p>
					<p>
						{t('home.span7')}
					</p>
				</div>
			</div>

			<div className="container-fluid p-0 m-0 hokey_pynk d-flex justify-content-center align-items-center">
				<p className="fs-1 text_shadow font_special text-white p-4">
					{t('home.span8')}
				</p>
			</div>

			<Tabs_index />
		</div>
	);
};
