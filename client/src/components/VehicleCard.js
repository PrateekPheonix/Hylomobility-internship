import React, { useState } from 'react'
import axios from 'axios';

import '../css/card.css'
import { MdDelete } from 'react-icons/md';
import { FaEdit } from 'react-icons/fa';
import { GrFormClose } from 'react-icons/gr';

const VehicleCard = (props) => {

    const [isEditable, setIsEditable] = useState(false);

    const [name, setName] = useState("");
    const [year, setYear] = useState("");
    const [color, setColor] = useState("");

    const showEditPanel = () => {
        isEditable === false ?
            setIsEditable(true) :
            setIsEditable(false)
    }

    const config = {
        headers: {
            "Content-type": "application/json"
        }
    }
    const formSubmit = async (e) => {
        e.preventDefault()
        window.location.reload();
        await axios.put('http://localhost:5000/vehicleadmin', {
            id: props.id,
            name,
            manufacturedYear: year,
            color
        }, config)
        setName("")
        setYear("")
        setColor("")
        alert("Vehicle Data Changed Successfully!!")
    }

    const deleteVehicle = async () => {
        await axios.delete('http://localhost:5000/vehicleadmin', {
            data: {
                id: props.id
            }
        })
        window.location.reload();
        alert("Vehicle Data Deleted Successfully!!")
    }

    return (
        <div className='show-panel-container'>
            <div className='card'>
                <div className="card-content">
                    <p><span className='card-head'>Name:</span> {props.name}</p>
                    <p><span className='card-head'>Manufacturing Year:</span> {props.year}</p>
                    <p><span className='card-head'>Color:</span> {props.color}</p>
                    <p><span className='card-head'>ID:</span> {props.id}</p>
                </div>
                {
                    window.location.pathname !== '/superadmin'
                        ? <div className='card-buttons'>
                            <button className='update' onClick={showEditPanel}><FaEdit /></button>
                            <button className='delete' onClick={deleteVehicle}><MdDelete /></button>
                        </div>
                        : <div></div>
                }
            </div>
            {isEditable === true ?
                <div className='edit-container'>
                    <GrFormClose className='close' onClick={showEditPanel} />
                    <form onSubmit={formSubmit} method='POST' action="">
                        <label htmlFor="name">New Name</label>
                        <input value={name} onChange={(e) => setName(e.target.value)} name="name" type="text" />
                        <label htmlFor="manufacturedYear">New Mfg. Year</label>
                        <input value={year} onChange={(e) => setYear(e.target.value)} name="manufacturedYear" type="text" />
                        <label htmlFor="color">New Color</label>
                        <input value={color} onChange={(e) => setColor(e.target.value)} name='color' type="text" />
                        <input type="submit" value="Save Changes" />
                    </form>
                </div> :
                <div></div>
            }
        </div>
    )
}

export default VehicleCard