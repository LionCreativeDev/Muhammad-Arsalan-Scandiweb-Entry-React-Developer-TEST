import React, { Component } from 'react'
//import Header from '../../containers/header';
import PageHeading from '../../containers/pageheading';
import ProductList from '../../containers/productList';

import { connect } from "react-redux";//to connect with redux store
import { addToCart, removeFromCart, updateCart } from "../../store/action";

import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    gql
} from "@apollo/client";

const client = new ApolloClient({
    uri: 'http://localhost:4000/',
    cache: new InMemoryCache()
});

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            products: []
        }
    }
    fecthProducts(category) {
        client.query({
            query: gql`
            query GetProductsInAllCategory {
              category(input: {title:"${category !== undefined ? category : "all"}"}) {
                name
                products {
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
            }
            `
        }).then(result => {
            const { data } = result;
            
            if (data)
                this.setState({ products: data["category"]["products"] });
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
        if (this.props.selectedCategory === "all" || this.props.selectedCategory === "")
            this.fecthProducts("all");
        else
            this.fecthProducts(this.props.selectedCategory);

        this.onUpdateCart(this.props.cart);
        window.addEventListener("storage", this.onUpdateCart);
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevProps !== this.props) {
            this.fecthProducts(this.props.selectedCategory);
        }
    }
    componentWillUnmount() {
        window.removeEventListener("storage", this.onUpdateCart);
    }
    render() {
        return (
            <>
                <ApolloProvider client={client}>
                    {/* <Header /> */}
                    <div style={{ position: "relative", display: "block"}}>
                        <div className="container">
                            <PageHeading text={this.props.selectedCategory} />
                            <ProductList products={this.state.products} />
                        </div>
                        <div className="loading"></div>
                    </div>
                </ApolloProvider>
            </>
        )
    }
}

const mapStateToProp = (state) => ({
    cart: state.cart,
    selectedCategory: state.selectedCategory
})
const mapDispatchToProp = (dispatch) => ({
    removeFromCart: (cartItem) => dispatch(removeFromCart(cartItem)),
    addToCart: (cartItem) => dispatch(addToCart(cartItem)),
    updateCart: (cartItem) => dispatch(updateCart(cartItem))
})

export default connect(mapStateToProp, mapDispatchToProp)(Home);
