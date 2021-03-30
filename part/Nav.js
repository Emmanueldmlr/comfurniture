import React from 'react'
import Link from 'next/link'
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../store/actions/authActions'

const Nav = ({user}) => {
    const dispatch = useDispatch();

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
                                <li>
                                    <Link href='/products/view-products'>
                                         <a href="#">Products</a>
                                    </Link>
                                </li>
                                
                                {
                                    !user &&
                                    <li>
                                        <Link href='/login'>
                                            <a  href="">Login</a>
                                        </Link>
                                    </li>
                                }
                                <li>
                                    {
                                        user &&
                                        <Link href='/favourite'>
                                            <a href="#">Favourites</a>
                                        </Link>
                                    }
                                </li>
                                {
                                    user &&
                                    <li>
                                        <a onClick={() => dispatch(logout())}  href="">Logout</a>
                                    </li>

                                }

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Nav