import Head from 'next/head'
import Wrapper from '../part/Wrapper'
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCart } from '../store/actions/cartActions';
import Alert from '../components/widget/Alert'
import FavRow from '../components/widget/FavRow';
import { calcTotalCartPrice } from '../utils/cart';
import Link from 'next/link';
import { getFav, getProducts } from '../store/actions/productActions';

const Favourite = () => {
    const { cartMsg } = useSelector(state => state.cart)
    const { fav, products } = useSelector(state => state.products)
    const dispatch = useDispatch();
    useEffect(() => {
        if (!products) {
            dispatch(getProducts())
        }
        if (!fav) {
            dispatch(getFav())
        }
    }, [])

    const findProduct = (products, f) => {
        return products.find(prod => prod.productId == f.productId)
    }
 
    return (
    <>
            {cartMsg ? <Alert key={new Date()} payload={cartMsg} /> : null}

            <div class="cart-main-area pt-100px pb-100px">
                <div class="container">
                    <h3 class="cart-page-title">Your Favorite items</h3>
                    <div class="row">
                        <div class="col-lg-12 col-md-12 col-sm-12 col-12">
                            <form action="#">
                                <div class="table-content table-responsive cart-table-content">
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>Image</th>
                                                <th>Product Name</th>
                                                <th>Unit Price</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                fav ? 
                                                 fav.map( productId => (
                                                    products && <FavRow product={ findProduct(products, productId)}/>
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
                            
                        </div>
                    </div>
                </div>
            </div>
    </>
  )
}

export default Wrapper(Favourite)