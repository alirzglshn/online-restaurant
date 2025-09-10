// import axios from 'axios';
// import { CART_ADD_ITEM, CART_REMOVE_ITEM } from '../constants/CartConstants';

// export const addToCart = (id, qty) => async (dispatch, getState) => {
//   const { data } = await axios.get(`http://127.0.0.1:8000//product/${id}`);

//   dispatch({
//     type: CART_ADD_ITEM,
//     payload: {
//       product: data._id,
//       productname: data.productname,
//       image: data.image,
//       price: data.price,
//       countInStock: data.stockcount,
//       qty
//     }
//   });

//   localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
// }

// export const removeFromCart = (id) => (dispatch, getState) => {
//   dispatch({
//     type: CART_REMOVE_ITEM,
//     payload: id,
//   });

//   localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
// }


import axios from 'axios';
import { CART_ADD_ITEM, CART_REMOVE_ITEM, CART_RESET } from '../constants/CartConstants.jsx';

export const addToCart = (id, qty) => async (dispatch, getState) => {
  const { data } = await axios.get(`http://127.0.0.1:8000/product/${id}`);

  const payload = {
    product: data._id,
    productname: data.productname,
    image: data.image,
    price: data.price,
    countInStock: data.stockcount,
    qty,
  };

  dispatch({
    type: CART_ADD_ITEM,
    payload,
  });

  // Save cart items to user-specific localStorage key
  const userInfo = getState().auth.userInfo;
  const cartKey = userInfo ? `cartItems_${userInfo.id}` : 'cartItems_guest';
  localStorage.setItem(cartKey, JSON.stringify(getState().cart.cartItems));
};

export const removeFromCart = (id) => (dispatch, getState) => {
  dispatch({
    type: CART_REMOVE_ITEM,
    payload: id,
  });

  // Update user-specific localStorage key
  const userInfo = getState().auth.userInfo;
  const cartKey = userInfo ? `cartItems_${userInfo.id}` : 'cartItems_guest';
  localStorage.setItem(cartKey, JSON.stringify(getState().cart.cartItems));
};

export const resetCart = () => (dispatch, getState) => {
  dispatch({
    type: CART_RESET,
  });

  // Clear cart from localStorage for the current user or guest
  const userInfo = getState().auth.userInfo;
  const cartKey = userInfo ? `cartItems_${userInfo.id}` : 'cartItems_guest';
  localStorage.removeItem(cartKey);
};