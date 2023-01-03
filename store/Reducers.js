const reducers = (state, action) => {
  switch (action.type) {
    case "data_login":
      return {
        ...state,
        data_login: action.payload,
      };

    default:
      return state;
  }
};

export default reducers;
