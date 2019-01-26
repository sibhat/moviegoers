import React from "react";
import { withStyles } from "@material-ui/core/styles";

import { Typography, Chip } from "@material-ui/core";
import { func } from "prop-types";

const useStyles = props => {
	return {
		root: {
			width: "100vw",
			height: "500px",
			position: "relative",
			padding: 30,
			overflow: "hidden"
		},
		bgPhoto: {
			minWidth: "500px",
			overflow: "scroll",
			backgroundImage:
				"linear-gradient(to right, rgba(0,0,0,0.9999), transparent)",
			position: "absolute",
			top: 10,
			left: 0
		},
		backdrop: {
			position: "relative",
			width: "100%",
			zIndex: -3,
			background: "rgba(0,0,0,0.8)"
		},
		description: {
			// background: "rgba(0,0,0,0.8)"
			marginTop: 10
		},
		title: {
			// background: "rgba(0,0,0,0.8)"
		},
		text: {
			// background: "rgba(0,0,0,0.8)",
			padding: 30,
			width: 410,
			display: "inline-block",
			zIndex: 1,
			position: "relative"
		},
		genres: {
			marginTop: 10,
			color: "rgba(255,255,255, 0.8)"
		}
	};
};
const index = props => {
	let { data } = props;
	return (
		<div className={props.classes.root} spacing={"30"}>
			<div className={props.classes.text} spacing={"30"}>
				<Typography
					variant="h3"
					color={"secondary"}
					className={props.classes.title}
				>
					{data.title || data.name}
				</Typography>
				<Typography className={props.classes.genres} />

				<div className={props.classes.flex}>
					{props.data.seasons && (
						<Chip
							label={`
						${props.data.seasons.length}
						${props.data.seasons.length > 1 ? "Seasons" : "Season"}
							`}
							color="secondary"
							variant="outlined"
							className={props.classes.chip}
						/>
					)}
					<Chip
						label={`
							${(data.release_date && data.release_date.slice(0, 4)) ||
								(data.first_air_date &&
									data.first_air_date.slice(0, 4))}
							`}
						color="secondary"
						variant="outlined"
						className={props.classes.chip}
					/>
					<Chip
						label={`${data.vote_average || data.popularity}`}
						color="secondary"
						variant="outlined"
						className={props.classes.chip}
					/>
				</div>

				<Typography className={props.classes.description}>
					{props.data.overview}
				</Typography>
				<Typography className={props.classes.genres}>
					Genres: {props.data.genres.map(genre => genre.name)}
				</Typography>
			</div>
			<div className={props.classes.bgPhoto} spacing={"30"}>
				<img
					src={`${props.baseUrl}/${props.size}${data.backdrop_path}`}
					className={props.classes.backdrop}
				/>
			</div>
		</div>
	);
};

export default withStyles(useStyles)(index);
