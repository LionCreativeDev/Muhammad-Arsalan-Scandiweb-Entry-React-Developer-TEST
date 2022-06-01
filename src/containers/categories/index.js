import React, { Component } from 'react'
import "./menu.css";

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
            selectedCategory: "all",
            menuOpen: false
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
    handleMenu() {
        const { menuOpen } = this.state;
        if (!menuOpen) {
            document.getElementsByClassName("menuitems")[0].style.display = "block";
            document.getElementsByClassName("loading")[0].style.display = "block";
            this.setState({ menuOpen: true });
        }
        else{
            document.getElementsByClassName("menuitems")[0].style.display = "none";
            document.getElementsByClassName("loading")[0].style.display = "none";
            this.setState({ menuOpen: false });
        }
    }
    render() {
        const AllCategories = this.state.Categories;

        return (
            <ApolloProvider client={client}>
                <ul className="menu">
                    {AllCategories.map((category, index) => {
                        if (this.state.selectedCategory.toUpperCase() === category.name.toUpperCase())
                            return (<li className="active" key={index} onClick={() => this.handleCategoryClick(category)}><div className="menu-item semibold-600">{category.name.toUpperCase()}</div></li>)
                        else
                            return (<li key={index} onClick={() => this.handleCategoryClick(category)}><div className="menu-item semibold-600">{category.name.toUpperCase()}</div></li>)
                    })}
                </ul>
                <ul className="mobile" style={{ display: "none" }}>
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} onClick={() => { this.handleMenu() }}>
                            <path style={{ fill: "none", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", stroke: "#000", strokeOpacity: 1, strokeMiterlimit: 10, }} d="M16.003 26.002h39.994M16.003 36h39.994M16.003 45.998h39.994" transform="scale(.55556)" />
                        </svg>
                    </li>
                    <div className="menuitems">
                        {AllCategories.map((category, index) => {
                            if (this.state.selectedCategory.toUpperCase() === category.name.toUpperCase())
                                return (<li className="active" key={index} onClick={() => this.handleCategoryClick(category)}><div className="menu-item semibold-600">{category.name.toUpperCase()}</div></li>)
                            else
                                return (<li key={index} onClick={() => this.handleCategoryClick(category)}><div className="menu-item semibold-600">{category.name.toUpperCase()}</div></li>)
                        })}
                    </div>
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
