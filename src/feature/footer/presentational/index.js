import React from "react";
import { makeStyles } from "@material-ui/styles";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

const useStyles = makeStyles({
	root: {
		flexGrow: 1,
		background: "#3f4ebc5c",
		width: "100vw",
		position: "fixed",
		bottom: 0,
		color: "#fafafa"
	},
	tabs: {
		background: "#ffffff7d",
		borderRadius: "1px 40px",
		margin: "10px 10px"
	}
});

function Footer({ listenCategoryHanlder, choices, currentChoice }) {
	const classes = useStyles();

	return (
		// <Paper className={classes.root}>
		<Tabs
			value={currentChoice}
			color="primary"
			textColor="primary"
			centered
			className={classes.root}
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
		// </Paper>
	);
}

export default Footer;
