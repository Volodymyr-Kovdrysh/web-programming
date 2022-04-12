import React, {useContext} from 'react';
import AuthContext from "./context/AuthContext";

const Logout = () => {
    const {setLogin} = useContext(AuthContext)
    return (
        <div className="card w-96 bg-neutral text-neutral-content">
            <div className="card-body items-center text-center">
                <h2 className="card-title">Babay!</h2>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary" onClick={()=>{
                        setLogin(false)
                    }}>Logout</button>
                </div>
            </div>
        </div>
    );
};

export default Logout;
