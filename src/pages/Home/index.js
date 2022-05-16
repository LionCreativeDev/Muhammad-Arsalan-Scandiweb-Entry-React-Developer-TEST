import React, { Component } from 'react'
import Header from '../../containers/header';
import PageHeading from '../../containers/pageheading';
import ProductList from '../../containers/productList';

class Home extends Component {
    render() {
        return (
            <>
                <Header />
                <div style={{position: "relative", display: "block", paddingBottom:"100px"}}>
                    <div className="container">
                        <PageHeading text={"Category Name"} />
                        <ProductList />
                    </div>
                    <div class="loading"></div>
                </div>
            </>
        )
    }
}

export default Home;
