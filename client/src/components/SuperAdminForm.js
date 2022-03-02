import React, { useState, useEffect } from 'react'
import axios from 'axios'

import '../css/superadmin.css'
import UserCard from './UserCard'
import VehicleCard from './VehicleCard'

const SuperAdminForm = () => {
    const [userData, setUserData] = useState([]);
    const [vehicleData, setVehicleData] = useState([]);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('userAdmin');

    useEffect(() => {
        axios.get('http://localhost:5000/useradmin').then((result) => {
            setUserData(result.data)
        }).catch((err) => {
            console.log(err)
        });


        axios.get('http://localhost:5000/vehicleadmin').then((result) => {
            setVehicleData(result.data)
        }).catch((err) => {
            console.log(err)
        });
    }, []);

    const sendEmail = async () => {
        await axios.post('http://localhost:5000/sendemail', {
            name,
            email,
            password,
            role,
        })
    }

    const config = {
        headers: {
            "Content-type": "application/json"
        }
    }
    const formSubmit = async (e) => {
        e.preventDefault()
        await axios.post('http://localhost:5000/superadmin', {
            name,
            email,
            password,
            role,
        }, config)
        sendEmail()
        setName('')
        setEmail('')
        setPassword('')
        setRole('')
        alert("New Admin Created Successfully!!")
        window.location.reload();
    }

    return (
        <div>
            <div className="form-container">
                <form onSubmit={formSubmit} method='POST' action="">
                    <label htmlFor="name">Name</label>
                    <input value={name} onChange={(e) => setName(e.target.value)} name='name' type="text" required />
                    <label htmlFor="email">Email</label>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} name='email' type="email" required />
                    <label htmlFor="password">Password</label>
                    <input value={password} onChange={(e) => setPassword(e.target.value)} name='password' type="password" required />
                    <input checked={role === 'userAdmin'} onChange={(e) => setRole(e.target.value)} type="radio" name="roles" id="user-admin" value="userAdmin" />
                    <label htmlFor="user-admin">User Admin</label>
                    <input checked={role === 'vehicleAdmin'} onChange={(e) => setRole(e.target.value)} type="radio" name="roles" id="vehicle-admin" value="vehicleAdmin" />
                    <label htmlFor="vehicle-admin">Vehicle Admin</label>
                    <input type="submit" value="Create Admin" />
                </form>
            </div>
            <div className='list-container'>
                <div className='list-column'>
                    <h2>User Admins</h2>
                    {userData.filter(user => user.role === 'userAdmin').map((user) => {
                        return < UserCard id={user._id} name={user.name} email={user.email} role={user.role} />
                    })}
                </div>
                <div className='list-column'>
                    <h2>Vehicle Admins</h2>
                    {userData.filter(user => user.role === 'vehicleAdmin').map((user) => {
                        return < UserCard id={user._id} name={user.name} email={user.email} role={user.role} />
                    })}
                </div>
                <div className='list-column'>
                    <h2>Users</h2>
                    {userData.filter(user => user.role === 'user').map((user) => {
                        return < UserCard id={user._id} name={user.name} email={user.email} role={user.role} />
                    })}
                </div>
                <div className='list-column'>
                    <h2>Vehicles</h2>
                    {vehicleData.map((vehicle) => {
                        return < VehicleCard id={vehicle._id} name={vehicle.name} year={vehicle.manufacturedYear} color={vehicle.color} />
                    })}
                </div>
            </div>
        </div>
    )
}

export default SuperAdminForm