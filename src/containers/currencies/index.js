import React, { Component } from 'react'

class Currencies extends Component {
    render() {
        return (
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
                        <label className="currency">$ USD</label>
                        <label className="currency">€ EUR</label>
                        <label className="currency">¥ JPY</label>
                    </div>
                </div>
            </li>
        )
    }
}

export default Currencies;
