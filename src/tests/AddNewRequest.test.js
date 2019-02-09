import React from "react";
import { shallow } from "enzyme";
import { AddNewRequest } from "../components/AddNewRequest";
import AddRequestForm from "../components/AddRequestForm";

let wrapper = shallow(<AddNewRequest />);

test("renders AddNewRequest component", () => {
  expect(wrapper).toMatchSnapshot();
});

test("renders the AddRequestForm component if state.addNew is true", () => {
  wrapper.setState({ addNew: true });
  expect(wrapper.find(AddRequestForm).length).toBe(1);
});
