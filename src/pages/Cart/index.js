import React, { Component } from 'react'
import CartItems from '../../containers/cartitems';
//import Header from '../../containers/header';
import PageHeading from '../../containers/pageheading';

import { connect } from "react-redux";//to connect with redux store
import { addToCart, updateCart } from "../../store/action";

class Cart extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    onUpdateCart = () => {
        setTimeout(() => {
            let cart = this.props.cart;
            let cartItems = localStorage.getItem("cart") !== null ? JSON.parse(localStorage.getItem("cart")) : [];
            if (cart !== cartItems) {
                cartItems.forEach(cartItem => {
                    if (!cart.some(item => item.uniqueItemID === cartItem.uniqueItemID))
                        this.props.addToCart(cartItem);
                    else if (cart.some(item => item.uniqueItemID === cartItem.uniqueItemID)) {
                        let index = cart.findIndex(item => item.uniqueItemID === cartItem.uniqueItemID);
                        cart[index].quantity = cartItem.quantity;
                        this.props.updateCart(cart[index]);
                    }
                });
            }
        }, 100)
    }
    componentDidMount() {
        this.onUpdateCart();
        window.addEventListener("storage", this.onUpdateCart);
    }
    componentWillUnmount() {
        window.removeEventListener("storage", this.onUpdateCart);
    }
    render() {
        return (
            <>
                {/* <Header /> */}
                {/* <div style={{ position: "relative", display: "block", paddingBottom: "100px" }}>
                    <div className="container"> */}
                <div style={{ position: "relative", display: "block"}}>
                    <div className="container" style={{ height: "100%" }}>
                        <PageHeading text={"CART"} />
                        <CartItems />
                    </div>
                    <div className="loading"></div>
                </div>
            </>
        )
    }
}

const mapStateToProp = (state) => ({
    cart: state.cart
})
const mapDispatchToProp = (dispatch) => ({
    addToCart: (cartItem) => dispatch(addToCart(cartItem)),
    updateCart: (cartItem) => dispatch(updateCart(cartItem))
})

export default connect(mapStateToProp, mapDispatchToProp)(Cart);
