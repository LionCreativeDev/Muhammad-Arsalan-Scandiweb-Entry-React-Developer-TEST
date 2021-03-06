import React, { Component } from 'react'
import "./main-cart.css"

import { connect } from "react-redux";//to connect with redux store
import { removeFromCart, updateCart, showSnackBar } from "../../store/action";
import ImageGallery from '../imagegalley';

let cartSummery = { totalItems: 0, totalQuantity: 0, totalPrice: 0, taxPercentage: 21, taxAmount: 0, grandTotal: 0 };

class CartItems extends Component {
    constructor(props) {
        super(props)
        this.state = {
            cart: [],
        }
    }
    componentDidMount() {
        if (this.props.cart.length > 0) {
            this.setState({ cart: this.props.cart });
            this.calculateTotal(this.props.cart);
        }
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevProps.cart !== this.props.cart) {
            this.setState({ cart: this.props.cart });
            this.calculateTotal(this.props.cart);
        }

        if (prevProps.selectedCurrency !== this.props.selectedCurrency) {
            this.calculateTotal(this.props.cart);
        }
    }
    handleQuantity(command, item) {
        let tempitem = JSON.parse(JSON.stringify(item));

        if (command === "plus") {
            tempitem.quantity = tempitem.quantity + 1;
            Object.preventExtensions(tempitem);
            this.props.updateCart(tempitem);
        } else if (command === "minus") {
            if (tempitem.quantity > 1) {
                tempitem.quantity = tempitem.quantity - 1;
                Object.preventExtensions(tempitem);
                this.props.updateCart(tempitem);
            }
        }
    }
    removeItem(item){
        this.props.removeFromCart(item);
        this.calculateTotal(this.props.cart);

        let temp = [...this.props.cart.filter(i => i.uniqueItemID !== item.uniqueItemID)];
        //console.log("temp", temp);
        const serializedState = JSON.stringify(temp);
        localStorage.setItem("cart", serializedState);

        this.props.showSnackBar({ open: true, message: "Item removed from cart!", variant: "success" });
    }
    calculateTotal(cart) {
        var totalItems = cart.length;
        var totalQuantity = 0;
        var totalPrice = 0;
        var taxPercentage = 21;
        var taxAmount = 0;
        var grandTotal = 0;

        cart.forEach(item => {
            const priceInSelectedCurrency = item.prices.filter(price => price.currency.label === this.props.selectedCurrency.label);
            const amount = priceInSelectedCurrency[0].amount;

            totalQuantity = totalQuantity + item.quantity;
            totalPrice = totalPrice + (amount * item.quantity);
        })

        taxAmount = (totalPrice * taxPercentage) / 100;
        grandTotal = totalPrice + taxAmount;

        cartSummery = { totalItems: totalItems, totalQuantity: totalQuantity, totalPrice: totalPrice, taxPercentage: taxPercentage, taxAmount: taxAmount, grandTotal: grandTotal };
    }
    render() {
        const { symbol } = this.props.selectedCurrency;
        const { totalQuantity, totalPrice, taxPercentage, taxAmount } = cartSummery;

        return (
            <div className="row">

                <div className="col-sm-12 col-md-12 col-lg-12 mb-5" style={{ paddingLeft: "40px" }}>
                    {this.state.cart.length > 0 ? (
                        <div className="main-cart-items">
                            {
                                this.state.cart.map((item, index) => {

                                    const priceInSelectedCurrency = item.prices.filter(price => price.currency.label === this.props.selectedCurrency.label);
                                    const amount = priceInSelectedCurrency[0].amount;
                                    const symbol = priceInSelectedCurrency[0]["currency"].symbol;

                                    return (<div key={index} className="main-cart-item">
                                        <div className="main-cart-item-Details">
                                            <p className="main-cart-item-brand semibold-600">{item.brand}</p>
                                            <p className="main-cart-item-name light-300">{item.name}</p>
                                            <p className="main-cart-item-price bold-700">{`${symbol}${amount}`}</p>

                                            {
                                                item.attributes.map((attr, index) => {
                                                    if (attr.name === "Color") {
                                                        return (
                                                            <div key={index} className="main-cart-color-holder">
                                                                <p style={{ color: "black", margin: 0, fontWeight: "bold", fontFamily: "sans-serif" }}>{attr.name.toUpperCase()}:</p>
                                                                <div className="main-cart-item-colors">
                                                                    {attr.items.map((item, index) => {
                                                                        return (<div key={index} className={item.selected ? "main-cart-item-color-selected" : "main-cart-item-color"} style={{ backgroundColor: item.value }}></div>)
                                                                    })}
                                                                </div>
                                                            </div>
                                                        )
                                                    }
                                                    else {
                                                        return (<div key={index} className="attributes-holder">
                                                            <p style={{ color: "black", margin: "0 0 5px 0", fontWeight: "bold", fontFamily: "sans-serif" }}>{attr.name.toUpperCase()}:</p>
                                                            <div className="attributes-attribute">
                                                                {attr.items.map((item, index) => {
                                                                    return (<div key={index} className={item.selected ? "attribute-value-selected regular-400" : "attribute-value regular-400"}>{item.value}</div>)
                                                                })}
                                                            </div>
                                                        </div>)
                                                    }
                                                })
                                            }
                                        </div>

                                        <div className="main-cart-item-image-holder">
                                            <div className="main-cart-counter">
                                                <div className="main-cart-counter-control-plus regular-400" onClick={() => { this.handleQuantity("plus", item) }}>+</div>
                                                <div className="main-cart-counter-control-number medium-500">{item.quantity}</div>
                                                <div className="main-cart-counter-control-minus regular-400" onClick={() => { this.handleQuantity("minus", item) }}>-</div>
                                            </div>
                                            <ImageGallery item={item} />
                                            <div style={{position: "absolute", right: "15px"}} onClick={()=>{this.removeItem(item)}}>
                                                <svg className="badge-icon" width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="#000000" strokeWidth="2" >
                                                    <g id="surface1">
                                                        <path d="M 18.946429 17.151786 L 45.044643 43.053571 " transform="matrix(0.4375,0,0,0.4375,0,0)" />
                                                        <path d="M 19.044643 43.151786 L 44.946429 17.053571 " transform="matrix(0.4375,0,0,0.4375,0,0)" />
                                                    </g>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>)
                                })
                            }
                        </div>)
                        :
                        (<div style={{ textAlign: "center", padding: "5px", fontSize: "24px", marginBottom: "20px" }}>Cart is empty</div>)
                    }

                    <div className="main-cart-total">
                        <div className="p-holder">
                            <p className="p-title medium-500">Tax {taxPercentage}%:</p>
                            <p className="p-value bold-700">{symbol}{taxAmount.toFixed(2)}</p>
                        </div>
                        <div className="p-holder">
                            <p className="p-title medium-500">Quantity:</p>
                            <p className="p-value bold-700">{totalQuantity}</p>
                        </div>
                        <div className="p-holder">
                            <p className="p-title medium-500">Total:</p>
                            <p className="p-value bold-700">{symbol}{totalPrice.toFixed(2)}</p>
                        </div>
                        <button className="btn-order">ORDER</button>
                    </div>
                </div>

            </div>
        )
    }
}

const mapStateToProp = (state) => ({
    cart: state.cart,
    selectedCurrency: state.selectedCurrency,
    snackbar: state.snackbar
})
const mapDispatchToProp = (dispatch) => ({
    removeFromCart: (cartItem) => dispatch(removeFromCart(cartItem)),
    updateCart: (cartItem) => dispatch(updateCart(cartItem)),
    showSnackBar: (snackbar) => dispatch(showSnackBar(snackbar))
})

export default connect(mapStateToProp, mapDispatchToProp)(CartItems);
