import React, {useContext} from 'react';
import { Route, Routes, Navigate} from 'react-router-dom'
import Spinner from "../FeedbackApp/components/shared/Spinner";
import styles from "./MainPage.module.scss"
import {SiFacebook, SiTwitter, SiYoutube} from "react-icons/si";
import Login from "../Auth/Login";
import Logout from "../Auth/Logout";
import AuthContext from "../Auth/context/AuthContext";

const MainPage = () => {

    const {login} = useContext(AuthContext)

    return (
        <div className={styles.parent}>

            <Routes>
                <Route
                    path='/home'
                    element={
                        <>
                            {login ? <div className={styles.mywindow}>
                                <div className={styles.content}><Spinner/></div>
                            </div> : <Navigate replace to="/login" />}



                        </>
                    } />
                <Route path='/login' element={
                    <>
                        {login ? <Navigate replace to="/home" /> :<div className="flex justify-center">
                            <Login />
                        </div>}

                    </>
                } />
                <Route path='/logout' element={
                    <>
                        {login ? <div className="flex justify-center"><Logout /></div> : <Navigate replace to="/login" />}

                    </>
                } />
            </Routes>
            <footer className={styles.basement}>
                <div className={styles.copyright}>
                    <p>Copyright © 2022 - All right reserved</p>
                </div>
                <div className={styles.socialicons}>
                    <SiTwitter size={32}/>
                    <SiYoutube size={32}/>
                    <SiFacebook size={32}/>
                </div>
            </footer>
        </div>
    );
};

export default MainPage;
