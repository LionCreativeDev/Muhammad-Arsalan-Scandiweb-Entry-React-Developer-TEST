import React, { Component } from 'react'

class PageHeading extends Component {
    render() {
        return (
            <div className="row">
                <div className="page-heading" style={{fontFamily: "'Raleway', sans-serif"}}>
                    <h1>{this.props.text.charAt(0).toUpperCase() + this.props.text.slice(1)}</h1>
                </div>
            </div>
        )
    }
}

export default PageHeading;
