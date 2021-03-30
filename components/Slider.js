import Link from 'next/link'
import React from 'react'

const Slider = () => {
    return (

        <div class="section ">
        <div class="hero-slider swiper-container slider-nav-style-1 slider-dot-style-1 dot-color-white">
            <div class="swiper-wrapper">
                <div class="hero-slide-item slider-height-2 swiper-slide d-flex">
                    <div class="hero-bg-image">
                        <img src="static/assets/images/slider-image/slider-2-1.jpg" alt=""/>
                    </div>
                    <div class="container align-self-center" style={{zIndex: 9999}}>
                        <div class="row justify-content-center">
                            <div class="col-md-8 offset-2 align-self-center m-auto">
                                <div class="hero-slide-content hero-slide-content-2  text-center">
                                    <span class="category">New Products</span>
                                    <h4 class="title-1">Exotic Minimal Furniture</h4>
                                    <p class="w-100">Choose from a range of well-crafted, premium quality furnitures, living room lightings, paintings and wall shelves</p>
                                    <Link href='/products/view-products'>
                                        <a href="#" class="btn btn-lg btn-primary btn-hover-dark mt-5">Shop Now</a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div class="hero-slide-item slider-height-2 swiper-slide d-flex text-center">
                    <div class="hero-bg-image">
                        <img src="static/assets/images/slider-image/slider-2-2.jpg" alt=""/>
                    </div>
                    <div class="container align-self-center" style={{zIndex: 9999}}>
                        <div class="row justify-content-center">
                            <div class="col-md-8 offset-2 align-self-center m-auto">
                                <div class="hero-slide-content hero-slide-content-2 slider-animated-1">
                                    <span class="category">New Products</span>
                                    <h2 class="title-1">Flexible Sofa Set</h2>
                                    <p class="w-100">Torem ipsum dolor sit amet, consectetur adipisicing elitsed do eiusmo tempor incididunt ut labore et dolore magna</p>
                                    <a href="#" class="btn btn-lg btn-primary btn-hover-dark mt-5">Shop Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
            <div class="swiper-pagination swiper-pagination-white"></div>
            {/* <div class="swiper-buttons">
                <div class="swiper-button-next"></div>
                <div class="swiper-button-prev"></div>
            </div> */}
        </div>
    </div>
    )
}

export default Slider
