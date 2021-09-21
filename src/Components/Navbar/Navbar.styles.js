import styled from "styled-components";

export const Container = styled.div`
	padding: 25px 80px;
	background: ${(props) =>
		props.theme === "dark" ? "var(--dark-elem)" : "var(--light-elem)"};
	color: ${(props) =>
		props.theme === "dark" ? "var(--dark-text)" : "var(--light-text)"};
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	align-items: center;

	@media screen and (max-width: 575px) {
		padding: 25px 30px;
	}

	@media screen and (max-width: 350px) {
		padding: 25px 20px;
	}
`;

export const Banner = styled.div`
	h1 {
		font-size: 1.2rem;
		font-weight: var(--font-semi-bold);

		@media screen and (max-width: 575px) {
			font-size: 1rem;
		}
	}
`;

export const ToggleTheme = styled.div`
	span {
		display: inline-block;
		margin-right: 10px;
	}
	input {
		appearance: none;
	}
	label {
		font-size: 1rem;
		font-weight: var(--font-semi-bold);
		cursor: pointer;

		@media screen and (max-width: 575px) {
			font-size: 0.9rem;
		}
	}
`;
