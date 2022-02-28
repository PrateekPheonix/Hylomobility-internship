import React from 'react'

import '../css/superadmin.css'
import '../css/global.css'
import UserCard from './UserCard'
import VehicleCard from './VehicleCard'

const SuperAdminForm = () => {
    return (
        <div>
            <div className="form-container">
                <form method='POST' action="">
                    <label htmlFor="name">Name</label>
                    <input name='name' type="text" required />
                    <label htmlFor="email">Email</label>
                    <input name='email' type="email" required />
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
                    <UserCard/>
                    <UserCard/>
                    <UserCard/>
                    <UserCard/>
                    <UserCard/>
                </div>
                <div className='list-column'>
                    <h2>Vehicle Admins</h2>
                    <UserCard/>
                    <UserCard/>
                    <UserCard/>
                    <UserCard/>
                    <UserCard/>
                    <UserCard/>
                    <UserCard/>
                    <UserCard/>
                </div>
                <div className='list-column'>
                    <h2>Users</h2>
                    <UserCard/>
                    <UserCard/>
                    <UserCard/>
                    <UserCard/>
                    <UserCard/>
                    <UserCard/>
                    <UserCard/>
                </div>
                <div className='list-column'>
                    <h2>Vehicles</h2>
                    <VehicleCard/>
                    <VehicleCard/>
                    <VehicleCard/>
                    <VehicleCard/>
                    <VehicleCard/>
                    <VehicleCard/>
                    <VehicleCard/>
                    <VehicleCard/>
                    <VehicleCard/>
                </div>
            </div>
        </div>
    )
}

export default SuperAdminForm