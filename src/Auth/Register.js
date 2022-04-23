import React, {useContext, useState} from 'react';
import AuthContext from "./context/AuthContext";
import './styles/Login.modules.scss'
import {Link} from "react-router-dom";

const Register = () => {

    const {setLogin} = useContext(AuthContext)

    const [showpass, setShowpass] = useState(false)

    const [formData, setFormData] = useState({
        nickname: '',
        email: '',
        password: '',
    })

   const {email, nickname, password} = formData

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(e.target.nickname.value)
        setLogin(true)

    }

    const handleChange = (e) => {
        setFormData(prevState => {
        return {
            ...prevState,
            [e.target.name]: e.target.value
        }}
        )

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
                            <span>NickName</span>
                        </label>
                        <input
                            type="text"
                            placeholder="NickName"
                            autoComplete="on"
                            name="nickname"
                            value={nickname}
                            onChange={handleChange}
                        />
                        <label>
                            <span>Email</span>
                        </label>
                        <input
                            type="text"
                            placeholder="surname.name.clg@chnu.edu.ua"
                            autoComplete="on"
                            name="email"
                            value={email}
                            onChange={handleChange}
                        />
                        <label>
                            <span>Password</span>
                        </label>
                        <div>
                            <input
                                type={`${showpass ? "text": "password"}`}
                                placeholder="password"
                                name="password"
                                autoComplete="on"
                                value={password}
                                onChange={handleChange}
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
                            <button type="submit">Register</button>
                        </div>
                    </div>
                </form>

                <Link to="/login">Login</Link>

            </div>
        </div>

    );
};

export default Register;
