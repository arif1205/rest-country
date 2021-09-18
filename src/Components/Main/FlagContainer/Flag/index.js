import React from "react";
// styles
import { Container, FlagImg, ImgDetails } from "./Flag.styles";

function Flag({ img, name, population, region, capital, theme }) {
	return (
		<Container theme={theme}>
			<FlagImg theme={theme}>
				<img src={img} alt='Flag' />
			</FlagImg>
			<ImgDetails theme={theme}>
				<h3>{name}</h3>
				<p>
					<span>Population: </span>
					<span>{population}</span>
				</p>
				<p>
					<span>Region: </span>
					<span>{region}</span>
				</p>
				<p>
					<span>Capital: </span>
					<span>{capital}</span>
				</p>
			</ImgDetails>
		</Container>
	);
}

export default Flag;
