const INITIAL_STATE = {
    cart: [],
    selectedCategory: "all",
    selectedCurrency: { symbol: "$", label: "USD" },
    snackbar: { open: false, message: "", variant: "" }
}

//export default (state, action) => {
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
                cart: [...state.cart.filter(item => item.id !== action.data)]
            });
        case "CLEAR_CART":
            return ({
                ...state,
                cart: []
            });
        case "UPDATE_CART":
            return ({
                ...state,
                cart: [...state.cart.map(item => item.id === action.data.id ? action.data : item)]
                //cart: state.cart.map(item => item.id === action.data.id ? action.data : null)
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
        // case "STORETOPCURRENCIES":
        //     return ({
        //         ...state,
        //         topcurrencies: action.data
        //     });
        // case "STOREONBOARDINGCURRENCIES":
        //     return ({
        //         ...state,
        //         onboardingcurrencies: action.data
        //     });
        // case "STORERECENTCURRENCIES":
        //     return ({
        //         ...state,
        //         CoinGekoCurrencies: action.data.CoinGekoCurrencies,
        //         CoinMarketCapCurrencies: action.data.CoinMarketCapCurrencies
        //     });
        // case "STORESPARKLINE":
        //     return ({
        //         ...state,
        //         Sparkline: action.data
        //     });
        // case "ALERTS":
        //     return ({
        //         ...state,
        //         alerts: [action.data]
        //     });
        // case "REMOVEALERTS":
        //     return ({
        //         ...state,
        //         alerts: []
        //     });
        // case "LOGIN":
        //     return ({
        //         ...state,
        //         loggedin: action.data.loggedin,
        //         user: action.data.user
        //     });
        // case "LOGOUT":
        //     return ({
        //         ...state,
        //         loggedin: false,
        //         user: {}
        //     });
        // case "FRIENDSCHAT":
        //     return ({
        //         ...state, 
        //         chattingwith: action.data.chattingwith,
        //         chat: action.data.chat
        //     });
        default:
            return state = INITIAL_STATE;
    }
}
export default defaultHandler;