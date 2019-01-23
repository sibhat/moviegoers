import React from "react";
import {
	Popper,
	Fade,
	Paper,
	Typography,
	Divider,
	Button
} from "@material-ui/core";

import { Card, Dialog, DialogActions, DialogContent } from "@material-ui/core";

import { withRouter, Link } from "react-router-dom";
import "./hover.css";

import Main from "../../main/container";

let x = 0;
let timeInterval;
const PoperContainer = props => {
	let { movie, styles, classes, history } = props;
	const [anchorEl, setAnchorEl] = React.useState(null);
	const [open, setOpen] = React.useState(true);
	const [dOpen, setDOpen] = React.useState(false);
	function moreInfoHandler(e) {
		let option = movie.title ? "movies" : "tv";
		history.push(`/${option}/${movie.id}`);
	}
	function handlerFunc(e) {
		// const { currentTarget } = e;
		// setAnchorEl(currentTarget);
		setDOpen(!dOpen);

		props.movieDetailHandler(movie.id);
	}
	function onMouseEnterHandler(e) {
		const { currentTarget } = e;
		x = 0;
		timeInterval = setInterval(() => {
			x++;
			if (x > 3) {
				x = 0;
				setAnchorEl(currentTarget);
				setOpen(true);
			}
		}, 100);
	}
	function onMouseLeaveHandler() {
		setAnchorEl(null);
		setOpen(false);
		clearInterval(timeInterval);
	}

	return (
		<>
			<div
				className={styles.card + " card"}
				key={movie.id}
				onClick={handlerFunc}
			>
				<img
					className={styles.img}
					alt="poster"
					src={`${props.baseUrl}/${props.size}${movie.poster_path}`}
				/>

				{/* {({ TransitionProps }) => (
						<Fade {...TransitionProps} timeout={350}> */}
				<Paper className={classes.popper + " popper"} sibhat={"true"}>
					<img
						className={classes.bgCard}
						alt="poster"
						src={"../assets/04.png"}
					/>
					<span className={classes.bgCardSpan} />
					<Typography className={classes.title}>
						{movie.title || movie.name}
					</Typography>
					<div className={classes.flex}>
						<Typography className={classes.description}>
							{(movie.release_date &&
								movie.release_date.slice(0, 4)) ||
								(movie.first_air_date &&
									movie.first_air_date.slice(0, 4))}
						</Typography>
						<Typography className={classes.description}>
							{movie.vote_average || movie.popularity}
						</Typography>
					</div>
					<Divider />
					<Typography className={classes.description}>
						{movie.overview}
					</Typography>
					<Divider />
					<Divider />
				</Paper>
				{/* </Fade> */}
				{/* )} */}
			</div>

			<Dialog
				className={classes.dialog}
				fullWidth={true}
				open={dOpen}
				onClose={handlerFunc}
			>
				<div className={classes.flex}>
					<DialogContent className={classes.main}>
						<Main />
					</DialogContent>
					<div className={classes.dialogSection}>
						<Typography className={classes.title}>
							{movie.title || movie.name}
						</Typography>
						<div className={classes.flex}>
							<Typography className={classes.description}>
								{(movie.release_date &&
									movie.release_date.slice(0, 4)) ||
									(movie.first_air_date &&
										movie.first_air_date.slice(0, 4))}
							</Typography>
							<Typography className={classes.description}>
								{movie.vote_average || movie.popularity}
							</Typography>
						</div>
						<Divider />
						<Typography className={classes.description}>
							{movie.overview}
						</Typography>
					</div>
				</div>
				<DialogActions>
					<Button onClick={handlerFunc} color="primary" autoFocus>
						Close
					</Button>
					<Button onClick={moreInfoHandler} color="primary" autoFocus>
						more info
					</Button>
				</DialogActions>
			</Dialog>
		</>
	);
};

export default withRouter(PoperContainer);
