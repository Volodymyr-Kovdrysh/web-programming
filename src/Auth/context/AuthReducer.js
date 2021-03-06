import {toast} from "react-toastify";

const authReducer = (state, action) => {
    switch (action.type) {
        case 'REGISTER':
            return {
                ...state,
                login: false,
                loading: false,
                toast: toast.update(state.toast,{ render: action.payload.status, type: "success", isLoading: false, autoClose: 2000 })
            }
        case 'LOGIN':
            return {
                ...state,
                login: action.payload.login,
                loading: false,
                toast: toast.update(state.toast,{ render: action.payload.status,
                    type: `${action.payload.login ? 'succes':"warning"}`, isLoading: false, autoClose: 2000 })
            }
        case 'SET_LOGIN':
            return {
                ...state,
                login: true
            }
        case 'SET_LOGOUT':
            return {
                ...state,
                login: false
            }
        case 'SET_LOADING':
            return {
                ...state,
                loading: true,
                toast: toast.loading(action.payload.msg)

            }
        default:
            return state
    }
}

export default authReducer
