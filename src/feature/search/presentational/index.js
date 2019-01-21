import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import { InputBase } from "@material-ui/core";
const index = ({ classes, searchItem, changeHandler, onSubmit }) => {
	return (
		<div className={classes.search}>
			<div className={classes.searchIcon}>
				<SearchIcon />
			</div>
			<form onSubmit={onSubmit}>
				<InputBase
					placeholder="Search…"
					classes={{
						root: classes.inputRoot,
						input: classes.inputInput
					}}
					name="searchItem"
					value={searchItem}
					onChange={changeHandler}
				/>
			</form>
		</div>
	);
};

export default index;
