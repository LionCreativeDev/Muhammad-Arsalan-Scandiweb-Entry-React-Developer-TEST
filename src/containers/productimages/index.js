import React, { Component } from 'react'

class ProductImages extends Component {
    render() {
        return (
            <div className="col-sm-12 col-md-8 col-lg-8 mb-5">
                <div className="row">
                    <div className="col-sm-4 col-md-2 col-lg-2" style={{textAlign: "center"}}>
                        <img src="https://cdn.shopify.com/s/files/1/0087/6193/3920/products/DD1381200_DEOA_2_720x.jpg?v=1612816087" className="product-mini-image" />
                        <img src="https://cdn.shopify.com/s/files/1/0087/6193/3920/products/DD1381200_DEOA_2_720x.jpg?v=1612816087" className="product-mini-image" />
                        <img src="https://cdn.shopify.com/s/files/1/0087/6193/3920/products/DD1381200_DEOA_2_720x.jpg?v=1612816087" className="product-mini-image" />
                    </div>
                    <div className="col-sm-8 col-md-10 col-lg-10">
                        <img src="https://cdn.shopify.com/s/files/1/0087/6193/3920/products/DD1381200_DEOA_2_720x.jpg?v=1612816087" className="product-image" />
                    </div>
                </div>
            </div>
        )
    }
}

export default ProductImages;
