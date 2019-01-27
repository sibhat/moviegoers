import React from "react";
import { shallow } from "enzyme";

import ListContainer from "./index";
import GridList from "./GridList";

describe("List container", () => {
	it("renders components", () => {
		const wrapper = shallow(<ListContainer />);

		expect(wrapper).toMatchSnapshot();
	});
	it("renders components", () => {
		const wrapper = shallow(<GridList />);

		expect(wrapper).toMatchSnapshot();
	});
});
