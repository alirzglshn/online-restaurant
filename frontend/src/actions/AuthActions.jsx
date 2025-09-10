import axios from 'axios';
import { USER_LOGIN_SUCCESS, USER_LOGOUT } from '../constants/AuthConstants.jsx';
import { CART_ADD_ITEM, CART_RESET } from '../constants/CartConstants.jsx';

export const login = (username, password) => async (dispatch) => {
  try {
    const { data } = await axios.post(
      'http://127.0.0.1:8000/users/login/',
      { username, password },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data,
    });

    localStorage.setItem('userInfo', JSON.stringify(data));

    // Restore cart items for the user
    const cartKey = `cartItems_${data.id}`;
    const cartItems = JSON.parse(localStorage.getItem(cartKey)) || [];
    cartItems.forEach((item) => {
      dispatch({
        type: CART_ADD_ITEM,
        payload: item,
      });
    });

    window.dispatchEvent(new Event('userLogin'));
  } catch (error) {
    throw new Error(error.response?.data?.detail || 'Invalid credentials');
  }
};

export const logout = () => (dispatch, getState) => {
  dispatch({ type: USER_LOGOUT });
  dispatch({ type: CART_RESET });

  // Only remove userInfo, keep cartItems_${userInfo.id} for restoration
  localStorage.removeItem('userInfo');
  localStorage.removeItem('cartItems_guest'); // Clear guest cart

  window.dispatchEvent(new Event('userLogout'));
};