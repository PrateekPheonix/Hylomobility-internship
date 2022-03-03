import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

import '../css/global.css'

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [loginDataRole, setLoginDataRole] = useState("")
    const [loginDataID, setLoginDataID] = useState("")

    const navigate = useNavigate();

    const config = {
        headers: {
            "Content-type": "application/json"
        }
    }
    useEffect(() => {
        setLoginDataRole(JSON.parse(window.localStorage.getItem('loginDataRole')))
        setLoginDataID(JSON.parse(window.localStorage.getItem('loginDataID')))
    }, []);
    useEffect(() => {
        window.localStorage.setItem('role', loginDataRole)
        window.localStorage.setItem('ID', loginDataID)
    }, [loginDataRole, loginDataID]);

    const formSubmit = async (e) => {
        e.preventDefault()
        let result
        try {
            result = await axios.post('http://localhost:5000/login', {
                email,
                password,
            }, config)
            console.log(result)
        } catch (error) {
            console.log(error)
            alert("Invalid Credentials")
        }
        setLoginDataRole(result.data.role)
        setLoginDataID(result.data._id)
        setEmail("")
        setPassword("")
        navigate('/home')
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