import React from "react";
// styles
import "./Loading.module.css";

const Loading = () => {
	return (
		<>
			<div class='lds-ripple'>
				<div></div>
				<div></div>
			</div>
		</>
	);
};

export default Loading;
