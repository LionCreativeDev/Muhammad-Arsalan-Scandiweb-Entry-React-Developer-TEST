import React, { Component } from 'react'

class ImageGallery extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentIndex: 0,
            gallery: []
        }
    }
    componentDidMount() {
        if (this.props.item !== undefined) {
            this.setState({ gallery: this.props.item.gallery });
        }
    }
    handleProductImages(command) {
        const { currentIndex, gallery } = this.state;

        if (command === "previous") {
            if (currentIndex !== 0) {
                this.setState({ currentIndex: currentIndex - 1 });
            }
        } else if (command === "next") {
            if (currentIndex < gallery.length - 1)
                this.setState({ currentIndex: currentIndex + 1 });
        }
    }
    render() {
        const { currentIndex, gallery } = this.state;

        return (
            <>
                <img src={gallery[currentIndex]} className="main-cart-item-image" alt={this.props.item.name + " image"} />

                {gallery.length > 1 && (
                    <div className="image-controls-holder">
                        {/* <div className={currentIndex === 0 ? `disabled` : `enabled`} onClick={() => { this.handleProductImages("previous") }}>{"<"}</div>
                        <div className={currentIndex === gallery.length-1 ? `disabled` : `enabled`} onClick={() => { this.handleProductImages("next") }}>{">"}</div> */}
                        <div onClick={() => { this.handleProductImages("previous") }}>{"<"}</div>
                        <div onClick={() => { this.handleProductImages("next") }}>{">"}</div>
                    </div>)
                }
            </>
        )
    }
}

export default ImageGallery;
