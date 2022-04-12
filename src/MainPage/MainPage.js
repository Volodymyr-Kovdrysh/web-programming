import React from 'react';
import { Route, Routes, Navigate} from 'react-router-dom'
import Spinner from "../FeedbackApp/components/shared/Spinner";
import styles from "./MainPage.module.scss"
import {SiFacebook, SiTwitter, SiYoutube} from "react-icons/si";
import Login from "../Auth/Login";
import Logout from "../Auth/Logout";

const MainPage = ({login, islogin}) => {
    return (
        <div className={styles.parent}>

            <Routes>
                <Route
                    path='/home'
                    element={
                        <>
                            {islogin ? <div className={styles.mywindow}>
                                <div className={styles.content}><Spinner/></div>
                            </div> : <Navigate replace to="/login" />}



                        </>
                    } />
                <Route path='/login' element={
                    <>
                        {islogin ? <Navigate replace to="/home" /> : <div className={styles.loginwindow}>
                            <Login login={login} />
                        </div>}

                    </>
                } />
                <Route path='/logout' element={
                    <>
                        {islogin ? <div className={styles.loginwindow}><Logout login={login} /></div> : <Navigate replace to="/login" />}

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
