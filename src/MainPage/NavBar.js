import React, {useContext} from 'react';
import {NavLink} from "react-router-dom";
import {ImEnter, ImExit} from "react-icons/im";
import AuthContext from "../Auth/context/AuthContext";

const NavBar = () => {
    const {login} = useContext(AuthContext)
    return (
        <div className="navbar bg-neutral text-neutral-content flex justify-between">
            <div className="flex justify-start">

                <NavLink to={'/home'} className={({isActive}) => 'btn btn-ghost normal-case text-xl' + (isActive ?' bg-green-500' : '')} >Головна</NavLink>
                {login && <NavLink to={'/feedbackapp'} className={({isActive}) => 'btn btn-ghost normal-case text-xl' + (isActive ?' bg-green-500' : '')} >Зворотній зв'язок </NavLink> }

            </div>
            <div className="flex justify-end">
                {login ? <NavLink to={'/logout'} className="btn" ><ImExit size={32} /> </NavLink> : <NavLink to={'/login'} className="btn" ><ImEnter size={32} /></NavLink>}


            </div>
        </div>
    );
};

export default NavBar;
