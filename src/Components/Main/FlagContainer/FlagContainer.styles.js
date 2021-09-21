import styled from "styled-components";

export const Container = styled.div`
	padding: 45px 0;
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	grid-gap: 80px;

	@media screen and (max-width: 768px) {
		grid-template-columns: repeat(2, 1fr);
		grid-gap: 60px;
	}

	@media screen and (max-width: 575px) {
		grid-template-columns: repeat(1, 1fr);
		max-width: 300px;
		margin: auto;
	}
`;
