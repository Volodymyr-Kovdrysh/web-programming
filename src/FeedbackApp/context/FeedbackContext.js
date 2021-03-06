import {v4 as uuidv4} from 'uuid'
import {createContext, useEffect, useState} from "react";
import  getData from "../data/Utils";

const FeedbackContext = createContext()

export const FeedBackProvider = ({children}) => {
    const [isLoading, setIsLoading] = useState(true)
    const [feedback, setFeedback] = useState([])

    useEffect(()=>{


        getData(`${process.env.REACT_APP_GOOGLE_SCRIPT_ID}?action=GET`).then(data => {
            setFeedback(data.feedback.reverse())
            setIsLoading(false)
        })
    },[])

    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false,
    })

    const addFeedback = (newFeedback) => {
        setIsLoading(true)
        newFeedback.id = uuidv4()

        getData(`${process.env.REACT_APP_GOOGLE_SCRIPT_ID}?action=POST&id=${newFeedback.id}&rating=${newFeedback.rating}&text=${newFeedback.text}`).then(data => {

            setFeedback(data.feedback.reverse())

            setIsLoading(false)
        })

    }

    const deleteFeedback = (id) => {

        if(window.confirm('Ви впевнені, що хочете видалити цей важливий відгук??')
        ){
            setIsLoading(true)
            // setFeedback(feedback.filter(msg => msg.id !== id))
            getData(`${process.env.REACT_APP_GOOGLE_SCRIPT_ID}?action=DELETE&id=${id}`).then(data => {

                setFeedback(data.feedback.reverse())
                setIsLoading(false)
            })
        }

    }

    // update feedback item
    const updateFeedback = (id, updItem) => {
        setIsLoading(true)
        getData(`${process.env.REACT_APP_GOOGLE_SCRIPT_ID}?action=PUT&id=${id}&rating=${updItem.rating}&text=${updItem.text}`).then(data => {

            setFeedback(data.feedback.reverse())
            setIsLoading(false)
        })
    }

    const editFeedback = (item) => {
        setFeedbackEdit({item, edit: true})
    }

    return <FeedbackContext.Provider value={{
        feedback,
        feedbackEdit,
        isLoading,
        deleteFeedback,
        addFeedback,
        editFeedback,
        updateFeedback,
    }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext;
