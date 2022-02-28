import React from 'react'

import '../css/superadmin.css'
import '../css/global.css'

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
        </div>
    )
}

export default SuperAdminForm