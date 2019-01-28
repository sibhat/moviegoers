import React from "react";
import { shallow } from "enzyme";
import Search from "./index";

describe("<Search />", () => {
	it("renders component without problem", () => {
		const wrapper = shallow(<Search />);

		expect(wrapper).toMatchSnapshot();
	});
});
