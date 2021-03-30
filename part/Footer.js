import React from 'react'
import Link from 'next/link'

const Footer = () => {
    return (

        <div class="footer-area">
            <div class="footer-container">
                <div class="footer-top">
                    <div class="container">
                        <div class="row">
                           

                            <div class="col-md-6 col-sm-6 col-lg-3 mb-md-30px mb-lm-30px" data-aos="fade-up" data-aos-delay="400">
                                <div class="single-wedge">
                                    <h4 class="footer-herading">information</h4>
                                    <div class="footer-links">
                                        <div class="footer-row">
                                            <ul class="align-items-center">
                                                <li class="li"><a class="single-link" href="#">About us</a></li>
                                                <li class="li"><a class="single-link" href="#">Delivery Information</a></li>
                                                <li class="li"><a class="single-link" href="#">Privacy & Policy</a></li>
                                                <li class="li"><a class="single-link" href="#">Terms & Condition</a></li>
                                                <li class="li"><a class="single-link" href="#">Manufactures</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-6 col-lg-2 col-sm-6 mb-lm-30px" data-aos="fade-up" data-aos-delay="600">
                                <div class="single-wedge">
                                    <h4 class="footer-herading">my account</h4>
                                    <div class="footer-links">
                                        <div class="footer-row">
                                            <ul class="align-items-center">
                                                
                                                <li class="li">
                                                    <Link href='/cart'>
                                                        <a class="single-link" href="#">My Cart</a>
                                                    </Link>
                                                </li>
                                                <li class="li"><a class="single-link" href="#">Wishlist</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="800">
                                <div class="single-wedge">
                                    <h4 class="footer-herading">newsletter</h4>
                                    <div class="footer-links">
                                        <div id="mc_embed_signup" class="subscribe-form">
                                            <form id="mc-embedded-subscribe-form" class="validate" novalidate="" target="_blank" name="mc-embedded-subscribe-form" method="post" action="http://devitems.us11.list-manage.com/subscribe/post?u=6bbb9b6f5827bd842d9640c82&amp;id=05d85f18ef">
                                                <div id="mc_embed_signup_scroll" class="mc-form">
                                                    <input class="email" type="email" required="" placeholder="Your Mail*" name="EMAIL" value="" />
                                                    <div class="mc-news" aria-hidden="true">
                                                        <input type="text" value="" tabindex="-1" name="b_6bbb9b6f5827bd842d9640c82_05d85f18ef" />
                                                    </div>
                                                    <div class="clear">
                                                        <button id="mc-embedded-subscribe" class="button btn-primary" type="submit" name="subscribe" value=""><i
                                                            class="icon-cursor"></i> Send Mail</button>
                                                    </div>
                                                </div>
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


    )
}

export default Footer
