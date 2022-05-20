const setSelectedCategory = (category) =>{
    //console.log("setSelectedCategory", category);
    const serializedState = JSON.stringify({selectedCategory: category});
    localStorage.setItem("selectedCategory", serializedState);

    return (dispatch) =>{
        dispatch({ type: "SET_CATEGORY", data: category });
    }
}

const setSelectedCurrency = (currency) =>{
    //console.log("setSelectedCurrency", currency);
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

export {
    setSelectedCategory,
    setSelectedCurrency,
    addToCart,
    updateCart,
    showSnackBar,
    hideSnackBar
}