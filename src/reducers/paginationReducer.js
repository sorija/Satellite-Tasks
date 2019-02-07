const currentPageDefault = 1;

const currentPageReducer = (state = currentPageDefault, action) => {
  switch (action.type) {
    case "SET_CURRENT_PAGE":
      return action.page;
    default:
      return state;
  }
};

export default currentPageReducer;
