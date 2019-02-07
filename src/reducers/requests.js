const requestsDefaults = [
  {
    id: 0,
    satName: "Alderan",
    longitude: 4934.539,
    latitude: 34943.023,
    status: "new"
  },
  {
    id: 1,
    satName: "Bespin",
    longitude: 249809.342,
    latitude: 98342.247,
    status: "new"
  },
  {
    id: 2,
    satName: "Coruscant",
    longitude: 23634.453,
    latitude: 18374.909,
    status: "new"
  },
  {
    id: 3,
    satName: "Dagobah",
    longitude: 69529.348,
    latitude: 463290.236,
    status: "new"
  },
  {
    id: 4,
    satName: "Hoth",
    longitude: 12843.394,
    latitude: 423673.634,
    status: "new"
  },
  {
    id: 5,
    satName: "Kashyyyk",
    longitude: 56932.893,
    latitude: 484893.208,
    status: "new"
  },
  {
    id: 6,
    satName: "Naboo",
    longitude: 789644.873,
    latitude: 125423.026,
    status: "new"
  },
  {
    id: 7,
    satName: "Tatooine",
    longitude: 356983.348,
    latitude: 153389.092,
    status: "new"
  },
  {
    id: 8,
    satName: "Yavin",
    longitude: 934732.342,
    latitude: 175834.037,
    status: "new"
  },
  {
    id: 9,
    satName: "Wobani",
    longitude: 754094.346,
    latitude: 5645343.056,
    status: "new"
  }
];

const requestsReducer = (state = requestsDefaults, action) => {
  switch (action.type) {
    case "ADD_NEW_REQUEST":
      return [
        ...state,
        {
          id: state.length,
          satName: action.satName,
          longitude: action.longitude,
          latitude: action.latitude,
          status: "new"
        }
      ];
    default:
      return state;
  }
};

export default requestsReducer;
