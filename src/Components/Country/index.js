import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// styles
import { MainSection, Container } from "../Main/Main.style";
// components
import BackButton from "./BackButton";
import CountryDetails from "./CountryDetails";
// api
import searchAPI from "../../API";

function Country({ theme, loading, setLoading }) {
	const [data, setData] = useState({});

	const id = useParams();
	const alphaCode = id.country;

	useEffect(() => {
		const fetchCountry = async () => {
			setLoading(true);
			const result = await searchAPI.resultByAlpha(alphaCode);
			if (result.status === 400) setData({});
			else setData(result);
			setLoading(false);
		};
		fetchCountry();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [alphaCode]);

	return (
		<MainSection theme={theme}>
			<Container theme={theme}>
				<BackButton theme={theme} />
				<CountryDetails theme={theme} data={data} loading={loading} />
			</Container>
		</MainSection>
	);
}

export default Country;
