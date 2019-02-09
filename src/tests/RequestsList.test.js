import React from "react";
import { shallow } from "enzyme";
import { RequestsList } from "../components/RequestsList";
import requests from "./fixtures/requests";

test("renders RequestsList with requests", () => {
  const wrapper = shallow(<RequestsList requests={requests} />);
  expect(wrapper).toMatchSnapshot();
});

test("renders RequestsList with no request and a message", () => {
  const wrapper = shallow(<RequestsList requests={[]} />);
  expect(wrapper).toMatchSnapshot();
});
