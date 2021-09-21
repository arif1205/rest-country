import styled from "styled-components";

export const FormContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-wrap: wrap;

	@media screen and (max-width: 768px) {
		gap: 20px;
	}
`;

export const Input = styled.div`
	background: ${(props) =>
		props.theme === "dark" ? "var(--dark-elem)" : "var(--light-elem)"};
	padding: 10px 20px;
	border-radius: 5px;

	button,
	input {
		color: ${(props) =>
			props.theme === "dark" ? "var(--dark-text)" : "var(--light-text)"};
		font-size: 1rem;
		background: transparent;
		border: none;
		padding: 5px 8px;
	}
	input {
		padding: 5px 10px;
		min-width: 300px;

		&:focus {
			border: none;
			outline: none;
		}

		@media screen and (max-width: 450px) {
			min-width: 200px;
			max-width: 350px;
		}
	}
`;

export const Filter = styled.div`
	height: 100%;
	background: ${(props) =>
		props.theme === "dark" ? "var(--dark-elem)" : "var(--light-elem)"};
	align-self: center;
	width: 200px;
	border-radius: 5px;
	position: relative;

	.select {
		background: transparent;
		padding: 15px 20px;
		color: ${(props) =>
			props.theme === "dark" ? "var(--dark-text)" : "var(--light-text)"};
		border: none;
		font-weight: var(--font-semi-bold);
		display: flex;
		justify-content: space-between;
		align-items: center;
		cursor: pointer;

		span {
			align-self: center;
		}

		&:hover {
			opacity: 0.8;
		}
	}

	ul {
		display: none;
		list-style-type: none;
		border-radius: 5px;
		background: ${(props) =>
			props.theme === "dark" ? "var(--dark-elem)" : "var(--light-elem)"};
		color: ${(props) =>
			props.theme === "dark" ? "var(--dark-text)" : "var(--light-text)"};
		position: absolute;
		top: 108%;
		left: 0;
		width: 100%;
		z-index: 999;

		li {
			padding: 15px 20px;
			cursor: pointer;

			&:hover {
				background: ${(props) =>
					props.theme === "dark" ? "var(--dark-bg)" : "var(--light-bg)"};
			}
		}
	}
`;
