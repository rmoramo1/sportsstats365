import { BrowserRouter, Route, Switch } from "react-router-dom";
import injectContext from "./store/appContext";

/* pages*/
import { Home } from "./pages/home";
import { Contact } from "./pages/contact";
import { About_Us } from "./pages/about_us";
import { FAQS } from "./pages/faqs";
import { Services } from "./pages/services";


/*components*/
import { Header } from "./components/header";
import { Footer } from "./components/footer";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Header />
				<Switch>
					<Route exact path="/" component={Home}/>
					<Route exact path="/home" component={Home}/>
					<Route exact path="/contact" component={Contact}/>
					<Route exact path="/about_us" component={About_Us}/>
					<Route exact path="/faqs" component={FAQS}/>
					<Route exact path="/services" component={Services}/>
					<Route><h1>404</h1></Route>
				</Switch>
				<Footer/>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(App);
