import React, { useEffect } from 'react'
import Nav from './Nav'
import Topper from './Topper'
import HeaderIcon from './HeaderIcon'
import Link from 'next/link'
import { useSelector, useDispatch } from 'react-redux'
import { fetchCart } from '../store/actions/cartActions'
import { calcTotalCartPrice } from '../utils/cart'
import { getUser, logout } from '../store/actions/authActions'


const Header = () => {
    const { cart } = useSelector(state => state.cart)
    const { user } = useSelector(state => state.auth)
    const dispatch = useDispatch();
    useEffect(() => {
        if (!cart) {
            dispatch(fetchCart())
        }
        if (!user) {
            dispatch(getUser())
        }
    }, [])
    return (

        <div class="header section">

            <div class="header-bottom d-none d-lg-block">
                <div class="container position-relative">
                    <Topper user={user} />
                </div>
            </div>

            <div class="header-bottom d-lg-none sticky-nav bg-white">
                <div class="container position-relative">
                    <div class="row align-self-center">
                        <div class="col-auto align-self-center">
                            <div class="header-logo">
                                <a href="index.html"><img src="../static/assets/images/logo/logo.png" alt="Site Logo" /></a>
                            </div>
                        </div>

                        <div class="col align-self-center">
                            <div class="header-actions">
                                <div class="header_account_list">
                                    <a href="javascript:void(0)" class="header-action-btn search-btn"><i
                                        class="icon-magnifier"></i></a>
                                    <div class="dropdown_search">
                                        <form class="action-form" action="#">
                                            <input class="form-control" placeholder="Enter your search key" type="text" />
                                            <button class="submit" type="submit"><i class="icon-magnifier"></i></button>
                                        </form>
                                    </div>
                                </div>
                                <div class="header-bottom-set dropdown">
                                    <button class="dropdown-toggle header-action-btn" data-bs-toggle="dropdown"><i
                                        class="icon-user"></i></button>
                                    <ul class="dropdown-menu dropdown-menu-right">
                                        {
                                            !user &&
                                            <li>
                                                <Link href='/login'>
                                                    <a class="dropdown-item" href="">Login</a>
                                                </Link>
                                            </li>
                                        }
                                        {
                                            user &&
                                            <li>
                                                <a onClick={() => dispatch(logout())} class="dropdown-item" href="">Logout</a>
                                            </li>

                                        }

                                    </ul>
                                </div>
                                <Link href="/cart">
                                    <a href="#" class="header-action-btn header-action-btn-cart  pr-0">
                                        <i class="icon-handbag"></i>
                                        {
                                            cart &&
                                            <>
                                                <span class="header-action-num">{cart && cart.length}</span>
                                                <span class="cart-amount">₦{cart && calcTotalCartPrice(cart)}</span>
                                            </>
                                        }
                                    </a>
                                </Link>
                                <a href="#offcanvas-mobile-menu" class="header-action-btn header-action-btn-menu  d-lg-none">
                                    <i class="icon-menu"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Nav user={user} />
        </div>

    )
}

export default Header