import React, { Component } from 'react'
//import Header from '../../containers/header';
import ProductDetail from '../../containers/productdetail';
import ProductImages from '../../containers/productimages';

import { useLocation, useNavigate, useParams } from "react-router-dom";
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    //useQuery,
    gql
} from "@apollo/client";

const client = new ApolloClient({
    uri: 'http://localhost:4000/',
    cache: new InMemoryCache()
});

function withParams(Component) {
    return props => <Component
        {...props}
        location={useLocation()}
        navigate={useNavigate()}
        params={useParams()} />;
}

class ProductDetails extends Component {
    constructor(props) {
        super(props)
        this.state = {
            product: []
        }
    }
    fecthProductDetails(productid) {
        client.query({
            query: gql`
            {
                product(id:"${productid}") {
                  id
                  name
                  inStock
                  gallery
                  description
                  category
                  attributes {
                    id
                    name
                    type
                    items {
                      id
                      value
                      displayValue
                    }
                  }
                  prices {
                    currency {
                      label
                      symbol
                    }
                    amount
                  }
                  brand
                }
              }
      `}).then(result => {
                //console.log(result);
                const { loading, error, data } = result;
                // console.log("loading", loading);
                // console.log("error", error);
                // console.log("product", data["product"]);
                if (data) {
                    this.setState({
                        product: data["product"]
                    })
                }
            });
    }
    componentDidMount() {
        //console.log(this.props.params);
        //onClick={()=>{this.props.navigate(-1)}}
        this.fecthProductDetails(this.props.params.productId)
    }
    render() {
        const product = this.state.product;

        return (
            <>
                {/* <Header /> */}
                <div style={{ position: "relative", display: "block" }}>
                    <div className="container">
                        <div className="row">
                            <ProductImages images={product.gallery} />
                            <ProductDetail product={product} />
                        </div>
                    </div>
                    <div className="loading"></div>
                </div>
            </>
        )
    }
}

export default withParams(ProductDetails);

// import { useParams } from "react-router-dom";

// function withParams(Component) {
//   return props => <Component {...props} params={useParams()} />;
// }

// withParams(ProductDetails)