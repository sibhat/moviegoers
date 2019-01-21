import React from "react";
import {
	AppBar,
	Toolbar,
	IconButton,
	Typography,
	Drawer,
	Divider
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import Search from "../../search/container";
import classNames from "classnames";
import { Link } from "react-router-dom";
const index = ({ classes, open, handleDrawerOpen, handleDrawerClose }) => {
	return (
		<>
			<AppBar
				position="absolute"
				className={classNames(
					classes.appBar,
					open && classes.appBarShift
				)}
			>
				<Toolbar disableGutters={!open} className={classes.toolbar}>
					<IconButton
						color="inherit"
						aria-label="Open drawer"
						onClick={handleDrawerOpen}
						className={classNames(
							classes.menuButton,
							open && classes.menuButtonHidden
						)}
					>
						<MenuIcon />
					</IconButton>

					<Link to="/" className={classes.title}>
						MovieGoers
					</Link>
					<Search classes={classes} />
				</Toolbar>
			</AppBar>
			<Drawer
				variant="permanent"
				classes={{
					paper: classNames(
						classes.drawerPaper,
						!open && classes.drawerPaperClose
					)
				}}
				open={open}
			>
				<div className={classes.toolbarIcon}>
					<IconButton onClick={handleDrawerClose}>
						<ChevronLeftIcon />
					</IconButton>
				</div>
				<Divider />
			</Drawer>
		</>
	);
};

export default index;
