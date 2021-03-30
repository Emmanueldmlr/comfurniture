import Head from 'next/head'
import Wrapper from '../part/Wrapper'
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCart } from '../store/actions/cartActions';
import Alert from '../components/widget/Alert'
import CartRow from '../components/widget/CartRow';
import { calcTotalCartPrice } from '../utils/cart';
import Link from 'next/link';

const Cart = () => {
    const { cart, cartMsg } = useSelector(state => state.cart)
    const dispatch = useDispatch();
    useEffect(() => {
        if (!cart) {
            dispatch(fetchCart())
        }
    }, [])

 
    return (
    <>
            {cartMsg ? <Alert key={new Date()} payload={cartMsg} /> : null}

            <div class="cart-main-area pt-100px pb-100px">
                <div class="container">
                    <h3 class="cart-page-title">Your cart items</h3>
                    <div class="row">
                        <div class="col-lg-12 col-md-12 col-sm-12 col-12">
                            <form action="#">
                                <div class="table-content table-responsive cart-table-content">
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>Image</th>
                                                <th>Product Name</th>
                                                <th>Until Price</th>
                                                <th>Qty</th>
                                                <th>Subtotal</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                cart ? 
                                                 cart.map( productInCart => (
                                                    <CartRow productInCart={productInCart}/>
                                                 ))
                                                :
                                                <p>No Product in Cart</p>
                                            }
                                        </tbody>
                                    </table>
                                </div>
                                <div class="row">
                                    <div class="col-lg-12">
                                        <div class="cart-shiping-update-wrapper">
                                            <div class="cart-shiping-update">
                                                <Link href='/'>
                                                     <a href="#">Continue Shopping</a>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                            <div class="row">

                                <div class="col-lg-4 col-md-12 mt-md-30px">
                                    <div class="grand-totall">
                                        <div class="title-wrap">
                                            <h4 class="cart-bottom-title section-bg-gary-cart">Cart Total</h4>
                                        </div>
                                        <h5>Total products <span>{calcTotalCartPrice(cart)}</span></h5>
                                    
                                        <h4 class="grand-totall-title">Grand Total <span>{calcTotalCartPrice(cart)}</span></h4>
                                        <a href="#">Proceed to Checkout</a>
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

export default Wrapper(Cart)