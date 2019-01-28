import React from "react";
import { shallow, mount } from "enzyme";
import List from "./index";
import PoperContainer from "./PoperContainer";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import configureStore from "../../../reducer";
import App from "../../../App";

const store = configureStore();

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
