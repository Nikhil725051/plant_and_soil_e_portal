import { createContext, useReducer } from "react";

export const AuthContext = createContext();

export const AUTH_LOADING = 'AUTH_LOADING';
export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const AUTH_FAILED = 'AUTH_FAILED';


function userReducer(state, action) {
    switch (action.type) {
        case AUTH_LOADING: {
            return { ...state, isLoading: true }
        }
        case AUTH_SUCCESS: {
            return { ...state, isLoading: false, user: action.payload }
        }
        case AUTH_FAILED: {
            return { ...state, isLoading: false, err: action.payload, user: null }
        }
        default: return state;
    }
}

function ContextProvider({ children }) {

    const initialState = {
        user: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null,
        isLoading: false,
        err: null
    }


    const [state, dispatch] = useReducer(userReducer, initialState);


    return (<AuthContext.Provider value={{ user: state, dispatch: dispatch }}>
        {children}
    </AuthContext.Provider>)
}

export default ContextProvider;