import React, { Component } from 'react'
import "./style.css"

class ProductImages extends Component {
    constructor(props) {
        super(props)
        this.state = {
            gallery: [],
            selectedImage: ""
        }
    }
    componentDidMount() {
        //console.log("props", this.props.images);
        // if (this.props.images.length > 0)
        //     this.setState({ gallery: this.props.images, selectedImage: this.props.images[0] });
    }
    componentDidUpdate(prevProps, prevState) {
        if(prevProps.images !== this.props.images)
            this.setState({ gallery: this.props.images, selectedImage: this.props.images[0] });
    }
    render() {
        const { gallery, selectedImage } = this.state;
        return (
            <div className="col-sm-12 col-md-8 col-lg-8">
                <div className="row">
                    <div className="col-sm-4 col-md-2 col-lg-2 mini-image-holder" style={{ textAlign: "center" }}>
                        {gallery.map((image, index) => {
                            return (
                                <img key={index} src={image} className="product-mini-image" onClick={() => { this.setState({ selectedImage: image }) }} />
                            )
                        })}
                        {/* <img src="https://cdn.shopify.com/s/files/1/0087/6193/3920/products/DD1381200_DEOA_2_720x.jpg?v=1612816087" className="product-mini-image" />
                        <img src="https://cdn.shopify.com/s/files/1/0087/6193/3920/products/DD1381200_DEOA_2_720x.jpg?v=1612816087" className="product-mini-image" />
                        <img src="https://cdn.shopify.com/s/files/1/0087/6193/3920/products/DD1381200_DEOA_2_720x.jpg?v=1612816087" className="product-mini-image" /> */}
                    </div>
                    <div className="col-sm-8 col-md-10 col-lg-10">
                        <img src={selectedImage} className="product-image" />
                    </div>
                </div>
            </div>
        )
    }
}

export default ProductImages;
