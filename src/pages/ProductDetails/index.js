import React, { Component } from 'react'
import Header from '../../containers/header';
import ProductDetail from '../../containers/productdetail';
import ProductImages from '../../containers/productimages';

class ProductDetails extends Component {
    render() {
        return (
            <>
                <Header />
                <div style={{ position: "relative", display: "block", paddingBottom: "100px" }}>
                    <div className="container">
                        <div className="row">
                            <ProductImages />
                            <ProductDetail />
                        </div>
                    </div>
                    <div className="loading"></div>
                </div>
            </>
        )
    }
}

export default ProductDetails;
