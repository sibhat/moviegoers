import React from "react";
import { shallow } from "enzyme";
import ListContainer from "./index";
import GridList from "./GridList";

describe("<List />", () => {
	it("renders component without problem", () => {
		const wrapper = shallow(<ListContainer />);

		expect(wrapper).toMatchSnapshot();
	});
});
describe("<GridList />", () => {
	it("renders component without problem", () => {
		const wrapper = shallow(<GridList />);

		expect(wrapper).toMatchSnapshot();
	});
});
