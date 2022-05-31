const INITIAL_STATE = {
    cart: [],
    selectedCategory: "all",
    selectedCurrency: { symbol: "$", label: "USD" },
    snackbar: { open: false, message: "", variant: "" },
    modal: { show: false, productid: "" }
}

const defaultHandler = (state, action) => {
    switch (action.type) {
        case "SET_CATEGORY":
            return ({
                ...state,
                selectedCategory: action.data
            });
        case "SET_CURRENCY":
            return ({
                ...state,
                selectedCurrency: action.data
            });
        case "ADD_TO_CART":
            return ({
                ...state,
                cart: [...state.cart, action.data]
            });
        case "REMOVE_FROM_CART":
            return ({
                ...state,
                cart: [...state.cart.filter(item => item.uniqueItemID !== action.data.uniqueItemID)]
            });
        case "CLEAR_CART":
            return ({
                ...state,
                cart: []
            });
        case "UPDATE_CART":
            return ({
                ...state,
                cart: state.cart.map(item => item.uniqueItemID === action.data.uniqueItemID ? action.data : item)
            });
        case "SHOW_SNACKBAR":
            return ({
                ...state,
                snackbar: action.data
            });
        case "HIDE_SNACKBAR":
            return ({
                ...state,
                snackbar: { open: false, message: "", variant: "" }
            });
        case "SHOW_MODAL":
            return ({
                ...state,
                modal: { show: true, productid: action.data }
            });
        case "HIDE_MODAL":
            return ({
                ...state,
                modal: { show: false, productid: "" }
            });
        default:
            return state = INITIAL_STATE;
    }
}
export default defaultHandler;