import * as types from '../actions/actionTypes';

const initialState = {
  isLoading: false,
  cart: null,
  cartMsg: null,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SAVE_CART:
        return {
            ...state,
            cart: action.payload,
          };
    case types.UPDATE_CART_MSG:
      return {
          ...state,
          cartMsg: action.payload,
        };

    case types.CLEAR_CART:
      return {
          ...state,
          cart: null,
        };
    case types.TOGGLE_ISLOADING:
        return {
            ...state,
            isLoading: !state.isLoading
        }
    default:
      return state;
  }
};

export default cartReducer;
