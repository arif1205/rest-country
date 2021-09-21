import styled from "styled-components";

export const Button = styled.button`
	padding: 6px 25px;
	color: ${(props) =>
		props.theme === "dark" ? "var(--dark-text)" : "var(--light-text)"};
	background: ${(props) =>
		props.theme === "dark" ? "var(--dark-elem)" : "var(--light-elem)"};
	border: none;
	border-radius: 3px;
	box-shadow: 0 0 2px 2px #111;
	cursor: pointer;
	transition: 0.2s;

	span {
		display: inline-block;
		margin-right: 10px;
	}

	&:hover {
		opacity: 0.7;
	}
`;
