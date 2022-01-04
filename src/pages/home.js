import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import { Helmet } from "react-helmet";
import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import AOS from "aos";
import "../../node_modules/aos/dist/aos.css";
import { useTranslation } from "react-i18next";
/*componentes*/
import { Slider } from "../components/slider";
import { Package } from "../components/package";
import { Call_to_action } from "../components/call_to_action";
/* img */

export const Home = () => {
	const { store, actions } = useContext(Context);
	const { t, i18n } = useTranslation("global");
	useEffect(() => {
		AOS.init({ duration: 1500 });
	}, []);
	return (
		<div className="container-fluid p-0">
			<Slider />
			<div className="container-fluid p-0 py-5 m-0 bg_blue_grey">
				<div className="container text-white">
					<p>
						SportsStas365 is a company that brings together a whole conference of application programming interfaces (APIs) to give you access not only the sports data but also other information such as news stories or weather updates for your website applications.
					</p>
					<p>
						Our sports data feeds are at the heart of everything we do. Every day, we monitor thousands of sporting events and record even more data points which can be transmitted instantly to our clients worldwide through either an API or raw XML format that they choose themselves depending on their needs for a specific project in need! Our basic service offers Livescore services which provide summary stats about matches such as winners, scorers etc., but there's also an Extended Service available if you're after some much deeper statistical analysis.
					</p>
				</div>
			</div>
			<div className="container py-5">
				<div className="col text-center">
					<h1 className="font_special">API Packages and Pricing</h1>
				</div>
				<div className="col">
					<p>
					We know that everyone has unique needs. To address those individual requests, we have created data packages tailored for specific purposes and at varying levels of detail to best suit each customer's requirements--from daily updates on player performance in Major League Baseball games all the way up through year-round access with comprehensive stats about every athlete competing professionally across multiple sport disciplines!

					</p>
					<p>
					No one knows what's going to happen when you watch any sporting event. And that makes it fun! We provide real-time coverage of all the action from your favorite team with our feed. It has everything any fan needs - scores and stats updated in near time intervals so users never miss anything important happening on their screen as well as predictions about who will win or lose next based off recent performances by both teams (plus odds).
					</p>
				</div>
			</div>
			<Package/>
			<Call_to_action/>
			<div className="container py-5">
				<p className="fs-3">
				Use the market to your favor! If you want to be successful at sports betting, you must take advantage of the market. Track lines from the opening values all the way to its closing number.
				</p>
			</div>
		</div>
	);
};
