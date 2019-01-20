import React from "react";
import { withTheme, withStyles } from "@material-ui/core/styles";

import { Paper, AppBar } from "@material-ui/core";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

const useStyles = () => {
	return {
		root: {
			width: "100vw",
			position: "fixed",
			bottom: 0
		},
		tabs: {
			borderRadius: "1px 40px"
		}
	};
};

function Footer({ listenCategoryHanlder, choices, currentChoice, classes }) {
	return (
		<Paper className={classes.root}>
			<Tabs
				value={currentChoice}
				centered
				// className={classes.root}
				indicatorColor="primary"
				textColor="primary"
				variant="fullWidth"
				scrollButtons="off"
			>
				{choices.map(choice => {
					if (choice[1]["name"]) {
						return (
							<Tab
								key={choice[1]["id"]}
								label={choice[0]}
								className={classes.tabs}
								onClick={() =>
									listenCategoryHanlder(choice[1]["name"])
								}
							/>
						);
					}
					return null;
				})}
			</Tabs>
		</Paper>
	);
}

export default withStyles(useStyles)(Footer);
