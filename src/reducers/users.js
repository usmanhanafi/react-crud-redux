import { GET_USERS_DETAIL, GET_USERS_LIST, POST_USER_CREATE, PUT_USER_EDIT } from "../action/userAction";

let initialState = {
  getUsersList: false,
  errorUsersList: false,
  getUsersDetail: false,
  errorUserDetail: false,
  getResponDataUser: false,
  errorResponDataUser: false,
  title: "Usmanafi dev",
};

const users = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS_LIST:
      return {
        ...state,
        getUsersList: action.payload.data,
        errorUserList: action.payload.errorMessage,
      };

      case GET_USERS_DETAIL:
      return {
        ...state,
        getUsersDetail: action.payload.data,
        errorUsersDetail: action.payload.errorMessage,
      };

      case POST_USER_CREATE:
      return {
        ...state,
        getResponDataUser: action.payload.data,
        errorResponDataUser: action.payload.errorMessage,
      };
      case PUT_USER_EDIT:
      return {
        ...state,
        getResponDataUser: action.payload.data,
        errorResponDataUser: action.payload.errorMessage,
      };
    default:
      return state;
  }
};

export default users;
