import React from 'react'

import '../css/global.css'
import UserCard from './UserCard'

const UserAdminForm = () => {
    return (
        <div>
            <div className="form-container">
                <form method='POST' action="">
                    <label htmlFor="name">Name</label>
                    <input name='name' type="text" required />
                    <label htmlFor="email">Email</label>
                    <input name='email' type="email" required />
                    <input type="submit" value="Create User" />
                </form>
            </div>
            <div className='list-container'>
                <div className='list-column'>
                    <h2>Users</h2>
                    <UserCard />
                    <UserCard />
                    <UserCard />
                    <UserCard />
                    <UserCard />
                </div>
            </div>
        </div>
    )
}

export default UserAdminForm