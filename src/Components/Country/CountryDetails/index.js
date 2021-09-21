import React from "react";
// styles
import {
	Container,
	Grid,
	Img,
	Information,
	InfoFlex,
	BorderCountries,
	NotFound,
} from "./CountryDetails.styles";
// comonents
import Loading from "../../Loading";

const CountryDetails = ({ theme, data, loading }) => {
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
		borders,
		currencies,
		languages,
	} = data;

	return (
		<Container>
			{loading ? (
				<Loading theme={theme} />
			) : Object.keys(data).length === 0 ? (
				<NotFound theme={theme}>
					<p>Country not Found!!!</p>
				</NotFound>
			) : (
				<Grid>
					<Img>
						<img src={flag} alt='Flag' />
					</Img>
					<Information theme={theme}>
						<h2>{name}</h2>
						<InfoFlex theme={theme}>
							<div>
								<p>
									Native Name: <span>{nativeName}</span>
								</p>
								<p>
									Population: <span>{population}</span>
								</p>
								<p>
									Region: <span>{region}</span>
								</p>
								<p>
									Sub Region: <span>{subregion}</span>
								</p>
								<p>
									Capital: <span>{capital}</span>
								</p>
							</div>
							<div>
								<p>
									Top Level Domains:
									<span> {topLevelDomain && topLevelDomain[0]}</span>
								</p>
								<p>
									currencies:
									<span>
										{" "}
										{currencies && currencies[0].name} (
										{currencies && currencies[0].code})
									</span>
								</p>
								<p>
									Languages:
									<span>
										{languages &&
											languages.map((lang) => <span> {lang.name} </span>)}
									</span>
								</p>
							</div>
						</InfoFlex>
						<BorderCountries theme={theme}>
							<p>
								Borders Countries:
								<ul>
									{borders &&
										borders.map((border) => <li key={border}>{border}</li>)}
								</ul>
							</p>
						</BorderCountries>
					</Information>
				</Grid>
			)}
		</Container>
	);
};

export default CountryDetails;
