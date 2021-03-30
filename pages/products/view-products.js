import Head from 'next/head'
import Wrapper from '../../part/Wrapper'
import React, { useState, useEffect } from 'react';
import ProductCard from '../../components/ProductCard';
import { useSelector, useDispatch } from 'react-redux';
import { getProducts } from '../../store/actions/productActions';
import CircularProgress from '@material-ui/core/CircularProgress';
import { fetchCart } from '../../store/actions/cartActions';
import Alert from '../../components/widget/Alert'
import Link from 'next/link';

const ViewProducts = () => {
    const { products, isLoading } = useSelector(state => state.products)
    const { cart, cartMsg } = useSelector(state => state.cart)
    const dispatch = useDispatch();
    useEffect(() => {
        if (!products) {
            dispatch(getProducts())
        }
        if (!cart) {
            dispatch(fetchCart())
        }
    }, [])

    const findProductInCart = (productId) => {
        const productInCart = cart && cart.find(prod => prod.productId == productId)
        return productInCart ? true : false
    }

    return (
        <>
            {cartMsg ? <Alert key={new Date()} payload={cartMsg} /> : null}
            <div class="breadcrumb-area">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <div class="row breadcrumb_box  align-items-center">
                                <div class="col-lg-6 col-md-6 col-sm-12 text-center text-md-left">
                                    <h2 class="breadcrumb-title">Products</h2>
                                </div>
                                <div class="col-lg-6  col-md-6 col-sm-12">
                                    <ul class="breadcrumb-list text-center text-md-right">
                                        <li class="breadcrumb-item">
                                            <Link href="/">
                                                 <a href="#">Home</a>
                                            </Link>
                                        </li>
                                        <li class="breadcrumb-item active">products</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div class="shop-category-area pb-100px pt-70px">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12  col-md-12">
                            <div class="shop-top-bar d-flex">
                                <p>There Are {products && products.length} Products.</p>

                            </div>

                            <div class="shop-bottom-area">

                                <div class="row">
                                    {
                                        isLoading ?
                                            <div class=" text-center">
                                                <CircularProgress />
                                            </div>
                                            :
                                            products ?
                                                products.map(product => (
                                                    <ProductCard productInCart={findProductInCart(product.productId)} product={product} />
                                                ))
                                                :
                                                <div class=" text-center">
                                                    <p>No Products Found</p>
                                                </div>
                                    }
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Wrapper(ViewProducts)