import { fade } from "@material-ui/core/styles/colorManipulator";
const drawerWidth = 240;

export const styles = theme => ({
	root: {
		display: "flex"
	},
	toolbar: {
		paddingRight: 24 // keep right padding when drawer closed
	},
	toolbarIcon: {
		display: "flex",
		alignItems: "center",
		justifyContent: "flex-end",
		padding: "0 8px",
		...theme.mixins.toolbar
	},
	appBar: {
		zIndex: theme.zIndex.drawer + 1,
		transition: theme.transitions.create(["width", "margin"], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen
		})
	},
	appBarShift: {
		marginLeft: drawerWidth,
		width: `calc(100% - ${drawerWidth}px)`,
		transition: theme.transitions.create(["width", "margin"], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen
		})
	},
	menuButton: {
		marginLeft: 12,
		marginRight: 36
	},
	menuButtonHidden: {
		display: "none"
	},
	title: {
		flexGrow: 1,
		color: "#fff",
		fontSize: "1.25rem",
		fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
		fontWeight: 500,
		lineHeight: 1.6,
		letterSpacing: "0.0075em",
		textDecoration: "none"
	},
	drawerPaper: {
		position: "relative",
		whiteSpace: "nowrap",
		width: drawerWidth,
		transition: theme.transitions.create("width", {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen
		})
	},

	drawerPaperClose: {
		overflowX: "hidden",

		transition: theme.transitions.create("width", {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen
		}),
		width: 0
	},
	appBarSpacer: theme.mixins.toolbar,
	content: {
		flexGrow: 1,
		paddingTop: theme.spacing.unit * 8,
		paddingBottom: theme.spacing.unit * 6,
		height: "100vh",
		overflow: "auto"
	},
	chartContainer: {
		marginLeft: -22
	},
	tableContainer: {
		height: 320
	},
	h5: {
		marginBottom: theme.spacing.unit * 2
	},
	main: {
		width: "100%",
		height: "500px"
	},
	search: {
		position: "relative",
		borderRadius: theme.shape.borderRadius,
		backgroundColor: fade(theme.palette.common.white, 0.15),
		"&:hover": {
			backgroundColor: fade(theme.palette.common.white, 0.25)
		},
		marginLeft: 0,
		width: "100%",
		[theme.breakpoints.up("sm")]: {
			marginLeft: theme.spacing.unit,
			width: "auto"
		}
	},
	drawer: {
		width: "0px",
		flexShrink: 0
	},
	searchIcon: {
		width: theme.spacing.unit * 9,
		height: "100%",
		position: "absolute",
		pointerEvents: "none",
		display: "flex",
		alignItems: "center",
		justifyContent: "center"
	},
	inputRoot: {
		color: "inherit",
		width: "100%"
	},
	inputInput: {
		paddingTop: theme.spacing.unit,
		paddingRight: theme.spacing.unit,
		paddingBottom: theme.spacing.unit,
		paddingLeft: theme.spacing.unit * 10,
		transition: theme.transitions.create("width"),
		width: "100%",
		[theme.breakpoints.up("sm")]: {
			width: 120,
			"&:focus": {
				width: 200
			}
		}
	}
});
