import React, {useState} from 'react';


const Login = ({login}) => {

    const [email, setEmail] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(e)

        login(true)

    }

    return (

        <div className="card w-96 bg-neutral text-neutral-content">
            <div className="card-body items-center text-center">
                <h2 className="card-title">Cookies!</h2>
                <p>We are using cookies for no reason.</p>
                <div className="flex justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-20 h-20 text-blue-300" fill="none"
                         viewBox="0 0 24 24"
                         stroke="currentColor">
                        <path d="M12 14l9-5-9-5-9 5 9 5z"/>
                        <path
                            d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                              d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"/>
                    </svg>
                </div>
                <form onSubmit={handleSubmit} >
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-blue-300">Email</span>
                        </label>
                        <input
                            type="text"
                            placeholder="surname.name.clg@chnu.edu.ua"
                            autoComplete="on"
                            name="email"
                            className="input input-bordered text-primary"
                            value={email}
                            onChange={(e)=>{
                                setEmail(e.target.value)}}
                        />
                        <label className="label">
                            <span className="label-text text-blue-300">Password</span>
                        </label>
                        <input type="password" placeholder="password" name="pass" autoComplete="on" className="input input-bordered text-primary"/>
                    </div>
<div className="mt-4">
                    <div className="flex items-baseline justify-between">
                        <button className="btn btn-primary" type="submit">Login</button>
                        <button onClick={(e)=>{e.preventDefault()}} className="text-sm text-blue-300 hover:underline">Forgot password?</button>
                    </div>
</div>
                </form>

            </div>

        </div>

    );
};

export default Login;
