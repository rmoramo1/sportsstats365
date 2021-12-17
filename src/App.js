import { BrowserRouter, Route, Switch } from "react-router-dom";
import injectContext from "./store/appContext";

/* pages*/

import { Home } from "./pages/home";
import { Contact } from "./pages/contact";


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
				</Switch>
				<Footer/>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(App);
