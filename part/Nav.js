import React from 'react'
import Link from 'next/link'

const Nav = () => {
    return (
        <div class="bg-gray d-none d-lg-block sticky-nav">
            <div class="container position-relative">
                <div class="row">
                    <div class="col-md-12 align-self-center">
                        <div class="main-menu manu-color-white">
                            <ul>
                                <li>
                                    <Link href='/'>
                                         <a href="#">Home</a>
                                    </Link>
                                 </li>   
                                <li><a href="about.html">Products</a></li>
                                <li><a href="about.html">About us</a></li>
                                <li><a href="about.html">Faqs</a></li>
                                <li><a href="about.html">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Nav