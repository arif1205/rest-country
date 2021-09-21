import styled from "styled-components";

export const Container = styled.div`
	width: 100%;
	padding: 60px 0;
`;

export const Grid = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-gap: 120px;
	justify-content: space-between;
	align-items: center;

	@media screen and (max-width: 768px) {
		grid-template-columns: 1fr;
		grid-gap: 60px;
	}

	@media screen and (max-width: 575px) {
	}
`;

export const Img = styled.div`
	img {
		width: 100%;
	}
`;

export const Information = styled.div`
	align-self: center;

	h2 {
		color: ${(props) =>
			props.theme === "dark" ? "var(--dark-text)" : "var(--light-text)"};
		font-weight: var(--font-bold);
		font-size: 1.5rem;
		letter-spacing: 1px;
		padding-bottom: 20px;

		@media screen and (max-width: 575px) {
			font-size: 1.4rem;
		}
	}
`;

export const InfoFlex = styled.div`
	display: flex;
	justify-content: space-between;
	font-family: var(--base-font);

	p {
		font-size: 0.91rem;
		font-weight: var(--font-semi-bold);
		color: ${(props) =>
			props.theme === "dark" ? "#eadede" : "var(--light-text)"};
		margin-bottom: 8px;
		letter-spacing: 0.2px;

		span {
			color: ${(props) => (props.theme === "dark" ? "#ccc" : "#333")};
			font-weight: var(--font-light-weight);
		}
	}

	@media screen and (max-width: 575px) {
		flex-direction: column;
		gap: 30px;
	}
`;

export const BorderCountries = styled.div`
	padding-top: 30px;

	p {
		color: ${(props) =>
			props.theme === "dark" ? "#eadede" : "var(--light-text)"};
		font-size: 0.91rem;
		font-weight: var(--font-semi-bold);
		letter-spacing: 0.2px;

		ul {
			list-style-type: none;
			display: inline-flex;
			flex-wrap: wrap;
			margin-left: 15px;
			gap: 15px;

			li {
				padding: 5px 30px;
				box-shadow: ${(props) =>
					props.theme === "dark" ? "0 0 2px 1px #222" : "0 0 2px 1px #333"};
				background: ${(props) =>
					props.theme === "dark" ? "var(--dark-elem)" : "var(--light-elem)"};
				font-size: 0.7rem;
				color: ${(props) => (props.theme === "dark" ? "#ccc" : "#333")};
				font-weight: var(--font-light-weight);
				border-radius: 2px;
			}
		}
	}
`;
