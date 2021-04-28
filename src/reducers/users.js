import { GET_USER_LIST } from "../action/userAction";

let initialState = {
  getUsersList: false,
  errorUserList: false,
  title: "Usmanafi dev",
};

const users = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_LIST:
      return {
        ...state,
        getUsersList: action.payload.data,
        errorUserList: action.payload.errorMessage,
      };

    default:
      return state;
  }
};

export default users;
