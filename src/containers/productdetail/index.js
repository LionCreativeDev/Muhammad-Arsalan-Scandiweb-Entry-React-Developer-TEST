import React, { Component } from 'react'

class ProductDetail extends Component {
    render() {
        return (
            <div className="col-sm-12 col-md-4 col-lg-4 mb-5 pdp">
                <div className="product-Details">

                    <p className="product-brand">Apollo</p>
                    <p className="product-name">Running Short</p>

                    <div className="size-holder">
                        <p style={{color: "black",margin:"0 0 5px 0", fontWeight: "bold", fontFamily: "sans-serif"}}>SIZE:</p>
                        <div className="product-sizes">
                            <div className="product-size">XS</div>
                            <div className="product-size-selected">S</div>
                            <div className="product-size">M</div>
                            <div className="product-size">L</div>
                        </div>
                    </div>

                    <div className="color-holder">
                        <p style={{color: "black",margin:"0 0 5px 0", fontWeight: "bold", fontFamily: "sans-serif"}}>COLOR:</p>
                        <div className="product-colors">
                            <div className="product-color" style={{backgroundColor:"gray"}}></div>
                            <div className="product-color-selected" style={{backgroundColor:"black"}}></div>
                            <div className="product-color" style={{backgroundColor:"darkgreen"}}></div>
                            <div className="product-color" style={{backgroundColor:"darkorange"}}></div>
                        </div>
                    </div>

                    <div className="price-holder">
                        <p style={{color: "black",margin:"0 0 5px 0", fontWeight: "bold", fontFamily: "sans-serif"}}>PRICE:</p>
                        <p className="product-price">$19.99</p>
                    </div>

                    <button className="btn-primary mb-3" style={{fontFamily: "sans-serif"}}>ADD TO CART</button>

                    <p className="product-description">Find stunning women's cocktail dresses and party dresses. Stand out in lace and metallic cocktail dresses and party dresses from all your favorite brand.</p>
                </div>
            </div>
        )
    }
}

export default ProductDetail;