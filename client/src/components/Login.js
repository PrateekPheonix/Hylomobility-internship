import React, { useEffect, useState } from 'react'
import axios from 'axios'

import '../css/global.css'

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const config = {
        headers: {
            "Content-type": "application/json"
        }
    }
    const formSubmit = async (e) => {
        e.preventDefault()
        // window.location.reload();
        // alert("New User Created Successfully!!")
        await axios.post('http://localhost:5000/login', {
            email,
            password,
        }, config).then((result) => {
            console.log(result)
        }).catch((err) => {
            console.log(err)
        });
        setEmail("")
        setPassword("")
    }

    return (
        <div>
            <div className="form-container">
                <form onSubmit={formSubmit} method='POST' action="">
                    <label htmlFor="email">Email</label>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} name='email' type="email" required />
                    <label htmlFor="password">Password</label>
                    <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" name='password' required />
                    <input type="submit" value="Login" />
                </form>
            </div>
        </div>
    )
}

export default Login