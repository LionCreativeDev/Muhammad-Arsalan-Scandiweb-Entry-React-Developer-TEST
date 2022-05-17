import React, { Component } from 'react'
import "./cart.css";

import { useLocation, useNavigate, useParams } from "react-router-dom";

function withParams(Component) {
    return props => <Component
        {...props}
        location={useLocation()}
        navigate={useNavigate()}
        params={useParams()} />;
}

class MiniCart extends Component {
    // componentDidMount(){
    //     console.log(this.props.location);
    // }
    render() {
        return (
            <li style={{ margin: 0, padding: 0 }}>
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
                        <span className="badge">2</span>
                    </div>

                    <div className="dropdown-content">
                        <div className="cart-container">
                            <div className="item-summery">
                                <span><label>My Bag</label> 3 items</span>
                            </div>

                            <div className="cart-items">

                                <div className="cart-item">
                                    <div className="item-Details">
                                        <p className="item-brand" style={{ marginBottom: "0px", fontWeight: "bold", fontFamily: "sans-serif" }}>Apollo</p>
                                        <p className="item-name">Nike Air Huarache Le</p>
                                        <p className="item-price">$19.99</p>

                                        <div className="size-holder">
                                            <p style={{ color: "gray", margin: "0 0 5px 0" }}>Size:</p>
                                            <div className="item-sizes">
                                                <div className="item-size">XS</div>
                                                <div className="item-size-selected">S</div>
                                                <div className="item-size">M</div>
                                                <div className="item-size">L</div>
                                            </div>
                                        </div>

                                        <div className="color-holder">
                                            <p style={{ color: "gray", margin: "0 0 5px 0" }}>Color:</p>
                                            <div className="item-colors">
                                                <div className="item-color" style={{ backgroundColor: "gray" }}></div>
                                                <div className="item-color-selected" style={{ backgroundColor: "black" }}></div>
                                                <div className="item-color" style={{ backgroundColor: "darkgreen" }}></div>
                                                <div className="item-color" style={{ backgroundColor: "darkorange" }}></div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="counter">
                                        <div className="counter-control-minus">+</div>
                                        <div className="counter-control-number">1</div>
                                        <div className="counter-control-plus">-</div>
                                    </div>

                                    <div className="item-image-holder">
                                        <img src="https://cdn.shopify.com/s/files/1/0087/6193/3920/products/DD1381200_DEOA_2_720x.jpg?v=1612816087"
                                            className="item-image" alt="Nike Air Huarache Le" />
                                    </div>
                                </div>

                                <div className="cart-item">
                                    <div className="item-Details">
                                        <p className="item-brand" style={{ marginBottom: "0px", fontWeight: "bold", fontFamily: "sans-serif" }}>Apollo</p>
                                        <p className="item-name">Nike Air Huarache Le</p>
                                        <p className="item-price">$19.99</p>

                                        <div className="size-holder">
                                            <p style={{ color: "gray", margin: "0 0 5px 0" }}>Size:</p>
                                            <div className="item-sizes">
                                                <div className="item-size">XS</div>
                                                <div className="item-size-selected">S</div>
                                                <div className="item-size">M</div>
                                                <div className="item-size">L</div>
                                            </div>
                                        </div>

                                        <div className="color-holder">
                                            <p style={{ color: "gray", margin: "0 0 5px 0" }}>Color:</p>
                                            <div className="item-colors">
                                                <div className="item-color" style={{ backgroundColor: "gray" }}></div>
                                                <div className="item-color-selected" style={{ backgroundColor: "black" }}></div>
                                                <div className="item-color" style={{ backgroundColor: "darkgreen" }}></div>
                                                <div className="item-color" style={{ backgroundColor: "darkorange" }}></div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="counter">
                                        <div className="counter-control-minus">+</div>
                                        <div className="counter-control-number">1</div>
                                        <div className="counter-control-plus">-</div>
                                    </div>

                                    <div className="item-image-holder">
                                        <img src="https://cdn.shopify.com/s/files/1/0087/6193/3920/products/DD1381200_DEOA_2_720x.jpg?v=1612816087"
                                            className="item-image" alt="Nike Air Huarache Le" />
                                    </div>
                                </div>

                            </div>

                            <div className="cart-actions">
                                <div className="item-total">
                                    <label>Total</label>
                                    <label>$200</label>
                                </div>
                                <div className="item-checkout">
                                    <button className="btn-secondary" onClick={()=> this.props.location.pathname !== "/cart" && this.props.navigate(`/cart`)} >VIEW BAG</button>
                                    <button className="btn-primary">CHECK OUT</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
        )
    }
}

export default withParams(MiniCart);
