import getFilteredRequests from "../../selectors/filters";
import requests from "../fixtures/requests";

let text, status;

describe("filters requests correctly", () => {
  it("filters by given text", () => {
    text = "Name2";
    status = "all";
    expect(getFilteredRequests(requests, { text, status })).toEqual([
      requests[2]
    ]);
  });
  it("filters by given status", () => {
    text = "";
    status = "done";
    expect(getFilteredRequests(requests, { text, status })).toEqual([
      requests[1]
    ]);
  });
  it("filters by both text and status", () => {
    text = "Name";
    status = "new";
    expect(getFilteredRequests(requests, { text, status })).toEqual([
      requests[0],
      requests[2]
    ]);
  });
});
