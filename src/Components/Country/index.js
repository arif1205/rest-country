import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// styles
import { MainSection, Container } from "../Main/Main.style";
// components
import BackButton from "./BackButton";
import CountryDetails from "./CountryDetails";
// api
import searchAPI from "../../API";

function Country({ theme }) {
	const [data, setData] = useState({});

	const id = useParams();
	const alphaCode = id.country;

	useEffect(() => {
		const fetchCountry = async () => {
			const result = await searchAPI.resultByAlpha(alphaCode);
			setData(result);
		};
		fetchCountry();
	}, [alphaCode]);

	return (
		<MainSection theme={theme}>
			<Container theme={theme}>
				<BackButton theme={theme} />
				<CountryDetails theme={theme} data={data} />
			</Container>
		</MainSection>
	);
}

export default Country;
