const requestsDefaults = [
  {
    id: 0,
    satName: "Alderan",
    longitude: 4934.539,
    latitude: 34943.023,
    done: false
  },
  {
    id: 1,
    satName: "Bespin",
    longitude: 249809.342,
    latitude: 98342.247,
    done: false
  },
  {
    id: 2,
    satName: "Coruscant",
    longitude: 23634.453,
    latitude: 18374.909,
    done: false
  },
  {
    id: 3,
    satName: "Dagobah",
    longitude: 69529.348,
    latitude: 463290.236,
    done: false
  },
  {
    id: 4,
    satName: "Dagobah",
    longitude: 132487.843,
    latitude: 876341.432,
    done: false
  },
  {
    id: 5,
    satName: "Hoth",
    longitude: 12843.394,
    latitude: 423673.634,
    done: false
  },
  {
    id: 6,
    satName: "Kashyyyk",
    longitude: 56932.893,
    latitude: 484893.208,
    done: false
  },
  {
    id: 7,
    satName: "Naboo",
    longitude: 789644.873,
    latitude: 125423.026,
    done: false
  },
  {
    id: 8,
    satName: "Naboo",
    longitude: 402834.073,
    latitude: 984283.056,
    done: false
  },
  {
    id: 9,
    satName: "Naboo",
    longitude: 673429.233,
    latitude: 3467211.882,
    done: false
  },
  {
    id: 10,
    satName: "Tatooine",
    longitude: 356983.348,
    latitude: 153389.092,
    done: false
  },
  {
    id: 11,
    satName: "Yavin",
    longitude: 934732.342,
    latitude: 175834.037,
    done: false
  },
  {
    id: 12,
    satName: "Wobani",
    longitude: 754094.346,
    latitude: 5645343.056,
    done: false
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
          done: false
        }
      ];
    case "TOGGLE_DONE":
      return state.map(request => {
        if (request.id === action.id) {
          return {
            ...request,
            done: !request.done
          };
        } else {
          return request;
        }
      });
    default:
      return state;
  }
};

export default requestsReducer;
