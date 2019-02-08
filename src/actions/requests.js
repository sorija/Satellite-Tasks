export const addRequest = (satName, longitude, latitude) => ({
  type: "ADD_NEW_REQUEST",
  satName,
  longitude,
  latitude
});

export const toggleDone = id => ({
  type: "TOGGLE_DONE",
  id
});
