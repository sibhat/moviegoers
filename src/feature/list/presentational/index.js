import React from "react";
import { Link } from "react-router-dom";
import {
	Card,
	CardHeader,
	CardContent,
	Typography,
	IconButton
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
let options = {
	now_playing: "Now Playing",
	top_rated: "Top Rated",
	popular: "Popular",
	upcoming: "upcoming"
};
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
					<Card
						className={styles.card}
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
							className={styles.img}
							alt="poster"
							src={`${props.baseUrl}/${props.size}${
								movie.poster_path
							}`}
						/>
						<CardContent>
							<Typography variant="body2">
								{movie.overview}
							</Typography>
						</CardContent>
					</Card>
				))}
			</div>
		</>
	);
}

export default withStyles(useStyles)(List);
