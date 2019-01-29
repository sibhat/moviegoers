import React from "react";
import { Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import Card from "./PoperContainer";

const useStyles = theme => {
	// console.log("theme", theme);q
	return {
		root: {
			display: "flex",
			flexWrap: "wrap",
			overflowX: "scroll",
			flexDirection: "column",
			width: "100%",
			height: "410px",
			justifyContent: "center",
			// alignContent: "center",
			position: "relative",
			transition: "all .3s",
			backgroundColor: "transparent",
			[theme.breakpoints.down("sm")]: {
				height: "260px"
			}
		},
		catagory: {
			display: "inline-block",
			// position: "absolute",
			paddingLeft: 30,
			zIndex: 100,
			margin: 0,
			color: "#b6b6b6"
		},
		card: {
			width: 267,
			height: "400px",
			margin: "0 12px",
			position: "relative",
			cursor: "pointer",
			borderRadius: 10,
			overflow: "hidden",
			display: "inline-block",
			transition: "all 0.275s ease-in-out, visibility 0s 0.275s",
			"&:hover": {
				boxShadow: "9px 6px 17px 0px rgba(0,0,0,0.4)",
				paddingTop: 5,
				transform: "translateY(-5px)"
			},
			[theme.breakpoints.down("sm")]: {
				width: "160px"
			}
		},
		popper: {
			position: "absolute",
			height: "100%",
			display: "flex",
			maxWidth: 1200,
			visibility: "hidden",
			flexDirection: "column",
			justifyContent: "space-between",
			bottom: 0,
			zIndex: 0,
			backgroundColor: "rgba(0,0,0,0.8)",
			willChange: "transform",
			// Slides start below their columns, giving upward motion on hover
			transform: "translateY(100%)",
			transition: "all 0.275s ease-in-out, visibility 0s 0.275s",
			"&:hover": {
				paddingTop: 5,
				visibility: "visibile"

				// animation: "myIn .4s ease-in-out, visibility 0s 0.275s"
			}
		},
		"@keyframes myIn": {
			"0%": {
				opacity: 0
			},

			"100%": {
				opacity: 1
			}
		},

		img: {
			width: "100%",
			position: "absolute",
			top: 0,
			transition: "all .3s"
		},

		bgCard: {
			width: "100%",
			marginTop: -7,
			opacity: 0.85
		},

		bgCardSpan: {
			display: "none"
		},
		title: {
			display: "block",
			fontSize: "26px",
			color: theme.palette.text.primary,
			textDecoration: "none",
			textAlign: "center",
			fontWeight: "bold",
			// color: "#ff2925",
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
			minWidth: 500,
			maxWidth: 600
			// display: "flex"
		},
		main: {
			// width: 200
			flex: 1,
			display: "flex",
			justifyContent: "space-evenly",
			alignItems: "center"
		},
		dialogSection: {
			flex: 1,
			padding: 20
		}
	};
};

function List(props) {
	let styles = props.classes;
	if (!props.data.results || props.data.results.length < 1) {
		return (
			<div className={styles.root + " mrow"}>
				<h1> waiting presentation {props.display}</h1>
			</div>
		);
	}
	return (
		<React.Fragment>
			<Typography variant="h6" gutterBottom className={styles.catagory}>
				{props.display}
			</Typography>
			<div className={styles.root + " mrow"}>
				{/*  movie/tv shows arrey = props.data.result */}
				{props.data.results.map(movie => (
					<Card
						movie={movie}
						styles={styles}
						{...props}
						key={movie.id}
					/>
				))}
			</div>
		</React.Fragment>
	);
}

export default withStyles(useStyles)(List);
