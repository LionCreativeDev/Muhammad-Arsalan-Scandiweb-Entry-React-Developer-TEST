import React, { Component } from 'react'

class ProductDetail extends Component {
    constructor(props) {
        super(props)
        this.state = {
            product: {},
        }
    }
    componentDidMount() {
        //console.log("props", this.props.product);
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevProps.product !== this.props.product) {
            this.setState({ product: this.props.product });
            //console.log("product", this.props.product);
            //console.log(`${this.props.product.prices[0]["currency"].symbol} ${this.props.product.prices[0].amount}`);
            //{description.toString().replace("<p>","").replace("</p>","")}
        }
    }
    render() {
        const { id, name, brand, description, prices, inStock, attributes } = this.state.product;

        if (name === undefined)
            return null;

        //attributes.filter(obj => { return obj.name === "6" })
        const Capacity = attributes.find(attr => attr.name === "Capacity");
        const Color = attributes.find(attr => attr.name === "Color");
        const Size = attributes.find(attr => attr.name === "Size");

        // console.log("Capacity", Capacity)
        // console.log("Color", Color)
        // console.log("Size", Size)

        return (
            <div className="col-sm-12 col-md-4 col-lg-4 pdp">
                <div className="product-Details">

                    <p className="product-brand">{brand}</p>
                    <p className="product-name">{name}</p>

                    {Capacity &&
                        (<div className="capacity-holder">
                            <p style={{ color: "black", margin: "0 0 5px 0", fontWeight: "bold", fontFamily: "sans-serif" }}>CAPACITY:</p>
                            <div className="product-capacities">
                                {Capacity.items.map((item, index) => {
                                    return (<div key={index} className="product-capacity">{item.displayValue}</div>)
                                })}
                                {/* <div className="product-capacity">512G</div>
                                <div className="product-capacity-selected">1T</div> */}
                            </div>
                        </div>)
                    }

                    {Size && (
                        <div className="size-holder">
                            <p style={{ color: "black", margin: "0 0 5px 0", fontWeight: "bold", fontFamily: "sans-serif" }}>SIZE:</p>
                            <div className="product-sizes">
                                {Size.items.map((item, index) => {
                                    return (<div key={index} className="product-size">{item.value}</div>)
                                })}
                                {/* <div className="product-size">XS</div>
                                <div className="product-size-selected">S</div>
                                <div className="product-size">M</div>
                                <div className="product-size">L</div> */}
                            </div>
                        </div>)
                    }

                    {Color &&
                        (<div className="color-holder">
                            <p style={{ color: "black", margin: "0 0 5px 0", fontWeight: "bold", fontFamily: "sans-serif" }}>COLOR:</p>
                            <div className="product-colors">
                                {Color.items.map((item, index) => {
                                    return (<div className="product-color" style={{ backgroundColor: item.value }}></div>)
                                })}
                                {/* <div className="product-color" style={{ backgroundColor: "gray" }}></div>
                                <div className="product-color-selected" style={{ backgroundColor: "black" }}></div>
                                <div className="product-color" style={{ backgroundColor: "darkgreen" }}></div>
                                <div className="product-color" style={{ backgroundColor: "darkorange" }}></div> */}
                            </div>
                        </div>)
                    }

                    <div className="price-holder">
                        <p style={{ color: "black", margin: "0 0 5px 0", fontWeight: "bold", fontFamily: "sans-serif" }}>PRICE:</p>
                        <p className="product-price">{`${prices[0]["currency"].symbol} ${prices[0].amount}`}</p>
                    </div>

                    <button className="btn-primary mb-3" style={{ fontFamily: "sans-serif" }}>ADD TO CART</button>

                    <p className="product-description" dangerouslySetInnerHTML={{ __html: description }}></p>
                </div>
            </div>
        )
    }
}

export default ProductDetail;