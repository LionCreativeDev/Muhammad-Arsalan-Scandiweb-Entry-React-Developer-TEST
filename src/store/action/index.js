const setSelectedCategory = (category) =>{
    const serializedState = JSON.stringify({selectedCategory: category});
    localStorage.setItem("selectedCategory", serializedState);

    return (dispatch) =>{
        dispatch({ type: "SET_CATEGORY", data: category });
    }
}

const setSelectedCurrency = (currency) =>{
    const {symbol, label} = currency;
    const serializedState = JSON.stringify([{symbol: symbol, label: label}]);
    localStorage.setItem("selectedCurrency", serializedState);

    return (dispatch) =>{
        dispatch({ type: "SET_CURRENCY", data: {symbol: symbol, label: label} });
    }
}

const addToCart = (cartItem) =>{
    return (dispatch) =>{
        dispatch({ type: "ADD_TO_CART", data: cartItem });
    }
}

const removeFromCart = (cartItem) =>{
    return (dispatch) =>{
        dispatch({ type: "REMOVE_FROM_CART", data: cartItem });
    }
}

const updateCart = (cartItem) =>{
    return (dispatch) =>{
        dispatch({ type: "UPDATE_CART", data: cartItem });
    }
}

const showSnackBar = (options) =>{
    return (dispatch) =>{
        dispatch({ type: "SHOW_SNACKBAR", data: options });
    }
}

const hideSnackBar = () =>{
    return (dispatch) =>{
        dispatch({ type: "HIDE_SNACKBAR" });
    }
}

const showModal = (product) =>{
    return (dispatch) =>{
        dispatch({ type: "SHOW_MODAL", data: product });
    }
}

const hideModal = () =>{
    return (dispatch) =>{
        dispatch({ type: "HIDE_MODAL" });
    }
}

export {
    setSelectedCategory,
    setSelectedCurrency,
    addToCart,
    removeFromCart,
    updateCart,
    showSnackBar,
    hideSnackBar,
    showModal,
    hideModal
}