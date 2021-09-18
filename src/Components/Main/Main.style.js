import styled from "styled-components";

export const MainSection = styled.main`
	background: ${(props) =>
		props.theme === "dark" ? "var(--dark-bg)" : "var(--light-bg)"};
	min-height: 89vh;
`;

export const Container = styled.div`
	padding: 45px 80px;
`;
