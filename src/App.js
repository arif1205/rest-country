import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// components
import Navbar from "./Components/Navbar";
import Main from "./Components/Main";
import Country from "./Components/Country";

function App() {
	const [theme, setTheme] = useState("");
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const prevTheme = localStorage.getItem("theme");
		if (!prevTheme) {
			localStorage.setItem("theme", "dark");
			setTheme(localStorage.getItem("theme"));
		} else {
			if (theme) {
				if (prevTheme !== theme) localStorage.setItem("theme", theme);
			} else {
				setTheme(localStorage.getItem("theme"));
			}
		}
	}, [theme]);

	return (
		<>
			<Navbar theme={theme} setTheme={setTheme} />
			<Router>
				<Switch>
					<Route exact path='/'>
						<Main theme={theme} loading={loading} setLoading={setLoading} />
					</Route>
					<Route exact path='/:country'>
						<Country theme={theme} loading={loading} setLoading={setLoading} />
					</Route>
				</Switch>
			</Router>
		</>
	);
}

export default App;
