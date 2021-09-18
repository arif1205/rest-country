import React, { useEffect, useState } from "react";
// styles
import { FormContainer, Input, Filter } from "./Form.styles";

function Form({ setRegion, region, setSearch, theme }) {
	const [state, setState] = useState(false);

	useEffect(() => {
		const list = document.getElementById("regions");
		list.style.display = `${state ? "block" : "none"}`;
	}, [state]);

	return (
		<FormContainer theme={theme}>
			<Input theme={theme}>
				<button type='button'>
					<i class='fas fa-search'></i>
				</button>
				<input
					type='text'
					name='search'
					placeholder='Ex: Bangladesh'
					id='search'
					onKeyUp={(e) => {
						e.key === "Enter" && setSearch(e.target.value);
					}}
					onBlur={(e) => setSearch(e.target.value)}
				/>
			</Input>
			<Filter theme={theme}>
				<div
					className='select'
					id='region'
					onClick={() => setState((prevState) => !prevState)}>
					<span>{region || "Filter By Region"}</span>
					<span>
						<i class='fas fa-chevron-down'></i>
					</span>
				</div>
				<ul
					id='regions'
					onClick={(e) => {
						setRegion(
							`${e.target.innerText === "Any" ? "" : e.target.innerText}`
						);
						setState(false);
					}}>
					<li>Any</li>
					<li>Africa</li>
					<li>Asia</li>
					<li>Americas</li>
					<li>Europe</li>
					<li>Oceania</li>
				</ul>
			</Filter>
		</FormContainer>
	);
}

export default Form;
