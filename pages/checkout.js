import Head from 'next/head'
import Wrapper from '../part/Wrapper'
import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCart } from '../store/actions/cartActions';
import Alert from '../components/widget/Alert'
import CartRow from '../components/widget/CartRow';
import { calcTotalCartPrice } from '../utils/cart';
import Link from 'next/link';
import { getUser } from '../store/actions/authActions';
import Router from 'next/router';
import { useForm } from "react-hook-form";
import { makeStyles } from '@material-ui/core';
import { submitCheckout } from '../store/actions/productActions';


const useStyles = makeStyles((theme) => ({
    error: {
        color: 'red',
        fontSize: 10
    },
}));


const Checkout = () => {
    const classes = useStyles();
    const { cart, cartMsg } = useSelector(state => state.cart)
    const { user } = useSelector(state => state.auth)
    const dispatch = useDispatch();
    let checkSum = useRef(false)

    const [firstName, setFirstName] = useState(null)
    const [lastName, setLastName] = useState(null)
    const [phone, setPhone] = useState(null)
    const [addressLine1, setAddressLine1] = useState(null)
    const [orderNote, setOrderNote] = useState(null)
    const [city, setCity] = useState(null)

    const { register, handleSubmit, watch, errors } = useForm()
    
    const onCheckout = () => {
        const shippingAddress ={
            contactName: firstName + lastName,
            phone,
            addressLine1,
            city
        }
        const cartItems = cart.map( c => ({
            productId: c.productId,
            quantity : c.quantity
        }))

        const payload = {
            shippingAddress,
            cartItems,
            orderNote
        }
        dispatch(submitCheckout(payload))
       
    }

    useEffect(() => {
        
        if (!cart) {
            dispatch(fetchCart())
        }
        const fetchUser = async () => {
            console.log("itsnfkslslkdlksmdsdsldslkdmlds")
            await dispatch(getUser())
            checkSum.current = true
            console.log(checkSum)
            console.log(user)
        }
        if (!user) {
            fetchUser()
        }
        
        if (checkSum.current && !user) {
            Router.push('/login')
        }
    }, [user])


    return (
        <>
            {cartMsg ? <Alert key={new Date()} payload={cartMsg} /> : null}


            <div class="checkout-area pt-100px pb-100px">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-7">
                            <div class="billing-info-wrap">
                                <h3>Billing Details</h3>
                                <div class="row">
                                    <div class="col-lg-6 col-md-6">
                                        <div class="billing-info mb-4">
                                            <label>First Name</label>
                                            {errors.firstName && (
                                                <span className={classes.errors}>
                                                    {errors.firstName.message
                                                        ? errors.firstName.message
                                                        : 'This field is required'}
                                                </span>
                                            )}
                                            <input name="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="First Name " type="text" ref={register({ required: true })} />

                                        </div>
                                    </div>
                                    <div class="col-lg-6 col-md-6">
                                        <div class="billing-info mb-4">
                                            <label>Last Name</label>
                                            {errors.lastName && (
                                                <span className={classes.errors}>
                                                    {errors.lastName.message
                                                        ? errors.lastName.message
                                                        : 'This field is required'}
                                                </span>
                                            )}
                                            <input name="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="Last Name" type="text" ref={register({ required: true })} />

                                        </div>
                                    </div>


                                    <div class="col-lg-12">
                                        <div class="billing-info mb-4">
                                            <label>Address</label>
                                            {errors.addressLine1 && (
                                                <span className={classes.errors}>
                                                    {errors.addressLine1.message
                                                        ? errors.addressLine1.message
                                                        : 'This field is required'}
                                                </span>
                                            )}
                                            <input name="addressLine1" value={addressLine1} onChange={(e) => setAddressLine1(e.target.value)} placeholder="addressLine1" type="text" ref={register({ required: true })} />
                                       
                                        </div>
                                    </div>
                                    <div class="col-lg-12">
                                        <div class="billing-info mb-4">
                                            <label>Town / City</label>
                                            {errors.city && (
                                                <span className={classes.errors}>
                                                    {errors.city.message
                                                        ? errors.city.message
                                                        : 'This field is required'}
                                                </span>
                                            )}
                                            <input name="city" value={city} onChange={(e) => setCity(e.target.value)} placeholder="City" type="text" ref={register({ required: true })} />
                                       
                                        </div>
                                    </div>

                                    <div class="col-lg-6 col-md-6">
                                        <div class="billing-info mb-4">
                                            <label>Phone</label>
                                            {errors.phone && (
                                            <span className={classes.errors}>
                                                {errors.phone.message
                                                ? errors.phone.message
                                                : 'This field is required'}
                                            </span>
                                            )}
                                            <input name="phone" value={phone} onChange={(e)=>setPhone(e.target.value)} placeholder="Phone Number" type="tel" ref={register({ required: true })} />
                                            
                                        </div>
                                    </div>

                                </div>
                                
                                <div class="additional-info-wrap">
                                    <div class="additional-info">
                                        <label>Order notes</label>
                                        <textarea value={orderNote} onChange={(e)=> setOrderNote(e.target.value)} placeholder="Notes about your order, e.g. special notes for delivery. " name="message"></textarea>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div class="col-lg-5 mt-md-30px mt-lm-30px ">
                            <div class="your-order-area">
                                <h3>Your order</h3>
                                <div class="your-order-wrap gray-bg-4">
                                    <div class="your-order-product-info">
                                        <div class="your-order-top">
                                            <ul>
                                                <li>Product</li>
                                                <li>Total</li>
                                            </ul>
                                        </div>
                                        <div class="your-order-middle">
                                            <ul>
                                                {
                                                    cart &&
                                                    cart.map(p => (
                                                        <li><span class="order-middle-left">{p.productName} x {p.quantity}</span> <span class="order-price">{p.totalPrice} </span></li>
                                                    ))
                                                }
                                            </ul>
                                        </div>
                                        <div class="your-order-bottom">
                                            <ul>
                                                <li class="your-order-shipping">Shipping</li>
                                                <li>Free shipping</li>
                                            </ul>
                                        </div>
                                        <div class="your-order-total">
                                            <ul>
                                                <li class="order-total">Total</li>
                                                <li>{cart && calcTotalCartPrice(cart)}</li>
                                            </ul>
                                        </div>
                                    </div>

                                </div>
                                <div class="Place-order mt-25">
                                    <a onClick={() => onCheckout()} type='button' class="btn-hover">Place Order</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Wrapper(Checkout)