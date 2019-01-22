import React from "react";
import { Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import PoperContainer from "./PoperContainer";

const useStyles = theme => ({
	root: {
		display: "flex",
		flexWrap: "wrap",
		justifyContent: "space-around",
		overflow: "scroll",
		flexDirection: "column",
		width: "100%",
		height: "200px",
		position: "relative",
		backgroundColor: theme.palette.background.paper
	},
	catagory: {
		display: "inline-block",
		// position: "absolute",
		paddingLeft: 30,
		zIndex: 100,
		margin: 0
	},
	card: {
		width: 200,
		height: "100%",
		margin: "0 2px",
		position: "relative",
		cursor: "pointer"
	},
	img: {
		width: "100%",
		position: "absolute",
		height: "100%",
		top: 0
	},
	title: {
		display: "block",
		fontSize: "26px",
		// color: theme.palette.text.primary,
		textDecoration: "none",
		textAlign: "center",
		fontWeight: "bold",
		color: "#ff2925"
	},
	description: {
		display: "block"
	},
	popper: {
		width: 200,
		padding: 20,
		overflow: "scroll"
	},
	flex: {
		display: "flex",
		justifyContent: "space-evenly",
		fontSize: "18px"
	}
});

function List(props) {
	if (!props.data.results) {
		return <h1>waiting presentation {props.display}</h1>;
	}
	let styles = props.classes;
	return (
		<>
			<Typography variant="h6" gutterBottom className={styles.catagory}>
				{props.display}
			</Typography>
			<div className={styles.root}>
				{props.data.results.map(movie => (
					<PoperContainer
						movie={movie}
						styles={styles}
						{...props}
						key={movie.id}
					/>
				))}
			</div>
		</>
	);
}

export default withStyles(useStyles)(List);
