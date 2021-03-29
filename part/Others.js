import React from 'react'
import Link from 'next/link'

export default function Others() {
    return (
        <>
            <div id="offcanvas-mobile-menu" class="offcanvas offcanvas-mobile-menu">
                <button class="offcanvas-close"></button>
                <div class="inner customScroll">
                    <div class="offcanvas-menu mb-4">
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

            <div class="offcanvas-overlay"></div>
        </>
    )
}
