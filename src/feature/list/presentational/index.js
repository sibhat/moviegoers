import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/styles";

import {
	Card,
	GridList,
	Grid,
	GridListTile,
	GridListTileBar
} from "@material-ui/core";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";

const styles = {
	root: {
		display: "flex",
		flexWrap: "wrap",
		justifyContent: "space-around",
		overflow: "scroll",
		flexDirection: "column",
		width: "100%",
		height: "200px",
		position: "relative",
		top: -10
		// backgroundColor: theme.palette.background.paper,
	},
	card: {
		width: 200,
		height: "100%",
		margin: "0 2px",
		position: "relative",
		cursor: "pointer"
	},
	rightSideNav: {
		width: 60,
		position: "fixed",
		// backgroundImage:
		// 	"linear-gradient(to right, rgba(255, 255, 255, 0), rgb(250, 250, 250) 70%)",
		right: 0,
		height: 300,
		bottom: "24%",
		zIndex: 10000000000000
	},
	leftSideNav: {
		width: 60,
		position: "fixed",
		// backgroundImage:
		// "linear-gradient(to left, rgba(255, 255, 255, 0), rgb(250, 250, 250) 70%)",
		left: 0,
		bottom: "24%",
		height: 300,
		zIndex: 10000000000000
	},
	img: {
		width: "100%",
		position: "absolute",
		height: "100%",
		width: "100%",
		top: 0
	}
};

const index = props => {
	// const classes = styles();

	if (!props.data.results) {
		return <h1>waiting</h1>;
	}
	return (
		<div style={styles.root}>
			<div style={styles.rightSideNav} />
			{props.data.results.map(movie => (
				<Card
					style={styles.card}
					key={movie.id}
					onClick={() => props.movieDetailHandler(movie.id)}
				>
					<CardHeader
						action={
							<IconButton>
								<Link to={`/movies/${movie.id}`}>
									{movie.title}
								</Link>
							</IconButton>
						}
					/>
					<img
						style={styles.img}
						src={`${props.baseUrl}/${props.size}${
							movie.poster_path
						}`}
					/>
					<CardContent>
						<Typography component="p">{movie.overview}</Typography>
					</CardContent>
				</Card>
			))}
			<div style={styles.leftSideNav} />
		</div>
	);
};

export default index;
