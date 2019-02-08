export const setTextFilter = (text = "") => ({
  type: "SET_TEXT_FILTER",
  text
});

export const setStatusFilter = status => ({
  type: "SET_STATUS_FILTER",
  status
});
