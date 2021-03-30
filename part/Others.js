import React, {useEffect} from 'react'
import Link from 'next/link'
import { useSelector, useDispatch } from 'react-redux'
import { getUser} from '../store/actions/authActions'

export default function Others({active, handleUpdate}) {
    const { cart } = useSelector(state => state.cart)
    const { user } = useSelector(state => state.auth)
    const dispatch = useDispatch();
    useEffect(() => {
        if (!user) {
            dispatch(getUser())
        }
    }, [])
    return (
        <>
        {
            active && <div id="offcanvas-mobile-menu" class="offcanvas offcanvas-mobile-menu">
            <button onClick={()=>handleUpdate(false)} class="offcanvas-close"></button>
            <div class="inner customScroll">
                <div class="offcanvas-menu mb-4">
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
                                    <a href="">Login</a>
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
                                <a onClick={() => dispatch(logout())} href="">Logout</a>
                            </li>

                        }
                    </ul>
                </div>
                <div class="offcanvas-social mt-auto">
                    <ul>
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
                            <a href="#"><i class="ion-social-youtube"></i></a>
                        </li>
                        <li>
                            <a href="#"><i class="ion-social-instagram"></i></a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        }

            <div class="offcanvas-overlay"></div>
        </>
    )
}
