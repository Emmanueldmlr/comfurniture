import React from 'react'
import Link from 'next/link'
import { useSelector, useDispatch } from 'react-redux'
import { fetchCart } from '../store/actions/cartActions'
import { calcTotalCartPrice } from '../utils/cart'

const HeaderIcon = () => {
    const { cart } = useSelector(state => state.cart)
    const dispatch = useDispatch();
    useEffect(() => {
        if (!cart) {
            dispatch(fetchCart())
        }
    }, [])
    return (
        <>
            <div class="container position-relative">
                <div class="row align-self-center">
                    <div class="col-auto align-self-center">
                        <div class="header-logo">
                        <Link href='/'>
                            <a href="#"><h3 style={{fontWeight: 'bolder'}}><span style={{color: '#ff7004'}}>my</span>Furn</h3></a>
                        </Link>
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
                                    <li><a class="dropdown-item" href="my-account.html">My account</a></li>
                                  
                                </ul>
                            </div>
                            <a href="#offcanvas-cart" class="header-action-btn header-action-btn-cart offcanvas-toggle pr-0">
                                <i class="icon-handbag"></i>
                                {
                                    cart &&
                                    <>
                                        <span class="header-action-num">{cart && cart.length}</span>
                                        <span class="cart-amount">₦{cart && calcTotalCartPrice(cart)}</span>
                                    </>
                                }
                            </a>
                            <a href="#offcanvas-mobile-menu" class="header-action-btn header-action-btn-menu offcanvas-toggle d-lg-none">
                                <i class="icon-menu"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="header-bottom d-lg-none sticky-nav bg-white">
                <div class="container position-relative">
                    <div class="row align-self-center">
                        <div class="col-auto align-self-center">
                            <div class="header-logo">
                            <Link href='/'>
                                <a href="#"><h3 style={{fontWeight: 'bolder'}}><span style={{color: '#ff7004'}}>my</span>Furn</h3></a>
                            </Link>
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
                                        <li><a class="dropdown-item" href="my-account.html">My account</a></li>
                                        <li><a class="dropdown-item" href="checkout.html">Checkout</a></li>
                                        <li><a class="dropdown-item" href="login.html">Sign in</a></li>
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
                               
                                <a href="#offcanvas-mobile-menu" class="header-action-btn header-action-btn-menu offcanvas-toggle d-lg-none">
                                    <i class="icon-menu"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default HeaderIcon