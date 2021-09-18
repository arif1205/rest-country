import React from "react";
// styles
import { Container, Banner, ToggleTheme } from "./Navbar.styles";

function Navbar({ theme, setTheme }) {
	return (
		<nav>
			<Container theme={theme}>
				<Banner theme={theme}>
					<h1>Where to the world?</h1>
				</Banner>
				<ToggleTheme theme={theme}>
					<span>
						{theme === "dark" ? (
							<i class='fas fa-moon'></i>
						) : (
							<i class='fas fa-sun'></i>
						)}
					</span>
					<input
						type='checkbox'
						name='theme'
						value='dark'
						id='theme'
						onChange={() =>
							setTheme((prev) => (prev === "dark" ? "light" : "dark"))
						}
					/>
					<label for='theme'>
						{theme === "dark" ? "Dark Mode" : "Light Mode"}
					</label>
				</ToggleTheme>
			</Container>
		</nav>
	);
}

export default Navbar;
