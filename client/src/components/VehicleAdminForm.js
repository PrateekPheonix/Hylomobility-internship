import React, { useState } from 'react'
import axios from 'axios'

import '../css/global.css'
import VehicleCard from './VehicleCard'

const VehicleAdminForm = () => {
    const [name, setName] = useState("");
    const [year, setYear] = useState();
    const [color, setColor] = useState("");

    const config = {
        headers: {
            "Content-type": "application/json"
        }
    }
    const formSubmit = async (e) => {
        e.preventDefault()
        await axios.post('http://localhost:5000/vehicleadmin', {
            name,
            manufacturedYear: year,
            color,
        }, config)
        setName("")
        setYear()
        setColor("")
    }

    return (
        <div>
            <div className="form-container">
                <form onSubmit={formSubmit} method='POST' action="">
                    <label htmlFor="name">Name</label>
                    <input value={name} onChange={(e) => setName(e.target.value)} name='name' type="text" required />
                    <label htmlFor="manufacturedYear">Manufacturing Year</label>
                    <input value={year} onChange={(e) => setYear(e.target.value)} name='manufacturedYear' type="text" required />
                    <label htmlFor="color">Color</label>
                    <input value={color} onChange={(e) => setColor(e.target.value)} name='color' type="text" required />
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