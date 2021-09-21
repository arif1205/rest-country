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

export const NotFound = styled.div`
	width: 100%;
	height: 100%;
	grid-column: 1 / span 4;

	p {
		text-align: center;
		color: ${(props) => (props.theme === "dark" ? "#777" : "#555")};
		font-size: 3rem;
		font-weight: var(--font-bold);

		@media screen and (max-width: 575px) {
			font-size: 2.4rem;
		}
	}
`;
