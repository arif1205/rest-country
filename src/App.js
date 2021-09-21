import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// components
import Navbar from "./Components/Navbar";
import Main from "./Components/Main";
import Country from "./Components/Country";

function App() {
	const [theme, setTheme] = useState("dark");
	// const [loading, setLoading] = useState(true);

	return (
		<>
			<Navbar theme={theme} setTheme={setTheme} />
			<Router>
				<Switch>
					<Route exact path='/'>
						<Main theme={theme} />
					</Route>
					<Route exact path='/:country'>
						<Country theme={theme} />
					</Route>
				</Switch>
			</Router>
		</>
	);
}

export default App;
