import axios from "axios";

const reducers = (state, action) => {
  switch (action.type) {
    case "AddUser":
      return {
        ...state,
        user: action.payload,
      };

    case "SnackBar":
      return {
        ...state,
        snackbar: action.payload,
      };

    case "Loading":
      return {
        ...state,
        loading: action.payload,
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
