import React from "react";
import { Paper, Typography, Divider, Button } from "@material-ui/core";
import { Dialog, DialogActions, DialogContent, Chip } from "@material-ui/core";
import "./hover.css";
import Main from "../../main/container";
import { withRouter } from "react-router-dom";

const PoperContainer = props => {
	let { movie, styles, classes, history } = props;

	// dopen for dialog state managment
	const [dOpen, setDOpen] = React.useState(false);

	function moreInfoHandler() {
		let option = movie.title ? "movies" : "tv";
		history.push(`/${option}/${movie.id}`);
	}

	function handlerFunc() {
		setDOpen(!dOpen);
		props.movieDetailHandler(movie.id);
	}

	return (
		<React.Fragment>
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

				<Paper className={classes.popper + " popper"}>
					<img
						className={classes.bgCard}
						alt="poster"
						src={"../assets/04.png"}
					/>
					<span className={classes.bgCardSpan} />

					<Typography className={classes.description}>
						{movie.overview.slice(0, 200)} {"..."}
					</Typography>
					<Divider />
					<div className={classes.flex}>
						<Chip
							label={`
							${(movie.release_date && movie.release_date.slice(0, 4)) ||
								(movie.first_air_date &&
									movie.first_air_date.slice(0, 4))}
							`}
							color="secondary"
							variant="outlined"
							className={classes.chip}
						/>
						<Typography color="secondary" variant="h6">
							{"Trailer"}
						</Typography>
						<Chip
							label={`${movie.vote_average || movie.popularity}`}
							color="secondary"
							variant="outlined"
							className={classes.chip}
						/>
					</div>

					<Divider />
				</Paper>
			</div>
			<Dialog
				fullWidth={true}
				open={dOpen}
				maxWidth="md"
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
		</React.Fragment>
	);
};

export default withRouter(PoperContainer);
