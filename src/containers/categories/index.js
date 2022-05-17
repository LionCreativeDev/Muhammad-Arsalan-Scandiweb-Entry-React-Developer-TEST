import React, { Component } from 'react'

// {
//     categories{
//       name
//     }
// }
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

class Categories extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Categories: [],
            selectedCategory: ""
        }
    }
    fecthCategories() {
        client.query({
            query: gql`
        {
            categories{
              name
            }
        }
      `}).then(result => {
                //console.log(result);
                const { loading, error, data } = result;
                // console.log("loading", loading);
                // console.log("error", error);
                // console.log("categories", data);
                if (data) {
                    this.setState({
                        Categories: data["categories"]
                    })
                }
            });
    }
    componentDidMount() {
        this.fecthCategories();
        //if user has not selected any category, then show all categories
        if (this.state.selectedCategory === "")
            this.setState({ selectedCategory: "all" });
    }
    render() {
        const AllCategories = this.state.Categories;
        //console.log("AllCategories", AllCategories);
        return (
            <ApolloProvider client={client}>
                <ul>
                    {AllCategories.map((category, index) => {
                        if (this.state.selectedCategory.toUpperCase() === category.name.toUpperCase()) {
                            return (
                                <li className="active" key={index}><div className="menu-item">{category.name.toUpperCase()}</div></li>
                            )
                        }
                        else {
                            return (
                                <li key={index}><div className="menu-item">{category.name.toUpperCase()}</div></li>
                            )
                        }
                    })}

                    {/* <li className="active"><div className="menu-item">WOMEN</div></li>
                    <li><div className="menu-item">MEN</div></li>
                    <li><div className="menu-item">KIDS</div></li> */}
                </ul>
            </ApolloProvider>
        )
    }
}

export default Categories;
