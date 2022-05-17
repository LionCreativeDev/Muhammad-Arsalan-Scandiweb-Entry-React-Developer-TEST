import React, { Component } from 'react'

// {
//     currencies{
//       label
//       symbol
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

class Currencies extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Currencies: []
        }
    }
    fecthCurrencies() {
        client.query({
            query: gql`
            {
                currencies{
                  label
                  symbol
                }
            }
      `}).then(result => {
                //console.log(result);
                const { loading, error, data } = result;
                // console.log("loading", loading);
                // console.log("error", error);
                // console.log("currencies", data);
                if (data) {
                    this.setState({
                        Currencies: data["currencies"]
                    })
                }
            });
    }
    componentDidMount() {
        this.fecthCurrencies();        
    }
    render() {
        const AllCurrencies = this.state.Currencies;
        //console.log("AllCurrencies", AllCurrencies);

        return (
            <ApolloProvider client={client}>
                <li style={{ margin: 0, padding: 0 }}>
                    <div className="currency-dropdown">
                        <div className="currency-dropbtn">
                            <label className="currency">$</label>
                            <svg className="chevron-down" version="1.0" xmlns="http://www.w3.org/2000/svg"
                                width="20.000000pt" height="20.000000pt" viewBox="0 0 20.000000 20.000000"
                                preserveAspectRatio="xMidYMid meet">

                                <g transform="translate(0.000000,20.000000) scale(0.100000,-0.100000)"
                                    fill="#000000" stroke="none">
                                    <path
                                        d="M30 134 c0 -6 16 -25 35 -44 l35 -34 35 34 c19 19 35 38 35 44 0 5 -16 -5 -35 -24 l-35 -34 -35 34 c-19 19 -35 29 -35 24z" />
                                </g>
                            </svg>
                        </div>

                        <div className="currency-dropdown-content">
                            {AllCurrencies.map((currency, index) => {
                                return (<label key={index} className="currency">{`${currency.symbol} ${currency.label}`}</label>)
                            })}
                            {/* <label className="currency">$ USD</label>
                            <label className="currency">€ EUR</label>
                            <label className="currency">¥ JPY</label> */}
                        </div>
                    </div>
                </li>
            </ApolloProvider>
        )
    }
}

export default Currencies;
