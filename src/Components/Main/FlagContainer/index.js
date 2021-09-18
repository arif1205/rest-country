import React, { useState, useEffect } from "react";
// styles
import { Container } from "./FlagContainer.styles";
// components
import Flag from "./Flag";

function FlagContainer({ data, theme }) {
	const shuffledData = data.sort((a, b) => 0.5 - Math.random());
	return (
		<Container>
			{shuffledData &&
				shuffledData.map((country) => (
					<Flag
						name={country.name}
						region={country.region}
						population={country.population}
						capital={country.capital}
						img={country.flag}
						key={country.alpha3Code}
						theme={theme}></Flag>
				))}
		</Container>
	);
}

export default FlagContainer;
