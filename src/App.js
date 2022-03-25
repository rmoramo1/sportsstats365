import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import injectContext from "./store/appContext";

/*components*/
import Loader from './components/loader';
import { Header } from "./components/header";
import { Footer } from "./components/footer";
/* pages*/
const Contact = lazy(() => import('./pages/contact'));
const Services = lazy(() => import('./pages/services'));
const FAQS = lazy(() => import('./pages/faqs'));
const About_Us = lazy(() => import('./pages/about_us'));
const Package_Page = lazy(() => import('./pages/packages_page'));
const Home = lazy(() => import('./pages/home'));



function App() {
	return (
		<div className="App overflow-hidden">
			<BrowserRouter>
				<Suspense fallback={<Loader />}>
					<Header />
					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/home" component={Home} />
						<Route exact path="/contact" component={Contact} />
						<Route exact path="/about_us" component={About_Us} />
						<Route exact path="/faqs" component={FAQS} />
						<Route exact path="/services" component={Services} />
						<Route exact path="/packages_page" component={Package_Page} />
						<Route><h1>404</h1></Route>
					</Switch>
					<Footer />
				</Suspense>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(App);
