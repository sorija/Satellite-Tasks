import React from "react";
import { shallow } from "enzyme";
import { Pagination } from "../components/Pagination";

let wrapper, mockSetCurrentPage;
beforeEach(() => {
  mockSetCurrentPage = jest.fn();
  wrapper = shallow(
    <Pagination
      requests={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]}
      setCurrentPage={mockSetCurrentPage}
    />
  );
});

test("renders Pagination component", () => {
  expect(wrapper).toMatchSnapshot();
});

test("renders correct number of page-specific buttons", () => {
  let buttons = wrapper.find("button");
  expect(buttons).toHaveLength(7); //3 for pages + 4 for navigation
});
