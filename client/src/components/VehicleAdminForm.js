import React from 'react'

import '../css/global.css'
import VehicleCard from './VehicleCard'

const VehicleAdminForm = () => {
    return (
        <div>
            <div className="form-container">
                <form method='POST' action="">
                    <label htmlFor="name">Name</label>
                    <input name='name' type="text" required />
                    <label htmlFor="year">Manufacturing Year</label>
                    <input name='year' type="text" required />
                    <label htmlFor="color">Color</label>
                    <input name='color' type="text" required />
                    <input type="submit" value="Create Vehicle" />
                </form>
            </div>
            <div className='list-container'>
                <div className='list-column'>
                    <h2>Vehicles</h2>
                    <VehicleCard />
                    <VehicleCard />
                    <VehicleCard />
                    <VehicleCard />
                    <VehicleCard />
                    <VehicleCard />
                    <VehicleCard />
                    <VehicleCard />
                    <VehicleCard />
                </div>
            </div>
        </div>
    )
}

export default VehicleAdminForm