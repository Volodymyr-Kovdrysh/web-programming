import React, {useContext, useState} from 'react';
import AuthContext from "./context/AuthContext";
import './styles/Login.modules.scss'
import {Link} from "react-router-dom";


const Login = () => {

    const {setLogin} = useContext(AuthContext)

    const [showpass, setShowpass] = useState(false)

    const [email, setEmail] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()


        setLogin(true)

    }

    return (

        <div className="logincard">
            <div>
                <h2>Cookies!</h2>
                <p>We are using cookies for no reason.</p>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg"
                         fill="none"
                         viewBox="0 0 24 24"
                         stroke="currentColor">
                        <path d="M12 14l9-5-9-5-9 5 9 5z"/>
                        <path
                            d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/>
                        <path strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"/>
                    </svg>
                </div>

                <form onSubmit={handleSubmit} >
                    <div>
                        <label>
                            <span>Email</span>
                        </label>
                        <input
                            type="text"
                            placeholder="surname.name.clg@chnu.edu.ua"
                            autoComplete="on"
                            name="email"
                            value={email}
                            onChange={(e)=>{
                                setEmail(e.target.value)}}
                        />
                        <label>
                            <span>Password</span>
                        </label>
                        <div>
                        <input
                            type={`${showpass ? "text": "password"}`}
                            placeholder="password"
                            name="pass"
                            autoComplete="on"
                        />
                        <input
                            type="checkbox"
                            checked={showpass}
                            className="password"
                            onChange={()=>setShowpass(prevState => !prevState)}
                        />
                        </div>
                    </div>
                    <div>
                        <div>
                            <button type="submit">Login</button>
                            <button onClick={(e)=>{e.preventDefault()}}>Forgot password?</button>
                        </div>
                    </div>
                </form>

                <Link to="/register">Register</Link>

            </div>
        </div>

    );
};

export default Login;
