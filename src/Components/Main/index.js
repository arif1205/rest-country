import React, { useState, useEffect } from "react";
// styles
import { MainSection, Container } from "./Main.style";
// components
import Form from "./Form";
import FlagContainer from "./FlagContainer";
// api
import searchAPI from "../../API";

function Main({ theme }) {
	const [data, setData] = useState([]);
	const [search, setSearch] = useState("");
	const [region, setRegion] = useState(null);

	useEffect(async () => {
		const result = await searchAPI.resultBySearch(search);
		if (region) {
			const finalResult = result.filter(
				(country) => country.region.toLowerCase() === region.toLowerCase()
			);
			setData(finalResult);
		} else if (region === "") setData(result);
		else setData(result);
	}, [search, region]);

	useEffect(async () => {
		if (region) {
			const result = data.filter(
				(country) => country.region.toLowerCase() === region.toLowerCase()
			);
			setData(result);
		} else if (region === "") {
			setData(data);
		}
	}, [region, search]);

	useEffect(async () => {
		const result = await searchAPI.resultBySearch();
		setData(result);
	}, []);

	return (
		<MainSection theme={theme}>
			<Container theme={theme}>
				<Form setRegion={setRegion} region={region} setSearch={setSearch} theme={theme} />
				<FlagContainer data={data} theme={theme} />
			</Container>
		</MainSection>
	);
}

export default Main;
