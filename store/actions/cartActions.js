import * as actionTypes from './actionTypes';
import { getCartItem, saveAccessToken, saveCartItem, saveRefreshToken } from '../../utils/utilities';
import Router from 'next/router';

export const fetchCart = () => {
  return async (dispatch) => {
    await dispatch(toggleIsLoading());
    let cart = await JSON.parse(getCartItem())
    dispatch(saveCartItemToStore(cart))
    await dispatch(toggleIsLoading());
  };
};

export const addProductToCart = (product, qty) => {
  return async (dispatch) => {
    await dispatch(toggleIsLoading());
    let cart = await JSON.parse(getCartItem())
    if(!cart){
      cart = [{
        productId: product.productId,
        productDescription: product.productDescription,
        productName : product.productName,
        quantity: qty,
        productPrice: product.productPrice,
        totalPrice: product.productPrice * qty
      }]
    }
    else{
      const newItem = {
        productId: product.productId,
        productDescription: product.productDescription,
        productName : product.productName,
        quantity: qty,
        productPrice: product.productPrice,
        totalPrice: product.productPrice * qty
      }
      cart.push(newItem)
    }
    dispatch(saveCartItemToStore(cart))
    await saveCartItem(JSON.stringify(cart))
    dispatch(updateCartMsg({msg: 'Product Successfully Added to Cart', type:'SUCCESS'}))
    setTimeout(()=>{
      dispatch(updateCartMsg(null))
    }, 4000)
    await dispatch(toggleIsLoading());
  };
};

export const deleteProductFromCart = (productId) => {
  return async (dispatch) => {
    await dispatch(toggleIsLoading());
    let cart = await JSON.parse(getCartItem())
    const updatedCart = cart.filter(product => product.productId != productId)
    dispatch(saveCartItemToStore(updatedCart))
    await saveCartItem(JSON.stringify(updatedCart))
    dispatch(updateCartMsg({msg: 'Product Successfully Removed from Cart', type:'SUCCESS'}))
    setTimeout(()=>{
      dispatch(updateCartMsg(null))
    }, 4000)
    await dispatch(toggleIsLoading());
  };
};

export const removeProductQuantityFromCart = (productId, qty) => {
  return async (dispatch) => {
    await dispatch(toggleIsLoading());
    let cart = await JSON.parse(getCartItem())
    const updatedCart = cart.map(product => {
      if(product.productId == productId){
        product.quantity = product.quantity - qty
        product.totalPrice = product.quantity * product.productPrice
      }
    })
    dispatch(saveCartItemToStore(updatedCart))
    await saveCartItem(JSON.stringify(updatedCart))
    await dispatch(toggleIsLoading());
  };
};


export const saveCartItemToStore = (cart) => {
  return {
    type: actionTypes.SAVE_CART,
    payload: cart
  };
};

export const toggleIsLoading = () => {
  return {
    type: actionTypes.TOGGLE_ISLOADING,
  };
};

export const updateCartMsg = (msg) => {
  return {
    type: actionTypes.UPDATE_CART_MSG,
    payload: msg
  };
};

