import styled from "styled-components";

export const Ripple = styled.div`
	display: block;
	position: relative;
	width: 80px;
	height: 80px;
	margin: auto;

	div {
		position: absolute;
		border: ${(props) =>
			props.theme === "dark" ? "4px solid #fff" : "4px solid #000"};
		opacity: 1;
		border-radius: 50%;
		animation: ldsRipple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
	}

	div:nth-child(2) {
		animation-delay: -0.5s;
	}
	@keyframes ldsRipple {
		0% {
			top: 36px;
			left: 36px;
			width: 0;
			height: 0;
			opacity: 1;
		}
		100% {
			top: 0px;
			left: 0px;
			width: 72px;
			height: 72px;
			opacity: 0;
		}
	}
`;
