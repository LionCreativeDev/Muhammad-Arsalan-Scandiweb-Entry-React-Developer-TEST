import React, { Component } from 'react'
import "./card.css"
import { useLocation, useNavigate, useParams } from "react-router-dom";

import { connect } from "react-redux";//to connect with redux store
import { addToCart, showSnackBar, showModal, hideModal } from "../../store/action";
import ProductModal from '../productmodal';

function withParams(Component) {
    return props => <Component
        {...props}
        location={useLocation()}
        navigate={useNavigate()}
        params={useParams()} />;
}

class ProductList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            products: [],
            selectedCurrency: { symbol: "$", label: "USD" }
        }
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevProps.products !== this.props.products)
            this.setState({ products: this.props.products })

        if (prevProps.selectedCurrency !== this.props.selectedCurrency)
            this.setState({ selectedCurrency: this.props.selectedCurrency })

        if (prevProps.cart !== this.props.cart) {
            const serializedState = JSON.stringify(this.props.cart);
            localStorage.setItem("cart", serializedState);
        }
    }
    moveToProductDetails(event, { inStock, id }) {
        if (event.target.className !== "addtocart" && ["svg", "g", "path"].indexOf(event.target.tagName) === -1 && inStock)
            this.props.navigate(`/productdetail/${id}`);
    }
    handleAddToCart(thisproduct) {
        if (thisproduct.attributes.length > 0) {
            this.props.showModal(thisproduct.id);
        }
        else {
            var tempitem = JSON.parse(JSON.stringify(thisproduct));
            tempitem.quantity = 1;
            Object.preventExtensions(tempitem);
            this.props.addToCart(tempitem);
            this.props.showSnackBar({ open: true, message: "Item added in Cart", variant: "success" }); //add item in cart
        }
    }
    render() {
        const { products, selectedCurrency } = this.state;
        const totalProducts = products.length;

        if (totalProducts === 0)
            return null;

        return (
            <>
                <div className="row">
                    {products.map((thisproduct, index) => {
                        const { name, brand, prices, gallery, inStock } = thisproduct;
                        const priceInSelectedCurrency = prices.filter(price => price.currency.label === selectedCurrency.label);
                        const amount = priceInSelectedCurrency[0].amount
                        const symbol = priceInSelectedCurrency[0]["currency"].symbol;

                        return (<div key={index} className="col-sm-12 col-md-4 col-lg-4 mb-5" onClick={(e) => { this.moveToProductDetails(e, thisproduct) }}>
                            <div className={inStock ? "product-card" : "out-of-stock"}>
                                <div className="product-action-container">
                                    {inStock && (
                                        <>
                                            <div className='product-badge'>
                                                <svg className="badge-icon" width="24" height="24" viewBox="0 0 28 28" fill="none" stroke="#ffffff" stroke-width="2" >
                                                    <path xmlns="http://www.w3.org/2000/svg" d="M 16.949219 1.914062 L 7.925781 11.082031 L 3.957031 7.230469 L 0 11.3125 L 8.019531 19.085938 L 21 5.898438 Z M 8 17.238281 L 1.855469 11.285156 L 3.984375 9.085938 L 7.949219 12.929688 L 16.964844 3.765625 L 19.144531 5.914062 Z M 8 17.238281 " />
                                                </svg>
                                                <span className='badge-label semibold-600'></span>
                                            </div>
                                            <svg className="like" title="Like Heart SVG File" width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                                            </svg>
                                        </>
                                    )}

                                    <img src={gallery[0]} alt={`${name}`} style={{ width: "100%", height: "21.5vw", objectFit: "contain" }} />
                                    <div className="addtocart" onClick={() => { this.handleAddToCart(thisproduct) }}>
                                        <svg className="cart" version="1.0" xmlns="http://www.w3.org/2000/svg" width="24.000000pt" height="24.000000pt" viewBox="0 0 24.000000 24.000000" preserveAspectRatio="xMidYMid meet">
                                            <g transform="translate(0.000000,24.000000) scale(0.100000,-0.100000)" fill="#FFFFFF" stroke="none">
                                                <path d="M12 224 c19 -6 23 -18 36 -94 l8 -45 78 0 79 0 13 45 c8 25 14 46 14 48 0 1 -42 2 -93 2 -86 0 -93 2 -102 22 -6 13 -19 24 -30 25 -16 1 -16 1 -3 -3z m204 -91 l-13 -38 -67 -3 c-70 -3 -68 -4 -80 51 l-6 27 89 0 90 0 -13 -37z"></path>
                                                <path d="M54 45 c-4 -9 -2 -21 4 -27 16 -16 47 -5 47 17 0 26 -42 34 -51 10z m39 -10 c1 -5 -6 -11 -15 -13 -11 -2 -18 3 -18 13 0 17 30 18 33 0z"></path>
                                                <path d="M164 45 c-4 -9 -2 -21 4 -27 16 -16 47 -5 47 17 0 26 -42 34 -51 10z m39 -10 c1 -5 -6 -11 -15 -13 -11 -2 -18 3 -18 13 0 17 30 18 33 0z"></path>
                                            </g>
                                        </svg>
                                    </div>
                                </div>
                                <p className="product-name light-300">{`${brand} ${name}`}</p>
                                {/* <div className="price" style={{fontWeight: 600}}>
                                    <div>{symbol}</div>
                                    <div style={{marginTop: "1px"}}>{amount}</div>
                                </div> */}
                                <div className="price medium-500">{symbol}{amount}</div>

                                <div className="overlay">
                                    <div className="overlay-text semibold-600">OUT OF STOCK</div>
                                </div>
                            </div>
                        </div>)
                    })}

                </div>
                {this.props.modal.show && (<ProductModal />)}
            </>
        )
    }
}

const mapStateToProp = (state) => ({
    cart: state.cart,
    selectedCurrency: state.selectedCurrency,
    modal: state.modal
})
const mapDispatchToProp = (dispatch) => ({
    addToCart: (cartItem) => dispatch(addToCart(cartItem)),
    showSnackBar: (snackbar) => dispatch(showSnackBar(snackbar)),
    showModal: (product) => dispatch(showModal(product)),
    hideModal: () => dispatch(hideModal())
})

export default connect(mapStateToProp, mapDispatchToProp)(withParams(ProductList));
