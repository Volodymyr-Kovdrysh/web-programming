import React from 'react';
import NavBar from "./components/layout/NavBar";
import Footer from "./components/layout/Footer";
import Main from "./components/layout/Main";
import {GitProvider} from "./context/GitContext";

const GitApp = () => {
    return (
        <GitProvider>
        <div className="flex flex-col justify-between h-full">
            <NavBar />
            <Main />
            <Footer />
        </div>
        </GitProvider>
    );
};

export default GitApp;
