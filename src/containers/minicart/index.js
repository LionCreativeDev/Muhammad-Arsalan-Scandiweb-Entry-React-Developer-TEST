import React, { Component } from 'react'
import "./cart.css";

import { connect } from "react-redux";//to connect with redux store
import { updateCart } from "../../store/action";

import { useLocation, useNavigate, useParams } from "react-router-dom";

function withParams(Component) {
    return props => <Component
        {...props}
        location={useLocation()}
        navigate={useNavigate()}
        params={useParams()} />;
}

class MiniCart extends Component {
    constructor(props) {
        super(props)
        this.state = {
            cart: [],
            minicartOpen: false,
            cartSummery: { totalItems: 0, totalQuantity: 0, totalPrice: 0, taxPercentage: 21, taxAmount: 0, grandTotal: 0 }
        }
        this.ref = React.createRef();
        this.handleClickOutside = this.handleClickOutside.bind(this);
    }
    componentDidMount() {
        this.setState({ cart: this.props.cart });
        this.calculateTotal(this.props.cart);
        document.addEventListener('click', this.handleClickOutside, true);
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
    handleClickOutside(event) {
        if (this.ref.current && !this.ref.current.contains(event.target)) {
            this.props.onClickOutside && this.props.onClickOutside();

            if (this.state.minicartOpen)
                this.setState({ minicartOpen: false });

            document.getElementsByClassName("loading")[0].style.display = "none";
        }
        else {
            const allowdClasses = ["cart-container", "item-summery", "cart-item", "item-Details", "item-brand", "item-name", "item-price", "size-holder", "item-sizes", "item-size", "item-size-selected", "color-holder", "item-colors", "item-color", "item-color-selected", "counter", "counter-control-minus", "counter-control-number", "counter-control-plus", "item-image-holder", "item-image", "cart-actions", "item-total"];
            if (allowdClasses.includes(event.target.className))
                this.setState({ minicartOpen: true })
            else
                this.setState({ minicartOpen: (this.state.minicartOpen ? false : true) })
        }
    };
    componentWillUnmount() {
        document.removeEventListener('click', this.handleClickOutside, true);
    };
    handleMiniCartClick() {
        if (this.state.minicartOpen)
            document.getElementsByClassName("loading")[0].style.display = "block";
        else if (!this.state.minicartOpen)
            document.getElementsByClassName("loading")[0].style.display = "none";
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
        });

        taxAmount = (totalPrice * taxPercentage) / 100;
        grandTotal = totalPrice + taxAmount;

        this.setState({ cartSummery: { totalItems: totalItems, totalQuantity: totalQuantity, totalPrice: totalPrice, taxPercentage: taxPercentage, taxAmount: taxAmount, grandTotal: grandTotal } });
    }
    render() {
        const { symbol } = this.props.selectedCurrency;
        const { totalQuantity, totalPrice } = this.state.cartSummery;

        return (
            <li ref={this.ref} style={{ margin: 0, padding: 0 }} onClick={() => { this.handleMiniCartClick() }}>
                <div className="dropdown">
                    <div className="dropbtn">
                        <svg className="cart" version="1.0" xmlns="http://www.w3.org/2000/svg" width="24.000000pt"
                            height="24.000000pt" viewBox="0 0 24.000000 24.000000"
                            preserveAspectRatio="xMidYMid meet">

                            <g transform="translate(0.000000,24.000000) scale(0.100000,-0.100000)"
                                fill="#000000" stroke="none">
                                <path d="M12 224 c19 -6 23 -18 36 -94 l8 -45 78 0 79 0 13 45 c8 25 14 46 14
48 0 1 -42 2 -93 2 -86 0 -93 2 -102 22 -6 13 -19 24 -30 25 -16 1 -16 1 -3
-3z m204 -91 l-13 -38 -67 -3 c-70 -3 -68 -4 -80 51 l-6 27 89 0 90 0 -13 -37z" />
                                <path d="M54 45 c-4 -9 -2 -21 4 -27 16 -16 47 -5 47 17 0 26 -42 34 -51 10z
m39 -10 c1 -5 -6 -11 -15 -13 -11 -2 -18 3 -18 13 0 17 30 18 33 0z" />
                                <path d="M164 45 c-4 -9 -2 -21 4 -27 16 -16 47 -5 47 17 0 26 -42 34 -51 10z
m39 -10 c1 -5 -6 -11 -15 -13 -11 -2 -18 3 -18 13 0 17 30 18 33 0z" />
                            </g>
                        </svg>
                        {totalQuantity > 0 ? <span className="badge">{totalQuantity}</span> : null}
                    </div>

                    <div className={`dropdown-content ${this.state.minicartOpen ? "show" : "hide"}`}>
                        <div className="cart-container">
                            <div className="item-summery">
                                <span><label>My Bag,</label> {totalQuantity} items</span>
                            </div>
{this.state.cart.length > 0 ? (
                            <div className="cart-items">
                                {
                                    this.state.cart.map((item, index) => {
                                        const priceInSelectedCurrency = item.prices.filter(price => price.currency.label === this.props.selectedCurrency.label);
                                        const amount = priceInSelectedCurrency[0].amount;
                                        const symbol = priceInSelectedCurrency[0]["currency"].symbol;

                                        return (<div key={index} className="cart-item">
                                            <div className="item-Details">
                                                <p className="item-brand regular-400" style={{ marginBottom: "0px"}}>Apollo</p>
                                                <p className="item-name regular-400">{`${item.brand} ${item.name}`}</p>
                                                <p className="item-price semibold-600">{`${symbol} ${amount}`}</p>

                                                {
                                                    item.attributes.map((attr, index) => {
                                                        if (attr.name === "Color") {
                                                            return (
                                                                <div key={index} className="size-holder">
                                                                    <p className="regular-400" style={{ color: "black", margin: 0 }}>{attr.name}:</p>
                                                                    <div className="item-sizes">
                                                                        {attr.items.map((item, index) => {
                                                                            return (<div key={index} className={item.selected ? "item-size-selected" : "item-size"} style={{ backgroundColor: item.value }}></div>)
                                                                        })}
                                                                    </div>
                                                                </div>
                                                            )
                                                        }
                                                        else {
                                                            return (<div key={index} className="attributes-holder">
                                                                <p className="regular-400" style={{ color: "black", margin: "0 0 5px 0" }}>{attr.name}:</p>
                                                                <div className="attributes-attribute">
                                                                    {attr.items.map((item, index) => {
                                                                        return (<div key={index} className={item.selected ? "mini-attribute-value-selected" : "mini-attribute-value"}>{item.value}</div>)
                                                                    })}
                                                                </div>
                                                            </div>)
                                                        }
                                                    })
                                                }

                                            </div>

                                            <div className="counter">
                                                <div className="counter-control-plus" onClick={() => { this.handleQuantity("plus", item) }}>+</div>
                                                <div className="counter-control-number">{item.quantity}</div>
                                                <div className="counter-control-minus" onClick={() => { this.handleQuantity("minus", item) }}>-</div>
                                            </div>

                                            <div className="item-image-holder">
                                                <img src={item.gallery[0]} className="item-image" alt={item.name + " image"} />
                                            </div>
                                        </div>
                                        )
                                    })
                                }

                            </div>)
                            :
                            (<div style={{textAlign: "center", padding: "5px"}}>Cart is empty</div>)
                            }

                            <div className="cart-actions">
                                <div className="item-total">
                                    <label>Total</label>
                                    <label>{symbol}{totalPrice.toFixed(2)}</label>
                                </div>
                                <div className="item-checkout">
                                    <button className="btn-secondary bold-700" onClick={() => this.props.location.pathname !== "/cart" && this.props.navigate(`/cart`)} >VIEW BAG</button>
                                    <button className="btn-primary bold-700">CHECK OUT</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
        )
    }
}

const mapStateToProp = (state) => ({
    cart: state.cart,
    selectedCurrency: state.selectedCurrency
})
const mapDispatchToProp = (dispatch) => ({
    updateCart: (cartItem) => dispatch(updateCart(cartItem))
})

export default connect(mapStateToProp, mapDispatchToProp)(withParams(MiniCart));
