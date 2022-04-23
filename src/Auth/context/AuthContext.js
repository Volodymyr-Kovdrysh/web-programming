import {createContext, useReducer} from "react";
import authReducer from "./AuthReducer";
import {toast} from "react-toastify";

const AuthContext = createContext()

export const AuthProvider = ({children}) => {
    const initialState = {
        loading: false,
        login: false,
        toast,
    }

    const [state, dispatch] = useReducer(authReducer, initialState)

    const loginUser = async (formData) => {
        setLoading('Будь ласка, зачекайте...')
        const params = new URLSearchParams({
            action: 'LOGIN'
        })
        const response = await fetch(`${process.env.REACT_APP_AUTH}?${params}`,
            {
                method: 'post',
                body: JSON.stringify(formData)
            })
        const data = await response.json()
        console.log('data',data)
        dispatch({
            type: 'LOGIN',
            payload: data
        })
    }

    const registerUser = async (email) => {
        // toast.loading("Please wait...")
        setLoading('Будь ласка, зачекайте...')
        const params = new URLSearchParams({
            action: 'REGISTER',

        })
        const response = await fetch(`${process.env.REACT_APP_AUTH}?${params}`,
            {
                method: "post",
                body: JSON.stringify( { email })
        })
        const data = await response.json()
        dispatch({
            type: 'REGISTER',
            payload: data
        })

    }

    const setLogin = () => dispatch({type: 'SET_LOGIN'})
    const setLogout = () => dispatch({type: 'SET_LOGOUT'})
    const setLoading = (msg) => dispatch({type: 'SET_LOADING', payload: {msg}})

    return <AuthContext.Provider value={{
        login: state.login,
        setLogin,
        setLogout,
        registerUser,
        loginUser
    }}>
        {children}
    </AuthContext.Provider>
}

export default AuthContext;
