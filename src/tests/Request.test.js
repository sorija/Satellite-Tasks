import React from "react";
import { shallow } from "enzyme";
import requests from "./fixtures/requests";
import Request from "../components/Request";

test("renders Request component with a request", () => {
  const wrapper = shallow(<Request {...requests[0]} />);
  expect(wrapper).toMatchSnapshot();
});
