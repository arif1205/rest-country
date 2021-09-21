import React from "react";
// styles
import {
	Container,
	Grid,
	Img,
	Information,
	InfoFlex,
} from "./CountryDetails.styles";

const CountryDetails = ({ theme, data }) => {
	// datas
	const {
		nativeName,
		flag,
		name,
		topLevelDomain,
		region,
		subregion,
		population,
		capital,
		currencies,
		languages,
	} = data;

	return (
		<Container>
			<Grid>
				<Img>
					<img src={flag} alt='Flag' />
				</Img>
				<Information>
					<h2>{name}</h2>
					<InfoFlex>
						<div>
							<p>Native Name: {nativeName}</p>
							<p>Population: {population} </p>
							<p>Region: {region}</p>
							<p>Sub Region: {subregion} </p>
							<p>Capital: {capital} </p>
						</div>
						<div>
							<p>Top Level Domains: {topLevelDomain[0]}</p>
							<p>Currencies: {})</p>
							<p>Languages: {} </p>
						</div>
					</InfoFlex>
				</Information>
			</Grid>
		</Container>
	);
};

export default CountryDetails;
