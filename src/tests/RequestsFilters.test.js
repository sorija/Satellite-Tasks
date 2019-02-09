import React from "react";
import { shallow } from "enzyme";
import { RequestsFilters } from "../components/RequestsFilters";
import testFilters from "./fixtures/filters";

let wrapper, mockSetTextFilter, mockSetStatusFilter;
beforeEach(() => {
  mockSetTextFilter = jest.fn();
  mockSetStatusFilter = jest.fn();
  wrapper = shallow(
    <RequestsFilters
      filters={testFilters}
      setTextFilter={mockSetTextFilter}
      setStatusFilter={mockSetStatusFilter}
    />
  );
});

test("renders RequestFilters component with filters props", () => {
  expect(wrapper).toMatchSnapshot();
});

test("handles text change", () => {
  const value = "newName";
  wrapper.find("input").simulate("change", {
    target: { value }
  });
  expect(mockSetTextFilter).toHaveBeenLastCalledWith(value);
});

test("handles status change", () => {
  const value = true;
  wrapper.find("select").simulate("change", {
    target: { value }
  });
  expect(mockSetStatusFilter).toHaveBeenLastCalledWith(value);
});
