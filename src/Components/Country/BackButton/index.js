import React from "react";
// navlink
import { NavLink } from "react-router-dom";
// styles
import { Button } from "./BackButton.styles";

const BackButton = ({ theme }) => {
	return (
		<div>
			<NavLink exact to='/' style={{ textDecoration: "none" }}>
				<Button theme={theme}>
					<span>
						<i class='fas fa-long-arrow-alt-left'></i>
					</span>
					Back
				</Button>
			</NavLink>
		</div>
	);
};

export default BackButton;
