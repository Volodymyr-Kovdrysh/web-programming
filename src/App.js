import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import FeedbackApp from "./FeedbackApp/FeedbackApp";
import MainPage from "./MainPage/MainPage";

import NavBar from "./components/shared/NavBar";
import {AuthProvider} from "./Auth/context/AuthContext";
import GitApp from "./GitApp/GitApp";

const App = () => {
    return (
        <AuthProvider>
        <Router>
            <NavBar />

            <Routes>
                <Route path='*' element={<MainPage /> } />
                <Route path='/feedbackapp/*' element={<FeedbackApp /> } />
                <Route path='/gitapp/*' element={<GitApp /> } />
            </Routes>
        </Router>
        </AuthProvider>
    );
};
export default App;
