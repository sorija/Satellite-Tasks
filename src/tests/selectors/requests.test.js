import getDividedRequests from "../../selectors/requests";

test("divides requests into array of length 5 per page", () => {
  let requests = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
  let currentPage = 2;
  expect(getDividedRequests(requests, currentPage)).toHaveLength(5);
  expect(getDividedRequests(requests, currentPage)).toEqual([6, 7, 8, 9, 10]);
});
