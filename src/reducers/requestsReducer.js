const requestsDefaults = [
  {
    id: 0,
    satName: "Alderan",
    start: 4934.539,
    end: 34943.023,
    status: "new"
  },
  {
    id: 1,
    satName: "Bespin",
    start: 249809.342,
    end: 98342.247,
    status: "new"
  },
  {
    id: 2,
    satName: "Coruscant",
    start: 23634.453,
    end: 18374.909,
    status: "new"
  },
  {
    id: 3,
    satName: "Dagobah",
    start: 69529.348,
    end: 463290.236,
    status: "new"
  },
  {
    id: 4,
    satName: "Hoth",
    start: 12843.394,
    end: 423673.634,
    status: "new"
  },
  {
    id: 5,
    satName: "Kashyyyk",
    start: 56932.893,
    end: 484893.208,
    status: "new"
  },
  {
    id: 6,
    satName: "Naboo",
    start: 789644.873,
    end: 125423.026,
    status: "new"
  },
  {
    id: 7,
    satName: "Tatooine",
    start: 356983.348,
    end: 153389.092,
    status: "new"
  },
  {
    id: 8,
    satName: "Yavin",
    start: 934732.342,
    end: 175834.037,
    status: "new"
  },
  {
    id: 9,
    satName: "Wobani",
    start: 754094.346,
    end: 5645343.056,
    status: "new"
  }
];

const requestsReducer = (state = requestsDefaults, action) => {
  return state;
};

export default requestsReducer;
