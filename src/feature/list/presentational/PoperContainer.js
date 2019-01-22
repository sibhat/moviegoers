import React from "react";
import { Popper, Fade, Paper, Typography, Divider } from "@material-ui/core";
import { withRouter } from "react-router-dom";
import { Card } from "@material-ui/core";

const PoperContainer = props => {
	let { movie, styles, classes } = props;
	const [anchorEl, setAnchorEl] = React.useState(null);
	const [open, setOpen] = React.useState(false);

	function handlerFunc(e) {
		const { currentTarget } = e;
		setAnchorEl(currentTarget);
		if (!open) {
			setOpen(!open);
		}
		props.movieDetailHandler(movie.id);
	}
	function onMouseEnterHandler(e) {
		const { currentTarget } = e;
		setAnchorEl(currentTarget);
		setOpen(!open);
	}
	function onMouseLeaveHandler() {
		setAnchorEl(null);
		setOpen(!open);
	}

	return (
		<>
			<Card
				className={styles.card}
				key={movie.id}
				onClick={handlerFunc}
				onMouseEnter={onMouseEnterHandler}
				onMouseLeave={onMouseLeaveHandler}
			>
				<img
					className={styles.img}
					alt="poster"
					src={`${props.baseUrl}/${props.size}${movie.poster_path}`}
				/>
			</Card>
			<Popper id={movie.id} open={open} anchorEl={anchorEl} transition>
				{({ TransitionProps }) => (
					<Fade {...TransitionProps} timeout={350}>
						<Paper className={classes.popper}>
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
					</Fade>
				)}
			</Popper>
		</>
	);
};

export default withRouter(PoperContainer);
