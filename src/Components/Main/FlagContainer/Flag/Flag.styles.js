import styled from "styled-components";

export const Container = styled.div`
	color: ${(props) =>
		props.theme === "dark" ? "var(--dark-text)" : "var(--light-text)"};
	height: 100%;
	background: ${(props) =>
		props.theme === "dark" ? "var(--dark-elem)" : "var(--light-elem)"};
	overflow: hidden;
	border-radius: 5px;
`;

export const FlagImg = styled.div`
	width: 100%;
	height: 150px;

	img {
		width: 100%;
		max-height: 150px;
		min-height: 150px;
		object-fit: cover;
	}
`;

export const ImgDetails = styled.div`
	padding: 15px 20px;

	h3 {
		font-size: 1.1rem;
		margin-bottom: 15px;
	}

	p {
		margin-bottom: 5px;
		font-size: 0.9rem;

		span:first-child {
			font-weight: var(--font-semi-bold);
		}
		span:last-child {
			color: ${(props) => (props.theme === "dark" ? "#ccc" : "#333")};
		}
	}
`;
