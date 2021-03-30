import * as actionTypes from './actionTypes';
import { saveAccessToken, saveRefreshToken } from '../../utils/utilities';
import Router from 'next/router';
import { FetchProducts } from '../../services/productService';

export const getProducts = () => {
  return async (dispatch) => {
    await dispatch(toggleIsLoading());
    FetchProducts()
      .then(async (result) => {
        console.log(result)
        const {data} = result
        dispatch(saveProducts(data.data))
        dispatch(toggleIsLoading());
      })
      .catch((err) => {
        dispatch(updateMsg( err.response ? err.response.data.message: "Action could not be  performed"))
        dispatch(toggleIsLoading());
      });
  };
};

export const saveProducts = (products) => {
  return {
    type: actionTypes.SAVE_PRODUCTS,
    payload: products
  };
};

export const toggleIsLoading = () => {
  return {
    type: actionTypes.TOGGLE_ISLOADING,
  };
};

export const updateMsg = (msg) => {
  return {
    type: actionTypes.UPDATE_MSG,
    payload: msg
  };
};

