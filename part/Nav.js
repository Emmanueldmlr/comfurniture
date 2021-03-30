import React from 'react'
import Link from 'next/link'

const Nav = ({user}) => {
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
                                {
                                            !user &&
                                            <li>
                                                <Link href='/login'>
                                                    <a  href="">Login</a>
                                                </Link>
                                            </li>
                                        }
                                        {
                                            user &&
                                            <li>
                                                <a onClick={() => dispatch(logout())}  href="">Logout</a>
                                            </li>

                                        }
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