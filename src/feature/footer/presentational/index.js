import React from "react";
import { Link } from "react-router-dom";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import red from "@material-ui/core/colors/red";

const styles = {
	card: {
		width: 400,
		margin: "20px auto"
	},
	flex: {
		display: "flex",
		justifyContent: "space-between",
		width: "100%",
		flexWrap: "wrap"
	},
	actions: {
		display: "flex"
	},
	expand: {
		transform: "rotate(0deg)",
		marginLeft: "auto"
	},
	expandOpen: {
		transform: "rotate(180deg)"
	}
};

const index = props => {
	if (!props.data.results) {
		return <h1>waiting</h1>;
	}
	return (
		<div style={styles.flex}>
			{props.data.results.map(movie => (
				<Card key={movie.id} style={styles.card}>
					<CardHeader
						action={
							<IconButton>
								<Link to={`/movies/${movie.id}`}>
									{movie.title}
								</Link>
							</IconButton>
						}
					/>
					<CardMedia image={movie.photo} title="Paella dish" />
					<CardContent>
						<Typography component="p">{movie.overview}</Typography>
					</CardContent>
				</Card>
			))}
		</div>
	);
};

export default index;
