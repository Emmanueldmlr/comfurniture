import * as types from '../actions/actionTypes';

const initialState = {
  isLoading: false,
  products: null,
  msg: null,
  fav:null
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SAVE_PRODUCTS:
        return {
            ...state,
            products: action.payload,
          };
    case types.TOGGLE_ISLOADING:
        return {
            ...state,
            isLoading: !state.isLoading
        }
    
    case types.UPDATE_MSG:
        return {
            ...state,
            msg: action.payload
        }

    case types.UPDATE_FAV:
        return {
            ...state,
            fav: action.payload
        }

   
    
    default:
      return state;
  }
};

export default productReducer;
