import React, { FormEvent, ReactElement, useState } from 'react'
import Link from 'next/link'

interface Props {
    
}

export default function Login({}: Props): ReactElement {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const emailChange = (e) => setEmail(e.target.value)
    const passwordChange = (e) => setPassword(e.target.value)
    
    const loginUser = async (e: FormEvent) => {
        e.preventDefault()

        const res = await fetch('/api/auth/login', {
            headers: {
                "Content-Type": "application/json"
            },
            method: "POST",
            body: JSON.stringify({ email, password }),
            credentials: 'include'
        })
    }

    return (
        <div>
            {/* <!-- Login Page --> */}
            <form onSubmit={loginUser}>
            <div className="row g-3">
                {/* <!-- Email Input --> */}
                <div className="mb3">
                <label htmlFor="emailInput">Email</label>
                <input type="email" className="form-control" placeholder="example@gmail.com" onChange={emailChange} value={email} />
                </div>
                
                {/* <!-- Password Input --> */}
                <div className="mb3">
                <label htmlFor="passwordInput">Password</label>
                <input type="password" className="form-control flex-fill" placeholder="***********" onChange={passwordChange} value={password} />
                </div>
            </div>
                
            <br />
            {/* <!-- Login Button --> */}
            <button type="submit" className="btn btn-primary bg-gradient mb-3" id="loginButton">Login</button>
            <br />
                
            {/* <!-- Register Option --> */}
            <p>
                <p>Or you can register <Link href="/register" ><a className="light-bold">here</a></Link>. </p>
            </p>
            </form>
        </div>
    )
}
