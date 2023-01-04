import axios from "axios";

const reducers = (state, action) => {
  switch (action.type) {
    case "data_login":
      return {
        ...state,
        data_login: action.payload,
      };

    case "data_register":
      return {
        ...state,
        data_register: action.payload,
      };

    case "data_hocvien":
      return {
        ...state,
        data_hocvien: action.payload,
      };

    default:
      return state;
  }
};

export default reducers;
