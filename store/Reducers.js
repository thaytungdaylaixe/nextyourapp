import axios from "axios";

const reducers = (state, action) => {
  switch (action.type) {
    case "ChangeMaMon":
      return {
        ...state,
        dataShow: state.lmsData[action.payload],
      };

    case "AZ":
      return {
        ...state,
        dataShow: state.dataShow
          ? state["dataShow"].sort((a, b) => a.cauhoi.localeCompare(b.cauhoi))
          : null,
      };

    case "ZA":
      return {
        ...state,
        dataShow: state.dataShow
          ? state["dataShow"].sort((a, b) => b.cauhoi.localeCompare(a.cauhoi))
          : null,
      };

    case "RD":
      return {
        ...state,
        dataShow: state.dataShow
          ? state["dataShow"].sort(() => Math.random() - 0.5)
          : null,
      };

    case "Loading":
      return {
        ...state,
        loading: action.payload,
      };

    case "Ketqua":
      return {
        ...state,
        ketqua: { ...state.ketqua, ...action.payload },
      };

    case "showKetqua":
      return {
        ...state,
        showKetqua: action.payload,
      };

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
