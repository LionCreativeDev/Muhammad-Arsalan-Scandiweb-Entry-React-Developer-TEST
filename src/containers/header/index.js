import React, { Component } from 'react'
// import '../../App.css';

import Categories from '../categories';
import Logo from '../logo';
import Currencies from '../currencies';
import MiniCart from '../minicart';

class Header extends Component {
    render() {
        return (
            <div className="container">
                <header>
                    <nav>
                        <Categories />
                        <Logo />
                        <ul>
                            <Currencies />
                            <MiniCart />
                        </ul>
                    </nav>
                </header>
            </div>
        )
    }
}

export default Header;
