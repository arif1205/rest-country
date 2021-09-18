import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import Main from "./Components/Main";

function App() {
	const [theme, setTheme] = useState("dark");

	return (
		<>
			<Navbar theme={theme} setTheme={setTheme} />
			<Main theme={theme} />
		</>
	);
}

export default App;
