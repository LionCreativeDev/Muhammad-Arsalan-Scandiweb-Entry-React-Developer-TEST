import React, { Component } from 'react'
import "./modal.css";

import { connect } from "react-redux";//to connect with redux store
import { hideModal } from "../../store/action";
import ProductDetails from '../../pages/ProductDetails';

class ProductModal extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    handleClickOutside = (event) => {
        if (event.target.className === "modal") {
            this.props.hideModal();
        }
    };
    componentDidMount(){
        document.addEventListener('click', this.handleClickOutside.bind(this), true);
    }
    componentWillUnmount() {
        document.removeEventListener('click', this.handleClickOutside.bind(this), true);
    }
    render() {
        return (
            <div className="modal">

                <div className="modal-content">
                    <span className="close" onClick={() => { this.props.hideModal() }}>&times;</span>
                    <ProductDetails productid={this.props.modal.productid} />
                </div>

            </div>
        )
    }
}

const mapStateToProp = (state) => ({
    modal: state.modal
})
const mapDispatchToProp = (dispatch) => ({
    hideModal: () => dispatch(hideModal())
})

export default connect(mapStateToProp, mapDispatchToProp)(ProductModal);
