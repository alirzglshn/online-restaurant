import { USER_LOGIN_SUCCESS, USER_LOGOUT } from '../constants/AuthConstants';

const initialState = {
  userInfo: JSON.parse(localStorage.getItem('userInfo')) || null,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        userInfo: action.payload,
      };
    case USER_LOGOUT:
      return {
        userInfo: null,
      };
    default:
      return state;
  }
};