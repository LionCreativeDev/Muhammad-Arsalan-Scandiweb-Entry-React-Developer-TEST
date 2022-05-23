import React, { Component } from 'react'
import "./snackBar.css";

import { connect } from "react-redux";//to connect with redux store
import { hideSnackBar } from "../../store/action";

class SnackBar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            snackbar: { open: false, message: "", variant: ""}
        }
    }
    closeButtonHandler() {
        this.props.hideSnackBar();
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevProps.snackbar !== this.props.snackbar) {
            this.setState({ snackbar: this.props.snackbar });

            if(this.props.snackbar.open) {
                setTimeout(() => {
                    this.props.hideSnackBar();
                }, 3000);
            }
        }
    }
    render() {
        const { open, message, variant } = this.state.snackbar;

        if (!open)
            return null;

        let variantClass = '';
        if (open)
            if (variant === "info")
                variantClass = "snack-info";
            else if (variant === "success")
                variantClass = "snack-success";
            else if (variant === "danger")
                variantClass = "snack-danger";
            else if (variant === "warning")
                variantClass = "snack-warning";

        return (
            <div className={`toast ${variantClass}`}>
                <div className="toast-body-holder">
                    <div className="toast-body">{message}</div>
                    <button type="button" className={`btn-close ${variantClass}`} onClick={() => { this.closeButtonHandler() }}>x</button>
                </div>
            </div>
        )
    }
}

const mapStateToProp = (state) => ({
    snackbar: state.snackbar
})
const mapDispatchToProp = (dispatch) => ({
    hideSnackBar: () => dispatch(hideSnackBar())
})

export default connect(mapStateToProp, mapDispatchToProp)(SnackBar);
