import React, { Component } from 'react'

class Categories extends Component {
    render() {
        return (
            <ul>
                <li className="active"><a href="#">WOMEN</a></li>
                <li><a href="#">MEN</a></li>
                <li><a href="#">KIDS</a></li>
            </ul>
        )
    }
}

export default Categories;
