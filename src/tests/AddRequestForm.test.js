import React from "react";
import { shallow } from "enzyme";
import { AddRequestForm } from "../components/AddRequestForm";
import requests from "./fixtures/requests";

test("renders AddRequestForm", () => {
  let wrapper = shallow(<AddRequestForm />);
  expect(wrapper).toMatchSnapshot();
});

test("calls onSubmit with props", () => {
  let mockOnSubmit = jest.fn();
  let wrapper = shallow(<AddRequestForm onSubmit={mockOnSubmit} />);
  wrapper.setState({
    satName: requests[1].satName,
    longitude: requests[1].longitude,
    latitude: requests[1].latitude
  });
  wrapper.find("form").simulate("submit", {
    preventDefault: () => {}
  });
  expect(mockOnSubmit).toHaveBeenCalledWith({
    satName: requests[1].satName,
    longitude: requests[1].longitude,
    latitude: requests[1].latitude
  });
});
