import React, { Component } from 'react'
import logo from '../../logo.png';

class Logo extends Component {
  render() {
    return (
      <ul className='center'>
        <li><img src={logo} className="logo" alt="Logo" /></li>
      </ul>
    )
  }
}

export default Logo;
