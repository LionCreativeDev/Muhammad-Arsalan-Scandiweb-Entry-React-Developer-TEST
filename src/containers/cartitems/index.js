import React, { Component } from 'react'
import "./main-cart.css"

class CartItems extends Component {
    render() {
        return (
            <div className="row">

                <div className="col-sm-12 col-md-12 col-lg-12 mb-5" style={{paddingLeft: "40px"}}>
                    <div className="main-cart-items">

                        <div className="main-cart-item">
                            <div className="main-cart-item-Details">
                                <p className="main-cart-item-brand">Apollo</p>
                                <p className="main-cart-item-name">Nike Air Huarache Le</p>
                                <p className="main-cart-item-price">$19.99</p>

                                <div className="main-cart-size-holder">
                                    <p style={{color: "black",margin:0, fontWeight: "bold", fontFamily: "sans-serif"}}>SIZE:</p>
                                    <div className="main-cart-item-sizes">
                                        <div className="main-cart-item-size">XS</div>
                                        <div className="main-cart-item-size-selected">S</div>
                                        <div className="main-cart-item-size">M</div>
                                        <div className="main-cart-item-size">L</div>
                                    </div>
                                </div>

                                <div className="main-cart-color-holder">
                                    <p style={{color: "black",margin:0, fontWeight: "bold", fontFamily: "sans-serif"}}> COLOR:</p>
                                    <div className="main-cart-item-colors">
                                        <div className="main-cart-item-color" style={{ backgroundColor: "gray" }}></div>
                                        <div className="main-cart-item-color-selected" style={{ backgroundColor: "black" }}></div>
                                        <div className="main-cart-item-color" style={{ backgroundColor: "darkgreen" }}></div>
                                        <div className="main-cart-item-color" style={{ backgroundColor: "darkorange" }}></div>
                                    </div>
                                </div>
                            </div>

                            <div className="main-cart-item-image-holder">
                                <div className="main-cart-counter">
                                    <div className="main-cart-counter-control-minus">+</div>
                                    <div className="main-cart-counter-control-number">1</div>
                                    <div className="main-cart-counter-control-plus">-</div>
                                </div>
                                <img src="https://cdn.shopify.com/s/files/1/0087/6193/3920/products/DD1381200_DEOA_2_720x.jpg?v=1612816087"
                                    className="main-cart-item-image" />

                                <div className="image-controls-holder">
                                    <div className="image-controls-previous">
                                        <i className="fas fa-chevron-left">{"<"}</i>
                                    </div>
                                    <div className="image-controls-next">
                                        <i className="fas fa-chevron-right">{">"}</i>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>

                    <div className="main-cart-total">
                        <div className="p-holder">
                            <p className="p-title">Tax 21%:</p>
                            <p className="p-value">$42.00</p>
                        </div>
                        <div className="p-holder">
                            <p className="p-title">Quantity:</p>
                            <p className="p-value">3</p>
                        </div>
                        <div className="p-holder">
                            <p className="p-title">Total:</p>
                            <p className="p-value">$200.00</p>
                        </div>
                        <button className="btn-order">ORDER</button>
                    </div>
                </div>

            </div>
        )
    }
}

export default CartItems;
