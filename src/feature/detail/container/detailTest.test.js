import React from "react";
import { shallow } from "enzyme";
import Detail from "./index";

describe("<Detail />", () => {
	it("renders component without problem", () => {
		const wrapper = shallow(<Detail />);

		expect(wrapper).toMatchSnapshot();
	});
});
