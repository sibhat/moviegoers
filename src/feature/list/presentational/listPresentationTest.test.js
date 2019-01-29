import React from "react";
import { shallow } from "enzyme";
import List from "./index";
import PoperContainer from "./PoperContainer";

describe("<List />", () => {
	it("renders component without problem", () => {
		const wrapper = shallow(<List />);

		expect(wrapper).toMatchSnapshot();
	});
	it("renders card component without problem", () => {
		let data = {
			results: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }]
		};
		const listWrapper = shallow(<List data={data} />);
		const poperWrapper = listWrapper.find(".card");

		expect(poperWrapper.exists).toBeTruthy();
	});
});
describe("<PoperContainer />", () => {
	it("renders component without problem", () => {
		const cardWrapper = shallow(<PoperContainer />);

		expect(cardWrapper).toMatchSnapshot();
	});
});
