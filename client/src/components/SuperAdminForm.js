import React, { useState } from 'react'
import axios from 'axios'

import '../css/superadmin.css'
import UserCard from './UserCard'
import VehicleCard from './VehicleCard'

const SuperAdminForm = () => {
    const [userData, setUserData] = useState([]);
    const [vehicleData, setVehicleData] = useState([]);

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

    return (
        <div>
            <div className="form-container">
                <form method='POST' action="">
                    <label htmlFor="name">Name</label>
                    <input name='name' type="text" required />
                    <label htmlFor="email">Email</label>
                    <input name='email' type="email" required />
                    <label htmlFor="password">Password</label>
                    <input name='password' type="password" required />
                    <input type="radio" name="roles" id="user-admin" value="userAdmin" />
                    <label htmlFor="user-admin">User Admin</label>
                    <input type="radio" name="roles" id="vehicle-admin" value="vehicleAdmin" />
                    <label htmlFor="vehicle-admin">Vehicle Admin</label>
                    <input type="submit" value="Create Admin" />
                </form>
            </div>
            <div className='list-container'>
                <div className='list-column'>
                    <h2>User Admins</h2>
                    {userData.map((user) => {
                        if (user.role === 'userAdmin') {
                            return < UserCard id={user._id} name={user.name} email={user.email} role={user.role} />
                        }
                    })}
                </div>
                <div className='list-column'>
                    <h2>Vehicle Admins</h2>
                    {userData.map((user) => {
                        if (user.role === 'vehicleAdmin') {
                            return < UserCard id={user._id} name={user.name} email={user.email} role={user.role} />
                        }
                    })}
                </div>
                <div className='list-column'>
                    <h2>Users</h2>
                    {userData.map((user) => {
                        if (user.role === 'user') {
                            return < UserCard id={user._id} name={user.name} email={user.email} role={user.role} />
                        }
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