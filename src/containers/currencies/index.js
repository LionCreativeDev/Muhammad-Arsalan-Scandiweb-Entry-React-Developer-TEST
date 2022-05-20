import React, { Component } from 'react'

import { connect } from "react-redux";//to connect with redux store
import { setSelectedCurrency } from "../../store/action";

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

class Currencies extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Currencies: [],
            currencySelectorOpen: false,
            selectedCurrency: { symbol: "$", label: "USD" }
        }
        this.ref = React.createRef();
        this.handleClickOutside = this.handleClickOutside.bind(this);
    }
    handleClickOutside(event) {
        if (this.ref.current && !this.ref.current.contains(event.target)) {
            this.props.onClickOutside && this.props.onClickOutside();
            //console.log("clicked outside");
            if (this.state.currencySelectorOpen)
                this.setState({ currencySelectorOpen: false });
        }
    };
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
                //console.log("currencies", data);
                if (data) {
                    this.setState({
                        Currencies: data["currencies"]
                    })
                }
            });
    }
    componentDidMount() {
        this.fecthCurrencies();
        document.addEventListener('click', this.handleClickOutside, true);

        if (localStorage.getItem("selectedCurrency") !== null) {
            const saveSelectedCurrency = JSON.parse(localStorage.getItem("selectedCurrency"));
            if (this.props.selectedCurrency.label !== saveSelectedCurrency.label && this.props.selectedCurrency.symbol !== saveSelectedCurrency.symbol)
                this.props.setSelectedCurrency({ symbol: saveSelectedCurrency[0].symbol, label: saveSelectedCurrency[0].label })//console.log(saveSelectedCurrency);
        }
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevProps.selectedCurrency !== this.props.selectedCurrency)
            this.setState({ selectedCurrency: this.props.selectedCurrency });
    }
    componentWillUnmount() {
        document.removeEventListener('click', this.handleClickOutside, true);
    };
    render() {
        const AllCurrencies = this.state.Currencies;
        const { symbol } = this.state.selectedCurrency;
        //console.log("AllCurrencies", AllCurrencies);

        return (
            <ApolloProvider client={client}>
                <li ref={this.ref} style={{ margin: 0, padding: 0 }} onClick={() => { this.setState({ currencySelectorOpen: (this.state.currencySelectorOpen ? false : true) }) }}>
                    <div className="currency-dropdown">
                        <div className="currency-dropbtn">
                            <label className="currency">{symbol}</label>
                            <svg style={{ transform: (this.state.currencySelectorOpen ? "rotate(180deg)" : "rotate(0deg)") }} className="chevron-down" version="1.0" xmlns="http://www.w3.org/2000/svg"
                                width="20.000000pt" height="20.000000pt" viewBox="0 0 20.000000 20.000000"
                                preserveAspectRatio="xMidYMid meet">

                                <g transform="translate(0.000000,20.000000) scale(0.100000,-0.100000)"
                                    fill="#000000" stroke="none">
                                    <path
                                        d="M30 134 c0 -6 16 -25 35 -44 l35 -34 35 34 c19 19 35 38 35 44 0 5 -16 -5 -35 -24 l-35 -34 -35 34 c-19 19 -35 29 -35 24z" />
                                </g>
                            </svg>
                        </div>

                        <div className={`currency-dropdown-content ${this.state.currencySelectorOpen ? "show" : "hide"}`}>
                            {AllCurrencies.map((currency, index) => {
                                return (<label key={index} className="currency" onClick={() => { this.props.setSelectedCurrency(currency) }}>{`${currency.symbol} ${currency.label}`}</label>)
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

const mapStateToProp = (state) => ({
    selectedCurrency: state.selectedCurrency
})
const mapDispatchToProp = (dispatch) => ({
    setSelectedCurrency: (selectedCurrency) => dispatch(setSelectedCurrency(selectedCurrency))
})

export default connect(mapStateToProp, mapDispatchToProp)(Currencies);
