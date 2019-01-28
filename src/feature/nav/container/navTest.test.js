import React from "react";
import { shallow } from "enzyme";
import Nav from "./index";

describe("<Nav />", () => {
	it("renders component without problem", () => {
		const wrapper = shallow(<Nav />);

		expect(wrapper).toMatchSnapshot();
	});
});
