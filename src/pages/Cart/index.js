import React, { Component } from 'react'
import CartItems from '../../containers/cartitems';
//import Header from '../../containers/header';
import PageHeading from '../../containers/pageheading';

class Cart extends Component {
    render() {
        return (
            <>
                {/* <Header /> */}
                <div style={{ position: "relative", display: "block", paddingBottom: "100px" }}>
                    <div className="container">
                        <PageHeading text={"CART"} />
                        <CartItems />
                    </div>
                    <div className="loading"></div>
                </div>
            </>
        )
    }
}

export default Cart;
