import React, { Component } from 'react'
import "./card.css"
import { useLocation, useNavigate, useParams } from "react-router-dom";

function withParams(Component) {
    return props => <Component
        {...props}
        location={useLocation()}
        navigate={useNavigate()}
        params={useParams()} />;
}

class ProductList extends Component {
    //constructor
    constructor(props) {
        super(props)
        this.state = {}
    }
    componentDidMount() {
        //console.log(this.props)
    }
    componentDidUpdate(prevProps) {
        if (this.props.products !== prevProps.products) // Check if it's a new user, you can also use some unique property, like the ID  (this.props.user.id !== prevProps.user.id)
        {
            console.log(this.props.products)
        }
    }
    render() {
        const { products } = this.props;
        const totalProducts = products.length;

        if (totalProducts === 0)
            return null;

        return (
            <div className="row">
                {products.map((thisproduct, index) => {
                    const { id, name, brand, prices, category, gallery, inStock } = thisproduct;
                    //console.log("thisproduct", thisproduct);
                    return (<div key={index} className="col-sm-12 col-md-4 col-lg-4 mb-5" onClick={()=>{inStock && this.props.navigate(`/productdetail/${id}`)}}>
                        <div className={inStock ? "product-card" : "out-of-stock"}>
                            <div className="product-action-container">
                                <img src={gallery[0]} alt={`${name} image`} style={{ width: "100%", height: "21.5vw", objectFit: "contain" }} />
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
                            <p className="product-name">{`${brand} ${name}`}</p>
                            <p className="price">{`${prices[0]["currency"].symbol} ${prices[0].amount}`}</p>

                            <div className="overlay">
                                <div className="overlay-text">OUT OF STOCK</div>
                            </div>
                        </div>
                    </div>)
                })}
                {/* <div className="col-sm-12 col-md-4 col-lg-4 mb-5">
                    <div className="product-card">
                        <div className="product-action-container">
                            <img src="https://cdn.shopify.com/s/files/1/0087/6193/3920/products/DD1381200_DEOA_2_720x.jpg?v=1612816087"
                                style={{ width: "100%" }} />
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
                                style={{ width: "100%" }} />
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
                                style={{ width: "100%" }} />
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
                                style={{ width: "100%" }} />
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
                                style={{ width: "100%" }} />
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
                                style={{ width: "100%" }} />
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
                </div> */}

            </div>
        )
    }
}

export default withParams(ProductList);

// productList.js

// import { useNavigate } from 'react-router-dom';

// export const withRouter = (Component) => {
//   const Wrapper = (props) => {
//     const navigate = useNavigate();
    
//     return (
//       <Component
//         navigate={navigate}
//         {...props}
//         />
//     );
//   };
  
//   return Wrapper;
// };


// redirectToProductDetails(productId) {
//         //this.props.history.push(`/productdetail/${productId}`)
//         console.log(productId);
//         this.props.navigate(`/productdetail/${productId}`);
//     }

// onClick={()=>{this.redirectToProductDetails(id)}}

// export default withRouter(ProductList);