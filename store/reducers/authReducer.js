import * as types from '../actions/actionTypes';

const initialState = {
  isLoading: false,
  user: null,
  authMsg: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.TOGGLE_ISLOADING:
        return {
            ...state,
            isLoading: !state.isLoading
        }
    case types.UPDATE_USER_INFO:
      return {
          ...state,
          user: action.payload
      }
    case types.UPDATE_AUTH_MSG:
      return {
          ...state,
          authMsg: action.payload,
    };
    case types.CLEAR_USER_DETAILS:
      return {
          ...state,
          user: null,
    };
    default:
      return state;
  }
};

export default authReducer;
