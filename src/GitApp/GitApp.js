import React from 'react';
import NavBar from "./components/layout/NavBar";
import Footer from "./components/layout/Footer";

const GitApp = () => {
    return (
        <div className="flex flex-col justify-between h-screen">
            <NavBar />
            GitApp
            <Footer />
        </div>
    );
};

export default GitApp;
