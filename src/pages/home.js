import React, { useEffect, lazy } from "react";
import { Helmet } from "react-helmet";
import AOS from "aos";
import "../../node_modules/aos/dist/aos.css";
import { useTranslation } from "react-i18next";
/*componentes*/
import { Slider } from "../components/slider";
import { Call_to_action } from "../components/call_to_action";
const Package = lazy(() => import('../components/package'));
/* img */

function Home() {
	const { t, i18n } = useTranslation("global");
	useEffect(() => {
		AOS.init({ duration: 1500 });
		AOS.refresh();
	}, []);
	return (
		<div className="container-fluid p-0" id="home">
			<Helmet>
				<title>SPORTS STATS 365-API SPORTS</title>
				<link rel="canonical" href="https://sportsstats365.com/" />
				<meta name="description" content="We have the perfect sports stats for your website, Our powerful sports API includes the 4 major US sports, NFL, NBA, MLB and NHL.Check out our packages!"></meta>
			</Helmet>
			<Slider />
			<div className="container-fluid p-0 py-5 m-0 bg_blue_grey">
				<div className="container text-white" data-aos="fade-up">
					<p>
						{t('home.span1')}
					</p>
					<p>
						{t('home.span2')}
					</p>
				</div>
			</div>
			<div className="container py-5" data-aos="flip-left">
				<div className="col text-center">
					<h1 className="font_special">{t('home.span3')}</h1>
				</div>
				<div className="col">
					<p>
						{t('home.span4')}
					</p>
					<p>
						{t('home.span6')}
					</p>
				</div>
			</div>
			<Package />
			<Call_to_action />
			<div className="container py-5">
				<p className="fs-3">
					{t('home.span6')}
				</p>
			</div>
		</div>
	);
};
export default Home;
