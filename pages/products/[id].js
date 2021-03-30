import Head from 'next/head'
import Wrapper from '../../part/Wrapper'
import React, { useState, useEffect } from 'react';
import ProductCard from '../../components/ProductCard';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/router'

import Alert from '../../components/widget/Alert'
import { getFav, getProducts } from '../../store/actions/productActions';
import {fetchFirstNthItems} from '../../utils/utilities'
import Error from 'next/error'
import { addProductToCart } from '../../store/actions/cartActions';

const SingleProduct = () => {
    const router = useRouter()
    const { products, fav, isLoading } = useSelector(state => state.products)
    const { cart, cartMsg } = useSelector(state => state.cart)
    const dispatch = useDispatch();
    const [product, setProduct] = useState(null)
    const { id } = router.query
    const [qty, setQty] = useState(0)

    useEffect(() => {
        if (!products) {
            dispatch(getProducts())
        }
        if (products && products.length > 0 ) {
            console.log(findProduct(products))
            setProduct(findProduct(products))
        }
        if(!fav){
            dispatch(getFav())
        }
    
    }, [id, products])

    const findProduct = (products) => {
        return products.find(prod => prod.productId == id)
    }
    const findProductInCart = (productId)=>{
        const productInCart = cart && cart.find(prod => prod.productId == productId)
        return productInCart ? true : false
    }
    const findProductInFav = (productId)=>{
        const productInFav = fav && fav.find(prod => prod.productId == productId)
        return productInFav ? true : false
    }

    if(products && !product){
        return (
            <Error statusCode={404} />
        )
    }

    const handleQty = () => {
        dispatch(addProductToCart(product, qty))
    }
   

    return (
        <>
            {cartMsg ? <Alert key={new Date()} payload={cartMsg} /> : null}

            <div class="product-details-area pt-100px pb-100px">
                <div class="container">
                    <div class="row">
                        {
                            product &&
                            <>

                                <div class="col-lg-5 col-sm-12 col-xs-12 mb-lm-30px mb-md-30px mb-sm-30px">
                                    <div class="swiper-container zoom-top">
                                        <div class="swiper-wrapper">
                                            <div class="swiper-slide">
                                                <img class="img-responsive m-auto" src={"../static/assets/images/product-image/" + product.productPicture} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-7 col-sm-12 col-xs-12" data-aos="fade-up" data-aos-delay="200">
                                    <div class="product-details-content quickview-content">
                                        <h2>{product.productName}</h2>

                                        <div class="pricing-meta">
                                            <ul>
                                                <li class="old-price not-cut">₦{product.productPrice}</li>
                                            </ul>
                                        </div>
                                        <p class="quickview-para">{product.productDescription}</p>
                                        <div class="pro-details-quality">
                                            <div class="cart-plus-minus">
                                                <input onChange={(e) => setQty(e.target.value)} class="cart-plus-minus-box" type="text" name="qtybutton" value={qty} min="1" />
                                            </div>
                                            <div class="pro-details-cart">
                                                <button disabled={qty < 1 ? true : false} onClick={handleQty} class="add-cart btn btn-primary btn-hover-primary ml-4" href="#"> Add To
                                            Cart</button>
                                            </div>
                                        </div>
                                        <div class="pro-details-social-info">
                                            <span>Share</span>
                                            <div class="social-info">
                                                <ul class="d-flex">
                                                    <li>
                                                        <a href="#"><i class="ion-social-facebook"></i></a>
                                                    </li>
                                                    <li>
                                                        <a href="#"><i class="ion-social-twitter"></i></a>
                                                    </li>
                                                    <li>
                                                        <a href="#"><i class="ion-social-google"></i></a>
                                                    </li>
                                                    <li>
                                                        <a href="#"><i class="ion-social-instagram"></i></a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="pro-details-policy">
                                            <ul>
                                                <li><img src="../static/assets/images/icons/policy.png" alt="" /><span>Security Policy (Edit With
                                        Customer Reassurance Module)</span></li>
                                                <li><img src="../static/assets/images/icons/policy-2.png" alt="" /><span>Delivery Policy (Edit
                                        With Customer Reassurance Module)</span></li>
                                                <li><img src="../static/assets/images/icons/policy-3.png" alt="" /><span>Return Policy (Edit With
                                        Customer Reassurance Module)</span></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                            </>
                                                   
                        }
                    </div>
                </div>
            </div>

            {
                product &&

            <div class="description-review-area pb-100px" data-aos="fade-up" data-aos-delay="200">
            <div class="container">
                <div class="description-review-wrapper">
                    <div class="description-review-topbar nav">
                        <a data-bs-toggle="tab" href="#des-details1">Description</a>
                        <a class="active" data-bs-toggle="tab" href="#des-details2">Product Details</a>
                    </div>
                    <div class="tab-content description-review-bottom">
                        <div id="des-details2" class="tab-pane active">
                            <div class="product-anotherinfo-wrapper">
                                <ul>
                                    <li><span>Weight</span> 400 g</li>
                                    <li><span>Dimensions</span>10 x 10 x 15 cm</li>
                                    <li><span>Materials</span> 60% cotton, 40% polyester</li>
                                    <li><span>Other Info</span> American heirloom jean shorts pug seitan letterpress</li>
                                </ul>
                            </div>
                        </div>
                        <div id="des-details1" class="tab-pane">
                            <div class="product-description-wrapper">
                                <p>
                                    {
                                        product.productDescription
                                    }
                                </p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        }

      

            <div class="section pb-100px" data-aos="fade-up" data-aos-delay="200">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="section-title text-left mb-11">
                            <h2 class="title">Other Products You Should Explore</h2>
                        </div>
                    </div>
                </div>
                    
                        
                        <div class="col">
                            <div class="tab-content">
                                <div class="tab-pane fade show active" id="tab-product-new-arrivals">
                                    <div class="row">
                                        {
                                        products && 
                                    
                                        fetchFirstNthItems(products, 8).map(prod=> (
                                             <ProductCard productInFav={findProductInFav(prod.productId)} favourite={fav} productInCart={findProductInCart(prod.productId)} product={prod}/>
                                            ))
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

export default Wrapper(SingleProduct)