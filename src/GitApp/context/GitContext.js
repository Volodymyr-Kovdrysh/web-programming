import {createContext, useEffect, useState} from "react";

const GitContext = createContext()

export const GitProvider = ({children}) => {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(()=>{
        fetchUsers()

    }, [])

    const fetchUsers = async () => {
        const response = await fetch(`${process.env.REACT_APP_GITHUB_URL}/users`, {
            headers: {
                Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`
            }
        })
        const data = await response.json()

        setUsers(data)
        setLoading(false)
    }


    return <GitContext.Provider value={{users, loading}}>
        {children}
    </GitContext.Provider>
}


export default GitContext
