// import {createStore,combineReducers,applyMiddleware} from 'redux';
// import thunk from 'redux-thunk';
// import {composeWithDevTools} from 'redux-devtools-extension';
// import { productDetailsReducers, productsListReducers } from './reducers/ProductReducers';
// import { cartReducer } from './reducers/CartReducers';

// const reducer = combineReducers({
//     productsList:productsListReducers,
//     productDetails:productDetailsReducers,
//     cart:cartReducer 
// })


// const cartItemsFromStorage = localStorage.getItem('cartItems')?
// JSON.parse(localStorage.getItem('cartItems')) : []


// const initialState={
//     cart:{cartItems:cartItemsFromStorage}
// }
// const middleware=[thunk]
// const store = createStore(reducer,initialState,composeWithDevTools(applyMiddleware(...middleware)))

// export default store; 

import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { productDetailsReducers, productsListReducers } from './reducers/ProductReducers';
import { cartReducer } from './reducers/CartReducers';
import { authReducer } from './reducers/authReducer.jsx';

const reducer = combineReducers({
  productsList: productsListReducers,
  productDetails: productDetailsReducers,
  cart: cartReducer,
  auth: authReducer,
});

const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null;

const cartItemsFromStorage = userInfoFromStorage
  ? localStorage.getItem(`cartItems_${userInfoFromStorage.id}`)
    ? JSON.parse(localStorage.getItem(`cartItems_${userInfoFromStorage.id}`))
    : []
  : localStorage.getItem('cartItems_guest')
    ? JSON.parse(localStorage.getItem('cartItems_guest'))
    : [];

const initialState = {
  cart: { cartItems: cartItemsFromStorage },
  auth: { userInfo: userInfoFromStorage },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;