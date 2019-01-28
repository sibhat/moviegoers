import React from "react";
import { shallow } from "enzyme";
import Main from "./index";

describe("<Main />", () => {
	it("renders component without problem", () => {
		const wrapper = shallow(<Main />);

		expect(wrapper).toMatchSnapshot();
	});
});
