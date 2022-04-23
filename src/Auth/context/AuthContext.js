import {createContext, useReducer} from "react";
import authReducer from "./AuthReducer";

const AuthContext = createContext()

export const AuthProvider = ({children}) => {
    const initialState = {
        login: false
    }

    const [state, dispatch] = useReducer(authReducer, initialState)

    const setLogin = () => dispatch({type: 'SET_LOGIN'})
    const setLogout = () => dispatch({type: 'SET_LOGOUT'})

    return <AuthContext.Provider value={{
        login: state.login,
        setLogin,
        setLogout
    }}>
        {children}
    </AuthContext.Provider>
}

export default AuthContext;
