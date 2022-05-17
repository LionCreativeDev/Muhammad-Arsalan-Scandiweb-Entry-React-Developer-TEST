import React, { Component } from 'react'
import Header from '../../containers/header';
import PageHeading from '../../containers/pageheading';
import ProductList from '../../containers/productList';

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

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            products: []
        }
    }
    fecthProducts() {
        client.query({
            query: gql`
            query GetProductsInAllCategory {
              category(input: {title:"all"}) {
                name
                products {
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
            }
            `
        }).then(result => {
            //console.log(result);
            const { loading, error, data } = result;
            //console.log("loading", loading);
            //console.log("error", error);
            //console.log("products", data["category"]["products"]);
            if (data)
                this.setState({ products: data["category"]["products"] });
        });
    }
    componentDidMount() {
        this.fecthProducts();
    }
    render() {
        return (
            <>
                <ApolloProvider client={client}>
                    <Header />
                    <div style={{ position: "relative", display: "block", paddingBottom: "100px" }}>
                        <div className="container">
                            <PageHeading text={"Category Name"} />
                            <ProductList products={this.state.products} />
                        </div>
                        <div className="loading"></div>
                    </div>
                </ApolloProvider>
            </>
        )
    }
}

export default Home;
