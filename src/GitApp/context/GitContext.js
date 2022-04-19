import {createContext, useReducer} from "react";
import gitReducer from "./GitReducer";

const GitContext = createContext()

export const GitProvider = ({children}) => {
    const initialState = {
        users: [],
        loading: true,
    }

    const [state, dispatch] = useReducer(gitReducer,initialState)


    const fetchUsers = async () => {
        const response = await fetch(`${process.env.REACT_APP_GITHUB_URL}/users`, {
            headers: {
                Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`
            }
        })
        const data = await response.json()

        dispatch({
            type: 'GET_USERS',
            payload: data
        })
    }


    return <GitContext.Provider value={{users: state.users, loading: state.loading, fetchUsers}}>
        {children}
    </GitContext.Provider>
}


export default GitContext
