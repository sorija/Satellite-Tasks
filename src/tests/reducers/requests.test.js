import requestsReducer from "../../reducers/requests";
import requests from "../fixtures/requests";

describe("testing requests reducer", () => {
  it("should return the default state", () => {
    expect(requestsReducer(requests, { type: "@@INIT" })).toEqual(requests);
  });
  it("should handle ADD_NEW_REQUEST", () => {
    let newRequest = {
      satName: "Name3",
      longitude: 777.77,
      latitude: 88888.88
    };
    let action = {
      type: "ADD_NEW_REQUEST",
      ...newRequest
    };
    expect(requestsReducer(requests, action)).toEqual([
      ...requests,
      { id: requests.length, ...newRequest, done: false }
    ]);
  });
  it("should handle TOGGLE_DONE", () => {
    let action = {
      type: "TOGGLE_DONE",
      id: requests[2].id
    };
    expect(requestsReducer(requests, action)[2]).toEqual({
      ...requests[2],
      done: true
    });
  });
});
