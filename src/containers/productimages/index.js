import React, { Component } from 'react'
//import "./style.css"

class ProductImages extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            gallery: [],
            selectedImage: ""
        }
    }    
    componentDidUpdate(prevProps, prevState) {
        if(prevProps.images !== this.props.images)
            this.setState({ gallery: this.props.images, selectedImage: this.props.images[0], name: this.props.name });
    }
    render() {
        const { gallery, selectedImage, name } = this.state;
        return (
            <div className="col-sm-12 col-md-8 col-lg-8">
                <div className="row">
                    <div className="col-sm-4 col-md-2 col-lg-2 mini-image-holder" style={{ textAlign: "center" }}>
                        {gallery.map((image, index) => {
                            return (
                                <img key={index} src={image} alt={`${name}-${index}`} className="product-mini-image" onClick={() => { this.setState({ selectedImage: image }) }} />
                            )
                        })}
                    </div>
                    <div className="col-sm-8 col-md-10 col-lg-10">
                        <img src={selectedImage} alt={`${name}-selected`} className="product-image" />
                    </div>
                </div>
            </div>
        )
    }
}

export default ProductImages;
