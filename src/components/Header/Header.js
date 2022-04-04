import React from "react";
import logo from "../../commonResource/images/icons/logo-sm.png";
import cart from "../../commonResource/images/icons/cart-sm.png";
import search_icon from "../../commonResource/images/icons/search-icon-sm.png";
import { Link } from "react-router-dom";

function Header() {
    return (
        <div>
            <div className="nav-wrapper fixed-top">
                <div className="container">
                    <nav className="navbar navbar-toggleable-sm navbar-expand-md">
                        <button
                            className="navbar-toggler navbar-toggler-right"
                            type="button"
                            data-toggle="collapse"
                            data-target=".navbar-collapse"
                        >
                            ☰
                        </button>
                        <a className="navbar-brand mx-auto" href="#">
                            <img src={logo} />
                        </a>

                        <div className="navbar-collapse collapse">
                            <ul className="navbar-nav nav-justified w-100 nav-fill">
                                <li className="nav-item">
                                    <Link
                                        className="nav-link js-scroll-trigger"
                                        to="/mac"
                                    >
                                        Mac
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link
                                        className="nav-link js-scroll-trigger"
                                        to="/iphones"
                                    >
                                        iphone
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link
                                        className="nav-link js-scroll-trigger"
                                        href="/pad"
                                    >
                                        ipad
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link
                                        className="nav-link js-scroll-trigger"
                                        href="#"
                                    >
                                        watch
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link
                                        className="nav-link js-scroll-trigger"
                                        href="#"
                                    >
                                        tv
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link
                                        className="nav-link js-scroll-trigger"
                                        href="#"
                                    >
                                        Music
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <a
                                        className="nav-link js-scroll-trigger"
                                        href="#"
                                    >
                                        Support
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <Link
                                        className="nav-link js-scroll-trigger"
                                        href="/search/"
                                    >
                                        <img src={search_icon} />
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link
                                        className="nav-link js-scroll-trigger"
                                        href="/cart/"
                                    >
                                        <img src={cart} />
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    );
}

export default Header;
