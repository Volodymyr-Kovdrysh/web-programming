import React from 'react';
import {FaGithub} from "react-icons/fa";

const NavBar = () => {
    return (
        <nav className="navbar mb-12 shadow-lg bg-info text-info-content ">
            <div className="container mx-auto">
                <div className="flex-none px-2 mx-2">
                <FaGithub className="inline pr-2 text-5xl"  />
                    <div className="inline text-2xl font-bold align-middle ">GitHub</div>

                </div>
            </div>

        </nav>
    );
};

export default NavBar;
