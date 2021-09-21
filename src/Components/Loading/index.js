import React from "react";
// styles
import { Ripple } from "./Loading.styles.js";

const Loading = ({ theme }) => {
	return (
		<>
			<Ripple theme={theme}>
				<div></div>
				<div></div>
			</Ripple>
		</>
	);
};

export default Loading;
