import React, { Component } from 'react'
import "./card.css"

class ProductList extends Component {
    render() {
        return (
            <div className="row">

                <div className="col-sm-12 col-md-4 col-lg-4 mb-5">
                    <div className="product-card">
                        <div className="product-action-container">
                            <img src="https://cdn.shopify.com/s/files/1/0087/6193/3920/products/DD1381200_DEOA_2_720x.jpg?v=1612816087"
                                style={{width: "100%"}} />
                                <div className="addtocart">
                                    <svg className="cart" version="1.0" xmlns="http://www.w3.org/2000/svg" width="24.000000pt"
                                        height="24.000000pt" viewBox="0 0 24.000000 24.000000"
                                        preserveAspectRatio="xMidYMid meet">

                                        <g transform="translate(0.000000,24.000000) scale(0.100000,-0.100000)" fill="#FFFFFF"
                                            stroke="none">
                                            <path d="M12 224 c19 -6 23 -18 36 -94 l8 -45 78 0 79 0 13 45 c8 25 14 46 14
                48 0 1 -42 2 -93 2 -86 0 -93 2 -102 22 -6 13 -19 24 -30 25 -16 1 -16 1 -3
                -3z m204 -91 l-13 -38 -67 -3 c-70 -3 -68 -4 -80 51 l-6 27 89 0 90 0 -13 -37z"></path>
                                            <path d="M54 45 c-4 -9 -2 -21 4 -27 16 -16 47 -5 47 17 0 26 -42 34 -51 10z
                m39 -10 c1 -5 -6 -11 -15 -13 -11 -2 -18 3 -18 13 0 17 30 18 33 0z"></path>
                                            <path d="M164 45 c-4 -9 -2 -21 4 -27 16 -16 47 -5 47 17 0 26 -42 34 -51 10z
                m39 -10 c1 -5 -6 -11 -15 -13 -11 -2 -18 3 -18 13 0 17 30 18 33 0z"></path>
                                        </g>
                                    </svg>
                                </div>
                        </div>
                        <p className="product-name">Nike Air Huarache Le</p>
                        <p className="price">$19.99</p>
                    </div>
                </div>

                <div className="col-sm-12 col-md-4 col-lg-4 mb-5">
                    <div className="product-card">
                        <div className="product-action-container">
                            <img src="https://cdn.shopify.com/s/files/1/0087/6193/3920/products/DD1381200_DEOA_2_720x.jpg?v=1612816087"
                                style={{width: "100%"}} />
                                <div className="addtocart">
                                    <svg className="cart" version="1.0" xmlns="http://www.w3.org/2000/svg" width="24.000000pt"
                                        height="24.000000pt" viewBox="0 0 24.000000 24.000000"
                                        preserveAspectRatio="xMidYMid meet">

                                        <g transform="translate(0.000000,24.000000) scale(0.100000,-0.100000)" fill="#FFFFFF"
                                            stroke="none">
                                            <path d="M12 224 c19 -6 23 -18 36 -94 l8 -45 78 0 79 0 13 45 c8 25 14 46 14
                48 0 1 -42 2 -93 2 -86 0 -93 2 -102 22 -6 13 -19 24 -30 25 -16 1 -16 1 -3
                -3z m204 -91 l-13 -38 -67 -3 c-70 -3 -68 -4 -80 51 l-6 27 89 0 90 0 -13 -37z"></path>
                                            <path d="M54 45 c-4 -9 -2 -21 4 -27 16 -16 47 -5 47 17 0 26 -42 34 -51 10z
                m39 -10 c1 -5 -6 -11 -15 -13 -11 -2 -18 3 -18 13 0 17 30 18 33 0z"></path>
                                            <path d="M164 45 c-4 -9 -2 -21 4 -27 16 -16 47 -5 47 17 0 26 -42 34 -51 10z
                m39 -10 c1 -5 -6 -11 -15 -13 -11 -2 -18 3 -18 13 0 17 30 18 33 0z"></path>
                                        </g>
                                    </svg>
                                </div>
                        </div>
                        <p className="product-name">Nike Air Huarache Le</p>
                        <p className="price">$19.99</p>
                    </div>
                </div>

                <div className="col-sm-12 col-md-4 col-lg-4 mb-5">
                    <div className="out-of-stock">
                        <div className="product-action-container">
                            <img src="https://cdn.shopify.com/s/files/1/0087/6193/3920/products/DD1381200_DEOA_2_720x.jpg?v=1612816087"
                                style={{width: "100%"}} />
                                <div className="addtocart">
                                    <svg className="cart" version="1.0" xmlns="http://www.w3.org/2000/svg" width="24.000000pt"
                                        height="24.000000pt" viewBox="0 0 24.000000 24.000000"
                                        preserveAspectRatio="xMidYMid meet">

                                        <g transform="translate(0.000000,24.000000) scale(0.100000,-0.100000)" fill="#FFFFFF"
                                            stroke="none">
                                            <path d="M12 224 c19 -6 23 -18 36 -94 l8 -45 78 0 79 0 13 45 c8 25 14 46 14
                48 0 1 -42 2 -93 2 -86 0 -93 2 -102 22 -6 13 -19 24 -30 25 -16 1 -16 1 -3
                -3z m204 -91 l-13 -38 -67 -3 c-70 -3 -68 -4 -80 51 l-6 27 89 0 90 0 -13 -37z"></path>
                                            <path d="M54 45 c-4 -9 -2 -21 4 -27 16 -16 47 -5 47 17 0 26 -42 34 -51 10z
                m39 -10 c1 -5 -6 -11 -15 -13 -11 -2 -18 3 -18 13 0 17 30 18 33 0z"></path>
                                            <path d="M164 45 c-4 -9 -2 -21 4 -27 16 -16 47 -5 47 17 0 26 -42 34 -51 10z
                m39 -10 c1 -5 -6 -11 -15 -13 -11 -2 -18 3 -18 13 0 17 30 18 33 0z"></path>
                                        </g>
                                    </svg>
                                </div>
                        </div>
                        <p className="product-name">Nike Air Huarache Le</p>
                        <p className="price">$19.99</p>

                        <div className="overlay">
                            <div className="overlay-text">OUT OF STOCK</div>
                        </div>
                    </div>

                </div>

                <div className="col-sm-12 col-md-4 col-lg-4 mb-5">
                    <div className="product-card">
                        <div className="product-action-container">
                            <img src="https://cdn.shopify.com/s/files/1/0087/6193/3920/products/DD1381200_DEOA_2_720x.jpg?v=1612816087"
                                style={{width: "100%"}} />
                                <div className="addtocart">
                                    <svg className="cart" version="1.0" xmlns="http://www.w3.org/2000/svg" width="24.000000pt"
                                        height="24.000000pt" viewBox="0 0 24.000000 24.000000"
                                        preserveAspectRatio="xMidYMid meet">

                                        <g transform="translate(0.000000,24.000000) scale(0.100000,-0.100000)" fill="#FFFFFF"
                                            stroke="none">
                                            <path d="M12 224 c19 -6 23 -18 36 -94 l8 -45 78 0 79 0 13 45 c8 25 14 46 14
                48 0 1 -42 2 -93 2 -86 0 -93 2 -102 22 -6 13 -19 24 -30 25 -16 1 -16 1 -3
                -3z m204 -91 l-13 -38 -67 -3 c-70 -3 -68 -4 -80 51 l-6 27 89 0 90 0 -13 -37z"></path>
                                            <path d="M54 45 c-4 -9 -2 -21 4 -27 16 -16 47 -5 47 17 0 26 -42 34 -51 10z
                m39 -10 c1 -5 -6 -11 -15 -13 -11 -2 -18 3 -18 13 0 17 30 18 33 0z"></path>
                                            <path d="M164 45 c-4 -9 -2 -21 4 -27 16 -16 47 -5 47 17 0 26 -42 34 -51 10z
                m39 -10 c1 -5 -6 -11 -15 -13 -11 -2 -18 3 -18 13 0 17 30 18 33 0z"></path>
                                        </g>
                                    </svg>
                                </div>
                        </div>
                        <p className="product-name">Nike Air Huarache Le</p>
                        <p className="price">$19.99</p>
                    </div>
                </div>

                <div className="col-sm-12 col-md-4 col-lg-4 mb-5">
                    <div className="product-card">
                        <div className="product-action-container">
                            <img src="https://cdn.shopify.com/s/files/1/0087/6193/3920/products/DD1381200_DEOA_2_720x.jpg?v=1612816087"
                                style={{width: "100%"}} />
                                <div className="addtocart">
                                    <svg className="cart" version="1.0" xmlns="http://www.w3.org/2000/svg" width="24.000000pt"
                                        height="24.000000pt" viewBox="0 0 24.000000 24.000000"
                                        preserveAspectRatio="xMidYMid meet">

                                        <g transform="translate(0.000000,24.000000) scale(0.100000,-0.100000)" fill="#FFFFFF"
                                            stroke="none">
                                            <path d="M12 224 c19 -6 23 -18 36 -94 l8 -45 78 0 79 0 13 45 c8 25 14 46 14
                48 0 1 -42 2 -93 2 -86 0 -93 2 -102 22 -6 13 -19 24 -30 25 -16 1 -16 1 -3
                -3z m204 -91 l-13 -38 -67 -3 c-70 -3 -68 -4 -80 51 l-6 27 89 0 90 0 -13 -37z"></path>
                                            <path d="M54 45 c-4 -9 -2 -21 4 -27 16 -16 47 -5 47 17 0 26 -42 34 -51 10z
                m39 -10 c1 -5 -6 -11 -15 -13 -11 -2 -18 3 -18 13 0 17 30 18 33 0z"></path>
                                            <path d="M164 45 c-4 -9 -2 -21 4 -27 16 -16 47 -5 47 17 0 26 -42 34 -51 10z
                m39 -10 c1 -5 -6 -11 -15 -13 -11 -2 -18 3 -18 13 0 17 30 18 33 0z"></path>
                                        </g>
                                    </svg>
                                </div>
                        </div>
                        <p className="product-name">Nike Air Huarache Le</p>
                        <p className="price">$19.99</p>
                    </div>
                </div>

                <div className="col-sm-12 col-md-4 col-lg-4 mb-5">
                    <div className="product-card">
                        <div className="product-action-container">
                            <img src="https://cdn.shopify.com/s/files/1/0087/6193/3920/products/DD1381200_DEOA_2_720x.jpg?v=1612816087"
                                style={{width: "100%"}} />
                                <div className="addtocart">
                                    <svg className="cart" version="1.0" xmlns="http://www.w3.org/2000/svg" width="24.000000pt"
                                        height="24.000000pt" viewBox="0 0 24.000000 24.000000"
                                        preserveAspectRatio="xMidYMid meet">

                                        <g transform="translate(0.000000,24.000000) scale(0.100000,-0.100000)" fill="#FFFFFF"
                                            stroke="none">
                                            <path d="M12 224 c19 -6 23 -18 36 -94 l8 -45 78 0 79 0 13 45 c8 25 14 46 14
                48 0 1 -42 2 -93 2 -86 0 -93 2 -102 22 -6 13 -19 24 -30 25 -16 1 -16 1 -3
                -3z m204 -91 l-13 -38 -67 -3 c-70 -3 -68 -4 -80 51 l-6 27 89 0 90 0 -13 -37z"></path>
                                            <path d="M54 45 c-4 -9 -2 -21 4 -27 16 -16 47 -5 47 17 0 26 -42 34 -51 10z
                m39 -10 c1 -5 -6 -11 -15 -13 -11 -2 -18 3 -18 13 0 17 30 18 33 0z"></path>
                                            <path d="M164 45 c-4 -9 -2 -21 4 -27 16 -16 47 -5 47 17 0 26 -42 34 -51 10z
                m39 -10 c1 -5 -6 -11 -15 -13 -11 -2 -18 3 -18 13 0 17 30 18 33 0z"></path>
                                        </g>
                                    </svg>
                                </div>
                        </div>
                        <p className="product-name">Nike Air Huarache Le</p>
                        <p className="price">$19.99</p>
                    </div>
                </div>

            </div>
        )
    }
}

export default ProductList;