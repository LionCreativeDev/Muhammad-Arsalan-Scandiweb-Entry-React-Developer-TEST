import React, { Component } from 'react'

import { connect } from "react-redux";//to connect with redux store
import { addToCart, updateCart, showSnackBar } from "../../store/action";

class ProductDetail extends Component {
    constructor(props) {
        super(props)
        this.state = {
            cart: [],
            product: {},
            snackbar: { open: false, message: "", variant: "" }
        }
    }
    // componentDidMount() {
    //     console.log("props", this.props.product);
    // }
    componentDidUpdate(prevProps, prevState) {
        if (prevProps.product !== this.props.product) {
            this.setState({ product: this.props.product });
        }

        if (prevProps.cart !== this.props.cart) {
            this.setState({ cart: this.props.cart });
        }
    }
    handeSelection(property, value) {
        var tempProducts = JSON.parse(JSON.stringify(this.state.product));
        const selectedProperty = tempProducts.attributes.find(attr => attr.name === property).items.find(c => c.id === value);
        tempProducts.attributes.find(attr => attr.name === property).items.filter(c => c.id !== value).map(item => delete item.selected)
        if (selectedProperty.selected === true)
            delete tempProducts.attributes.find(attr => attr.name === property).items.find(c => c.id === value).selected;
        else
            tempProducts.attributes.find(attr => attr.name === property).items.find(c => c.id === value).selected = true;

        Object.preventExtensions(tempProducts);
        this.setState({ product: tempProducts });
    }
    generateUniqueItemID(itemToAdd) {
        let uniqueItemID = itemToAdd.id;
        itemToAdd.attributes.map(attr => {
            attr.items.map(item => {
                if (item.selected)//console.log("item", item);
                    uniqueItemID += "-" + item.displayValue.replace(" ", "-");
            })
        });
        return uniqueItemID;
    }
    addToCart(itemToAdd) {
        const uniqueItemID = this.generateUniqueItemID(itemToAdd);
        if (this.state.cart.length === 0) { //if cart is empty, add this item to cart
            var tempitem = JSON.parse(JSON.stringify(itemToAdd));
            tempitem.uniqueItemID = uniqueItemID;
            tempitem.quantity = 1;
            Object.preventExtensions(tempitem);
            this.props.addToCart(tempitem);
        }
        else { //if cart is not empty, check if this item is already in cart
            const cart = this.props.cart;
            const index = cart.findIndex(item => item.uniqueItemID === uniqueItemID);
            if (index === -1) { // cart do not have this item, add this item to cart
                var tempitem = JSON.parse(JSON.stringify(itemToAdd));
                tempitem.uniqueItemID = uniqueItemID;
                tempitem.quantity = 1;
                Object.preventExtensions(tempitem);
                this.props.addToCart(tempitem);
            }
            else { //cart has this item, update the quantity
                cart[index].quantity++;
                this.props.updateCart(cart);
            }
        }

        this.props.showSnackBar({ open: true, message: "Item added in Cart", variant: "success" }); //add item in cart        
    }
    handleAddToCart() {
        const error = [];
        let attributes = this.state.product.attributes.map((item) => { return item.id });
        attributes.forEach(attribute => {
            if (this.state.product.attributes.find(attr => attr.name === attribute).items.find(item => item.selected === true) === undefined)
                error.push(`Please select ${attribute}`);
        })

        if (error.length > 0)
            this.props.showSnackBar({ open: true, message: error[0], variant: "info" });
        else {
            this.addToCart(this.state.product);
        }
    }
    render() {
        const { name, brand, description, prices, inStock, attributes } = this.state.product;

        if (name === undefined)
            return null;

        const priceInSelectedCurrency = prices.filter(price => price.currency.label === this.props.selectedCurrency.label);
        const amount = priceInSelectedCurrency[0].amount;
        const symbol = priceInSelectedCurrency[0]["currency"].symbol;

        return (
            <div className="col-sm-12 col-md-4 col-lg-4 pdp">
                <div className="product-Details">

                    <p className="product-brand">{brand}</p>
                    <p className="product-name">{name}</p>
                    {
                        attributes.map((attr, index) => {
                            if (attr.name === "Color") {
                                return (<div key={index} className="color-holder">
                                    <p style={{ color: "black", margin: "0 0 5px 0", fontWeight: "bold", fontFamily: "sans-serif" }}>{attr.name.toUpperCase()}:</p>
                                    <div className="product-colors">
                                        {attr.items.map((item, index) => {
                                            return (<div key={index} className={item.selected ? "product-color-selected" : "product-color"} style={{ backgroundColor: item.value }} onClick={() => this.handeSelection(attr.name, item.id)}></div>)
                                        })}
                                    </div>
                                </div>)
                            }
                            else {
                                return (<div key={index} className="attributes-holder">
                                    <p style={{ color: "black", margin: "0 0 5px 0", fontWeight: "bold", fontFamily: "sans-serif" }}>{attr.name.toUpperCase()}:</p>
                                    <div className="attributes-attribute">
                                        {attr.items.map((item, index) => {
                                            return (<div key={index} className={item.selected ? "attribute-value-selected" : "attribute-value"} onClick={() => this.handeSelection(attr.name, item.id)}>{item.value}</div>)
                                        })}
                                    </div>
                                </div>)
                            }
                        })
                    }

                    <div className="price-holder">
                        <p style={{ color: "black", margin: "0 0 5px 0", fontWeight: "bold", fontFamily: "sans-serif" }}>PRICE:</p>
                        <p className="product-price">{`${symbol} ${amount}`}</p>
                    </div>

                    {inStock
                        ? (<button className="btn-primary mb-3" style={{ fontFamily: "sans-serif" }} onClick={() => { this.handleAddToCart() }}>ADD TO CART</button>)
                        : (<button className="btn-primary mb-3" style={{ fontFamily: "sans-serif" }} onClick={() => { this.handleAddToCart() }} disabled>ADD TO CART</button>)
                    }

                    <p className="product-description" dangerouslySetInnerHTML={{ __html: description }}></p>
                </div>
            </div>
        )
    }
}

const mapStateToProp = (state) => ({
    cart: state.cart,
    selectedCurrency: state.selectedCurrency,
    snackbar: state.selectedCurrency
})
const mapDispatchToProp = (dispatch) => ({
    addToCart: (cartItem) => dispatch(addToCart(cartItem)),
    updateCart: (cartItem) => dispatch(updateCart(cartItem)),
    showSnackBar: (snackbar) => dispatch(showSnackBar(snackbar))
})

export default connect(mapStateToProp, mapDispatchToProp)(ProductDetail);