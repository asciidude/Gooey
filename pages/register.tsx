import React, { FormEvent, ReactElement, useState } from 'react'

interface Props {
    
}

export default function Register({}: Props): ReactElement {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [username, setUsername] = useState("")

    const emailChange = (e) => setEmail(e.target.value)
    const passwordChange = (e) => setPassword(e.target.value)
    const usernameChange = (e) => setUsername(e.target.value)

    const registerUser = async (e: FormEvent) => {
        e.preventDefault()

        const res = await fetch('/api/auth/register', {
            headers: {
                "Content-Type": "application/json"
            },
            method: "POST",
            body: JSON.stringify({ username, email, password }),
            credentials: 'include'
        })
    }

    return (
        <div>
            {/* <!-- Register Page --> */}
            <form onSubmit={registerUser}>
                <div className="row g-3">
                    {/* <!-- Email Input --> */}
                    <div className="mb3">
                    <label htmlFor="emailInput">Email</label>
                    <input type="email" className="form-control" placeholder="example@gmail.com" onChange={emailChange} value={email} />
                    </div>
                    
                    {/* <!-- Password Input --> */}
                    <div className="mb3">
                    <label htmlFor="passwordInput">Password</label>
                    <input type="password" className="form-control" placeholder="***********" onChange={passwordChange} value={password} />
                    </div>
                    
                    {/* <!-- Username Input --> */}
                    <div className="mb3">
                    <label htmlFor="emailInput">Username</label>
                    
                    <div className="input-group">
                        <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">@</span>
                        </div>
                        
                        <input type="text" className="form-control" placeholder="JohnDoe" onChange={usernameChange} value={username} />
                    </div>
                    </div>
                </div>
                    
                <br />
                {/* <!-- Register Button --> */}
                <button type="submit" className="btn btn-primary bg-gradient mb-3" id="loginButton">Register</button>
                    
                <br />
                {/* <!-- Register Option --> */}
                <p>
                    <p>Or you can login <a href="/login" className="light-bold">here</a>.</p>
                </p>
            </form>
        </div>
    )
}
