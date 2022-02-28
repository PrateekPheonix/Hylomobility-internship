import React from 'react'
import '../css/login.css'
import '../css/global.css'

const Login = () => {
    return (
        <div>
            <div className="form-container">
                <form method='POST' action="">
                    <label htmlFor="email">Email</label>
                    <input name='email' type="email" required/>
                    <label htmlFor="pass">Password</label>
                    <input type="password"  required />
                    <input type="submit" value="Login" />
                </form>
            </div>
        </div>
    )
}

export default Login