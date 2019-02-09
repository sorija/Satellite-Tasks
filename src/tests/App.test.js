import React from "react";
import { shallow } from "enzyme";
import App from "../components/App";

test("renders App component", () => {
  const wrapper = shallow(<App />);
  expect(wrapper).toMatchSnapshot();
});
