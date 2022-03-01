import React, { useState, useEffect } from 'react'
import axios from 'axios'

import '../css/global.css'
import UserCard from './UserCard'

const UserAdminForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const [userData, setUserData] = useState([]);

    const config = {
        headers: {
            "Content-type": "application/json"
        }
    }
    const formSubmit = async (e) => {
        e.preventDefault()
        await axios.post('http://localhost:5000/useradmin', {
            name,
            email,
        }, config)
        setName("")
        setEmail("")
    }
    axios.get('http://localhost:5000/useradmin').then((result) => {
        setUserData(result.data)
    }).catch((err) => {
        console.log(err)
    });


    return (
        <div>
            <div className="form-container">
                <form onSubmit={formSubmit} method='POST' action="">
                    <label htmlFor="name">Name</label>
                    <input value={name} onChange={(e) => setName(e.target.value)} name='name' type="text" required />
                    <label htmlFor="email">Email</label>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} name='email' type="email" required />
                    <input type="submit" value="Create User" />
                </form>
            </div>
            <div className='list-container'>
                <div className='list-column'>
                    <h2>Users</h2>
                    {userData.map((user) => {
                        return < UserCard id={user._id} name={user.name} email={user.email} role={user.role} />
                    })}
                </div>
            </div>
        </div>
    )
}

export default UserAdminForm