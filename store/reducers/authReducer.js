import * as types from '../actions/actionTypes';

const initialState = {
  isLoading: false,
  user: null,
  msg: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default authReducer;
