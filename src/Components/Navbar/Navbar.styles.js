import styled from "styled-components";

export const Container = styled.div`
	padding: 25px 80px;
	background: ${(props) =>
		props.theme === "dark" ? "var(--dark-elem)" : "var(--light-elem)"};
	color: ${(props) =>
		props.theme === "dark" ? "var(--dark-text)" : "var(--light-text)"};
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const Banner = styled.div`
	h1 {
		font-size: 1.2rem;
		font-weight: var(--font-semi-bold);
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
	}
`;
