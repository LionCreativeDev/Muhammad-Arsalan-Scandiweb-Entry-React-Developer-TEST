import React, { Component } from 'react'

class PageHeading extends Component {
    render() {
        return (
            <div className="row">
                <div className="page-heading">
                    <h1>{this.props.text}</h1>
                </div>
            </div>
        )
    }
}

export default PageHeading;
