import * as actionTypes from './actionTypes';
import {  getAccessToken, saveAccessToken, saveRefreshToken } from '../../utils/utilities';
import Router from 'next/router';
import { FetchUser, LoginUser, RegisterUser } from '../../services/authService';
import jwt_decode from "jwt-decode";

export const registration = (payload) => {
  return async (dispatch) => {
    await dispatch(toggleIsLoading());
    RegisterUser(payload)
      .then(async (result) => {
        console.log(result)
        const {data} = result
        await saveAccessToken(data.data.authToken)
        const user = {
          email: data.data.email,
          firstName: data.data.firstName,
          lastName: data.data.lastName,
          phoneNumber: data.data.phoneNumber,
          userId: data.data.userId
        }
        await dispatch(updateUserInfo(user))
        await dispatch(toggleIsLoading());
        Router.push('/')
      })
      .catch((err) => {
        dispatch(updateAuthMsg({msg: err.response.data.message,  type:'ERROR'}))
        setTimeout(()=>{
          dispatch(updateAuthMsg(null))
        }, 4000)
        dispatch(toggleIsLoading());
      });
  };
};

export const login = (payload) => {
  return async (dispatch) => {
    await dispatch(toggleIsLoading());
    LoginUser(payload)
      .then(async (result) => {
        console.log(result)
        const {data} = result
        const user = jwt_decode(data.data)
        await saveAccessToken(data.data)
        await dispatch(updateUserInfo(user))
        await dispatch(toggleIsLoading());
        Router.push('/')

      })
      .catch((err) => {
        dispatch(updateAuthMsg({msg: err.response.data.message,  type:'ERROR'}))
        setTimeout(()=>{
          dispatch(updateAuthMsg(null))
        }, 4000)
        dispatch(toggleIsLoading());
      });
  };
};

export const getUser = () => {
  return async (dispatch) => {
    //await dispatch(toggleIsLoading());
    const token = getAccessToken()
    if(token){
        const decodedInfo = jwt_decode(token)
        console.log(decodedInfo)
        FetchUser(decodedInfo.UserId)
          .then(async (result) => {
            const {data} = result
            const user = {
              email: data.data.email,
              firstName: data.data.firstName,
              lastName: data.data.lastName,
              phoneNumber: data.data.phoneNumber,
              userId: data.data.userId
            }
            await dispatch(updateUserInfo(user))
          })
          .catch((err) => {  
            console.log(err.status)
            if(err.response.status){
              dispatch(logout())
            }
            //dispatch(toggleIsLoading());
          });
    }
  };
};

export const logout = () => {
  return async (dispatch) => {
    await localStorage.removeItem(process.env.tokenName);
    dispatch(clearUserDetails())
    Router.push('/');
  };
};



export const toggleIsLoading = () => {
  return {
    type: actionTypes.TOGGLE_ISLOADING,
  };
};

export const updateAuthMsg = (msg) => {
  return {
    type: actionTypes.UPDATE_AUTH_MSG,
    payload: msg
  };
};

export const updateUserInfo = (user) => {
  return {
    type: actionTypes.UPDATE_USER_INFO,
    payload: user
  };
};

export const clearUserDetails = () => {
  return {
    type: actionTypes.CLEAR_USER_DETAILS,
  };
};

