import React from "react";
import { shallow } from "enzyme";
import Footer from "./index";

describe("<Footer />", () => {
	it("renders component without problem", () => {
		const wrapper = shallow(<Footer />);

		expect(wrapper).toMatchSnapshot();
	});
});
