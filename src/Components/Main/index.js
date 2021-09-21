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

	useEffect(() => {
		const fetchData = async () => {
			const result = await searchAPI.resultBySearch(search);
			if (region) {
				const finalResult = result.filter(
					(country) => country.region.toLowerCase() === region.toLowerCase()
				);
				setData(finalResult);
			} else if (region === "") setData(result);
			else setData(result);
		};
		fetchData();
	}, [search, region]);

	useEffect(() => {
		const fetchData = () => {
			if (region) {
				const result = data.filter(
					(country) => country.region.toLowerCase() === region.toLowerCase()
				);
				setData(result);
			} else if (region === "") {
				setData(data);
			}
		};
		fetchData();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [region, search]);

	return (
		<MainSection theme={theme}>
			<Container theme={theme}>
				<Form
					setRegion={setRegion}
					region={region}
					setSearch={setSearch}
					theme={theme}
				/>
				<FlagContainer data={data} theme={theme} />
			</Container>
		</MainSection>
	);
}

export default Main;
