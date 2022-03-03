import React, { useState, useEffect } from 'react'
import axios from 'axios'

import '../css/global.css'
import UserCard from './UserCard'

const UserAdminForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const [userData, setUserData] = useState([]);

    let createdBy = localStorage.getItem("ID")

    const config = {
        headers: {
            "Content-type": "application/json"
        }
    }
    const formSubmit = async (e) => {
        e.preventDefault()
        await axios.post('http://localhost:5000/useradmin', {
            createdBy,
            name,
            email,
        }, config)
        setName("")
        setEmail("")
        alert("New User Created Successfully!!")
        window.location.reload();
    }

    useEffect(() => {
        axios.get('http://localhost:5000/useradmin').then((result) => {
            setUserData(result.data)
        }).catch((err) => {
            console.log(err)
        });
    }, []);



    return (
        <div>
            <h1 className='title'>User Admin Dashboard</h1>
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
                    {userData.filter(user => user.role === 'user' && user.createdBy === createdBy).map((user) => {
                        return < UserCard key={user._id} id={user._id} name={user.name} email={user.email} role={user.role} />
                    })}
                </div>
            </div>
        </div>
    )
}

export default UserAdminForm