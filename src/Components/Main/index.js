import React, { useState, useEffect } from "react";
// styles
import { MainSection, Container } from "./Main.style";
// components
import Form from "./Form";
import FlagContainer from "./FlagContainer";
import Loading from "../Loading";
// api
import searchAPI from "../../API";

function Main({ theme, loading, setLoading }) {
	const [data, setData] = useState([]);
	const [search, setSearch] = useState("");
	const [region, setRegion] = useState(null);

	useEffect(() => {
		setLoading(true);
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
		setLoading(false);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [search, region]);

	useEffect(() => {
		setLoading(true);
		const getData = () => {
			if (region) {
				const result = data.filter(
					(country) => country.region.toLowerCase() === region.toLowerCase()
				);
				setData(result);
			} else if (region === "") {
				setData(data);
			}
		};
		getData();
		setLoading(false);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [region, search]);

	return (
		<>
			<MainSection theme={theme}>
				<Container theme={theme}>
					<Form
						setRegion={setRegion}
						region={region}
						setSearch={setSearch}
						theme={theme}
					/>
					{loading ? <Loading /> : <FlagContainer data={data} theme={theme} />}
				</Container>
			</MainSection>
		</>
	);
}

export default Main;
