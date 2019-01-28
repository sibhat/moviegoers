import React from "react";
import { shallow } from "enzyme";
import Detail from "./index";
import { MemoryRoute } from "react-router-dom";

describe("<Detail />", () => {
	it("renders component without problem", () => {
		const wrapper = shallow(<Detail />);

		expect(wrapper).toMatchSnapshot();
	});
});
