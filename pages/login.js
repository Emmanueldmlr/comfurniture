import Head from 'next/head'
import Wrapper from '../part/Wrapper'
import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core';
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from 'react-redux';
import { login, registration} from '../store/actions/authActions'
import Alert from '../components/widget/Alert'
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
    error: {
      color: 'red',
      fontSize: 10
    },
  }));
const Login = () => {
    const classes = useStyles();
    const dispatch = useDispatch()
    const {authMsg, isLoading}  = useSelector(state => state.auth)
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const [firstName, setFirstName] = useState(null)
    const [lastName, setLastName] = useState(null)
    const [phoneNumber, setPhoneNumber] = useState(null)
    const [confirmPassword, setConfirmPassword] = useState(null)

    const [userName, setUserName] = useState(null)
    const [lPassword, setLPassword] = useState(null)
    const { register, handleSubmit, watch, errors } = useForm({
        mode: "onBlur"
    });
    const { handleSubmit: handleSubmit2, register: register2, errors: errors2 } = useForm({
        mode: "onBlur"
    });
    
    const onRegisterSubmit = (data) => {
        console.log(data)
        dispatch(registration(data))
    }

    const onLoginSubmit = (data) => {
        console.log(data)
        dispatch(login(data))
    }

  return (
    <>
    <div class="login-register-area pt-100px pb-100px">
        <div class="container">
            <div class="row">
            {authMsg ? <Alert key={new Date()} payload={authMsg} /> : null}
                <div class="col-lg-7 col-md-12 ml-auto mr-auto">
                    <div class="login-register-wrapper">
                        <div class="login-register-tab-list nav">
                            <a class="active" data-bs-toggle="tab" href="#lg1">
                                <h4>login</h4>
                            </a>
                            <a data-bs-toggle="tab" href="#lg2">
                                <h4>register</h4>
                            </a>
                        </div>
                        <div class="tab-content">
                            <div id="lg1" class="tab-pane active">
                                <div class="login-form-container">
                                    <div class="login-register-form">
                                        <form onSubmit={handleSubmit2(onLoginSubmit)}>
                                            {errors2.userName && (
                                            <span className={classes.error}>
                                                {errors2.userName.message
                                                ? errors2.userName.message
                                                : 'This field is required'}
                                            </span>
                                            )}
                                            <input name="userName" value={userName} onChange={(e)=>setUserName(e.target.value)} placeholder="Email" type="email" ref={register2({
                                                required: true,
                                                pattern: {
                                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                                message: 'Enter a valid e-mail address',
                                                },
                                            })} />
                                            {errors2.password && (
                                            <span className={classes.error}>
                                                {errors2.password.message
                                                ? errors2.password.message
                                                : 'This field is required'}
                                            </span>
                                            )}
                                            <input type="password" value={lPassword} onChange={(e)=>setLPassword(e.target.value)} name="password" placeholder="Password" ref={register2({
                                            required: "You must specify a password",
                                            minLength: {
                                                value: 8,
                                                message: "Password must have at least 8 characters"
                                            }
                                            })} />
                                            <div class="button-box">
                                                <div class="login-toggle-btn">
                                                    <input type="checkbox" />
                                                    <a class="flote-none" href="javascript:void(0)">Remember me</a>
                                                    <a href="#">Forgot Password?</a>
                                                </div>
                                                {
                                                    !isLoading ? 
                                                    <button  type="submit"><span>Login</span></button>
                                                    :
                                                    <CircularProgress />
                                                }
                                               
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div id="lg2" class="tab-pane">
                                <div class="login-form-container">
                                    <div class="login-register-form">
                                        <form onSubmit={handleSubmit(onRegisterSubmit)} >
                                            {errors.firstName && (
                                            <span className={classes.error}>
                                                {errors.firstName.message
                                                ? errors.firstName.message
                                                : 'This field is required'}
                                            </span>
                                            )}
                                            <input name="firstName" value={firstName} onChange={(e)=>setFirstName(e.target.value)} placeholder="First Name " type="text" ref={register({ required: true })} />
                                            
                                            {errors.lastName && (
                                            <span className={classes.error}>
                                                {errors.lastName.message
                                                ? errors.lastName.message
                                                : 'This field is required'}
                                            </span>
                                            )}
                                            <input name="lastName" value={lastName} onChange={(e)=>setLastName(e.target.value)} placeholder="Last Name" type="text" ref={register({ required: true })} />
                                            
                                            {errors.email && (
                                            <span className={classes.error}>
                                                {errors.email.message
                                                ? errors.email.message
                                                : 'This field is required'}
                                            </span>
                                            )}
                                            <input name="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Email" type="email" ref={register({
                                                required: true,
                                                pattern: {
                                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                                message: 'Enter a valid e-mail address',
                                                },
                                            })} />
                                            

                                            {errors.phoneNumber && (
                                            <span className={classes.error}>
                                                {errors.phoneNumber.message
                                                ? errors.phoneNumber.message
                                                : 'This field is required'}
                                            </span>
                                            )}
                                            <input name="phoneNumber" value={phoneNumber} onChange={(e)=>setPhoneNumber(e.target.value)} placeholder="Phone Number" type="tel" ref={register({ required: true })} />
                                            
                                            {errors.password && (
                                            <span className={classes.error}>
                                                {errors.password.message
                                                ? errors.password.message
                                                : 'This field is required'}
                                            </span>
                                            )}
                                            <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} name="password" placeholder="Password" ref={register({
                                            required: "You must specify a password",
                                            minLength: {
                                                value: 8,
                                                message: "Password must have at least 8 characters"
                                            }
                                            })} />
                                            

                                            {errors.confirmPassword && (
                                            <span className={classes.error}>
                                                {errors.confirmPassword.message
                                                ? errors.confirmPassword.message
                                                : 'This field is required'}
                                            </span>
                                            )}
                                            <input type="password" value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)} name="confirmPassword" placeholder="Password Confirmation" ref={register({
                                            validate: value =>
                                                value === password || "The passwords do not match"
                                            })} />
                                            

                                            {
                                                    !isLoading ? 
                                                    <button  type="submit"><span>Register</span></button>
                                                    :
                                                    <CircularProgress />
                                                }
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Wrapper(Login)