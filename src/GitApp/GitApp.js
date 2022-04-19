import React from 'react';
import NavBar from "./components/layout/NavBar";
import Footer from "./components/layout/Footer";
import Main from "./components/layout/Main";

const GitApp = () => {
    return (
        <div className="flex flex-col justify-between h-full">
            <NavBar />
            <Main />
            <Footer />
        </div>
    );
};

export default GitApp;
