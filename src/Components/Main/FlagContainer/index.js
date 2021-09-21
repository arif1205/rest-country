import React from "react";
// styles
import { Container, NotFound } from "./FlagContainer.styles";
// components
import Flag from "./Flag";
// Navlink
import { NavLink } from "react-router-dom";

function FlagContainer({ data, theme }) {
	return (
		<Container>
			{Array.isArray(data) ? (
				data.map((country) => (
					<NavLink
						exact
						to={`/${country.alpha3Code}`}
						style={{ textDecoration: "none" }}>
						<Flag
							name={country.name}
							region={country.region}
							population={country.population}
							capital={country.capital}
							img={country.flag}
							key={country.alpha3Code}
							theme={theme}></Flag>
					</NavLink>
				))
			) : (
				<NotFound theme={theme}>
					<p>Country not Found!!!</p>
				</NotFound>
			)}
		</Container>
	);
}

export default FlagContainer;
