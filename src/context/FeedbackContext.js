import {v4 as uuidv4} from 'uuid'
import {createContext, useEffect, useState} from "react";
import  {getDataFromGoogleApp} from "../data/Utils";

const FeedbackContext = createContext()

// const jsonUrl = 'https://gist.githubusercontent.com/Volodymyr-Kovdrysh/368f472d3de21193171cdce3498939d5/raw/f3af065a83e7a8660a81f1e7f6f960e287bcd855/data.json'
const googleURL = 'https://script.google.com/macros/s/AKfycbyVK9HuT9pgElv0Lx1fs_W8b9_IG0-38eBRm2T40k2OAbmMagck-f-JiUCT_wYa1dQvvA/exec?action=GET'

export const FeedBackProvider = ({children}) => {

    const [feedback, setFeedback] = useState([])

    useEffect(()=>{

        // getData(jsonUrl).then(data => {
        //     setFeedback(data)
        // })
        getDataFromGoogleApp(googleURL).then(data => {
            // console.log('from google', data.feedback)
            setFeedback(data.feedback)
        })

        // fetch(jsonUrl).then(response => {
        //          response.json().then(data => {
        //             console.log('response data', data)
        //              setFeedback(data)
        //         });
        //
        //     })

    },[])

    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false,
    })

    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        setFeedback([newFeedback, ...feedback])
    }

    const deleteFeedback = (id) => {
        if(window.confirm('Ви впевнені, що хочете видалити цей важливий відгук??')
        ){
            setFeedback(feedback.filter(msg => msg.id !== id))
        }

    }

    // update feedback item
    const updateFeedback = (id, updItem) => {
        setFeedback(feedback.map(item => item.id === id ? {...item, ...updItem} : item))
    }

    const editFeedback = (item) => {
        setFeedbackEdit({item, edit: true})
    }

    return <FeedbackContext.Provider value={{
        feedback,
        feedbackEdit,
        deleteFeedback,
        addFeedback,
        editFeedback,
        updateFeedback,
    }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext;
