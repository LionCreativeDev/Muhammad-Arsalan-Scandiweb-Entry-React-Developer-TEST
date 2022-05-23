import React, { Component } from 'react'

import { useLocation, useNavigate, useParams } from "react-router-dom";

import { connect } from "react-redux";//to connect with redux store
import { setSelectedCategory } from "../../store/action";

import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
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

class Categories extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Categories: [],
            selectedCategory: "all"
        }
    }
    fetchCategories() {
        client.query({
            query: gql`
        {
            categories{
              name
            }
        }
      `}).then(result => {
                const { data } = result;

                if (data) {
                    this.setState({
                        Categories: data["categories"]
                    })
                }
            });
    }
    componentDidMount() {
        this.fetchCategories();
        
        if (localStorage.getItem("selectedCategory") !== null) {
            const saveSelectedCategory = JSON.parse(localStorage.getItem("selectedCategory"));

            if (this.props.selectedCategory !== saveSelectedCategory.selectedCategory)
                this.props.setSelectedCategory(saveSelectedCategory.selectedCategory);
        }
        else {
            this.props.setSelectedCategory("all");
        }
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevProps.selectedCategory !== this.props.selectedCategory) 
            this.setState({ selectedCategory: this.props.selectedCategory });
    }
    handleCategoryClick(category) {
        if (this.props.location.pathname.includes("/productdetail/") || this.props.location.pathname === "/cart") {
            this.setState({ selectedCategory: category.name });
            this.props.setSelectedCategory(category.name);
            this.props.navigate(`/`);
        }
        else {
            this.setState({ selectedCategory: category.name });
            this.props.setSelectedCategory(category.name);
        }
    }
    render() {
        const AllCategories = this.state.Categories;
        
        return (
            <ApolloProvider client={client}>
                <ul>
                    {AllCategories.map((category, index) => {
                        if (this.state.selectedCategory.toUpperCase() === category.name.toUpperCase())
                            return (<li className="active" key={index} onClick={() => this.handleCategoryClick(category)}><div className="menu-item medium-500">{category.name.toUpperCase()}</div></li>)
                        else
                            return (<li key={index} onClick={() => this.handleCategoryClick(category)}><div className="menu-item medium-500">{category.name.toUpperCase()}</div></li>)
                    })}
                </ul>
            </ApolloProvider>
        )
    }
}

const mapStateToProp = (state) => ({
    selectedCategory: state.selectedCategory
})
const mapDispatchToProp = (dispatch) => ({
    setSelectedCategory: (selectedCategory) => dispatch(setSelectedCategory(selectedCategory))
})

export default connect(mapStateToProp, mapDispatchToProp)(withParams(Categories));
