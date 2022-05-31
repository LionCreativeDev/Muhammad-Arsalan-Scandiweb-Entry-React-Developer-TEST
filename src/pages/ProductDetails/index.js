import React, { Component } from 'react'
//import Header from '../../containers/header';
import ProductDetail from '../../containers/productdetail';
import ProductImages from '../../containers/productimages';

import { connect } from "react-redux";//to connect with redux store
import { addToCart, removeFromCart, updateCart } from "../../store/action";

import { useLocation, useNavigate, useParams } from "react-router-dom";
import {
    ApolloClient,
    InMemoryCache,
    //ApolloProvider,
    //useQuery,
    gql
} from "@apollo/client";

const client = new ApolloClient({
    uri: 'http://localhost:4000/',
    cache: new InMemoryCache()
});

function withParams(Component) {
    return props => <Component
        {...props}
        location={useLocation()}
        navigate={useNavigate()}
        params={useParams()} />;
}

class ProductDetails extends Component {
    constructor(props) {
        super(props)
        this.state = {
            product: []
        }
    }
    fecthProductDetails(productid) {
        client.query({
            query: gql`
            {
                product(id:"${productid}") {
                  id
                  name
                  inStock
                  gallery
                  description
                  category
                  attributes {
                    id
                    name
                    type
                    items {
                      id
                      value
                      displayValue
                    }
                  }
                  prices {
                    currency {
                      label
                      symbol
                    }
                    amount
                  }
                  brand
                }
              }
      `}).then(result => {
                const { data } = result;
                
                if (data) {
                    this.setState({
                        product: data["product"]
                    })
                }
            });
    }
    onUpdateCart = () => {
        setTimeout(() => {
            let cart = this.props.cart;
            let cartItems = localStorage.getItem("cart") !== null ? JSON.parse(localStorage.getItem("cart")) : [];
            if (cart !== cartItems && cartItems.length > cart.length) {
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
            else if (cart !== cartItems && cartItems.length < cart.length) {
                cart.forEach(cartItem => {
                    if (!cartItems.some(item => item.uniqueItemID === cartItem.uniqueItemID))
                        this.props.removeFromCart(cartItem);
                })
            }
        }, 500)
    }
    componentDidMount() {
        this.onUpdateCart();
        window.addEventListener("storage", this.onUpdateCart);
        
        if (this.props.productid !== undefined)
            this.fecthProductDetails(this.props.productid);
        else if (this.props.params.productId !== undefined)
            this.fecthProductDetails(this.props.params.productId)
    }
    componentWillUnmount() {
        window.removeEventListener("storage", this.onUpdateCart);
    }
    render() {
        const product = this.state.product;

        return (
            <>
                {/* <Header /> */}
                {/* <div style={{ position: "relative", display: "block" }}>
                    <div className="container"> */}
                <div style={{ position: "relative", display: "block", height: "84.2%" }}>
                    <div className="container" style={{ height: "100%" }}>
                        <div className="row">
                            <ProductImages images={product.gallery} name={product.name} />
                            <ProductDetail product={product} />
                        </div>
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
    removeFromCart: (cartItem) => dispatch(removeFromCart(cartItem)),
    addToCart: (cartItem) => dispatch(addToCart(cartItem)),
    updateCart: (cartItem) => dispatch(updateCart(cartItem))
})

export default connect(mapStateToProp, mapDispatchToProp)(withParams(ProductDetails));
