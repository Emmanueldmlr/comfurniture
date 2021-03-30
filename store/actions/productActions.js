import * as actionTypes from './actionTypes';
import { saveAccessToken,getAccessToken ,saveRefreshToken } from '../../utils/utilities';
import Router from 'next/router';
import { AddFav, FetchProducts, DeleteFav, FetchFav, CheckCartOut } from '../../services/productService';
import { logout } from './authActions';
import { clearCart, updateCartMsg } from './cartActions';


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

export const submitCheckout = (payload) => {
  return async (dispatch) => {
    await dispatch(toggleIsLoading());
    CheckCartOut(payload)
      .then(async (result) => {
        console.log(result)
        dispatch(updateCartMsg({msg: 'Order Successfully Created', type:'SUCCESS'}))
        await localStorage.removeItem(process.env.cartId);
        dispatch(clearCart())
        Router.push('/')
        // const {data} = result
        // dispatch(saveProducts(data.data))
        // dispatch(toggleIsLoading());
      })
      .catch((err) => {
         console.log(err)
        if(err.status == 401){
          dispatch(logout())
        }
        dispatch(updateCartMsg( err.response ? err.response.data.message: "Action could not be  performed"))
        dispatch(toggleIsLoading());
      });
  };
};

export const getFav = () => {
  return async (dispatch) => {
    //await dispatch(toggleIsLoading());
    const token = getAccessToken()
    if(token){
      FetchFav()
      .then(async (result) => {
        console.log(result)
        const {data} = result
        dispatch(updateFav(data.data))
        //dispatch(toggleIsLoading());
      })
      .catch((err) => {
        console.log(err)
        if(err.response.status){
          dispatch(logout())
        }
        //dispatch(updateMsg( err.response ? err.response.data.message: "Action could not be  performed"))
        //dispatch(toggleIsLoading());
      });
    }
    
  };
};

export const updateFavourite = (payload, fav) => {
  return async (dispatch) => {
    const {productId, type} = payload
    if(type == 'add'){
      AddFav(productId)
      .then(async (result) => {
        console.log(result)
        if(fav)fav.push({productId})
        else fav = [{productId}]
        dispatch(updateFav(fav))
        dispatch(updateCartMsg({msg: 'Product Successfully Added to Favourites', type:'SUCCESS'}))
        setTimeout(()=>{
          dispatch(updateCartMsg(null))
        }, 4000)
      })
      .catch((err) => {
        //console.log(err)
        if(err.response.status){
          dispatch(logout())
        }
      });
    }
    else{
      DeleteFav(productId, fav)
      .then(async (result) => {
        const updatedFav = fav.filter(f => f.productId != productId)
        dispatch(updateFav(updatedFav))
        dispatch(updateCartMsg({msg: 'Product Successfully Removed from Favourites', type:'SUCCESS'}))
        setTimeout(()=>{
          dispatch(updateCartMsg(null))
        }, 4000)
      })
      .catch((err) => {
        console.log(err)
        if(err.response.status){
          dispatch(logout())
        }
      });
    }
  };
}

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

export const updateFav = (fav) => {
  return {
    type: actionTypes.UPDATE_FAV,
    payload: fav
  };
};



