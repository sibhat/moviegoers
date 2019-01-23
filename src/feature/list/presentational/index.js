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
		height: "450px",
		justifyContent: "center",
		alighItems: "center",
		position: "relative",
		transition: "all .3s",
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
		width: 300,
		height: "100%",
		margin: "0 2px",
		position: "relative",
		cursor: "pointer",
		transition: "all .3s"
	},
	popper: {
		position: "absolute",
		height: "100%",
		display: "flex",
		opacity: 0,
		flexDirection: "column",
		justifyContent: "space-between",
		bottom: 0,
		zIndex: 100,
		backgroundColor: "#000000d4",
		transition: "all .4s ease",
		"&:hover": {
			opacity: 1,
			animation: "myIn .4s easeIn"
		}
	},
	"@keyframes myIn": {
		"0%": {
			opacity: 0
		},
		"50%": {
			opacity: 0.5
		},
		"100%": {
			opacity: 1
		}
	},
	img: {
		width: "100%",
		position: "absolute",
		top: 0,
		transition: "all .3s",
		"&:hover": {
			transform: "scale(1.2)"
		}
	},

	bgCard: {
		width: "100px",
		transform: "rotate(59deg)",
		marginTop: -18,
		opacity: 0.55
	},

	bgCardSpan: {
		width: "160px",
		height: "90%",
		backgroundImage: "linear-gradient(#6b0082, #883b4c7a 90%)",
		position: "absolute",
		top: 35,
		left: 84,
		transform: "rotate(-10deg)",
		zIndex: -1,
		clipPath:
			"polygon(0 0, 78% 100%, 59% 88%, 56% 99%, 41% 89%, 40% 100%, 25% 91%, 20% 100%)"
	},
	title: {
		display: "block",
		fontSize: "26px",
		// color: theme.palette.text.primary,
		textDecoration: "none",
		textAlign: "center",
		fontWeight: "bold",
		color: "#ff2925",
		animation: "myIn 4s ease"
	},
	description: {
		display: "block",
		padding: "0 20px",
		transition: theme.transitions.create([`all`], {
			duration: theme.transitions.duration.complex
		})
	},

	flex: {
		display: "flex",
		justifyContent: "space-evenly",
		fontSize: "18px"
	},
	dialog: {
		minWidth: 300,
		display: "flex"
	},
	main: {
		// width: 200
		flex: 1
	},
	dialogSection: {
		flex: 1,
		padding: 20
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
