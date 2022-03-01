import React, { useState } from 'react'

import '../css/card.css'
import { MdDelete } from 'react-icons/md';
import { FaEdit } from 'react-icons/fa';
import { GrFormClose } from 'react-icons/gr';

const VehicleCard = () => {
    console.log(window.location.pathname)

    const [isEditable, setIsEditable] = useState(false);

    const showEditPanel = () => {
        isEditable === false ?
            setIsEditable(true) :
            setIsEditable(false)
    }
    return (
        <div className='show-panel-container'>
            <div className='card'>
                <div className="card-content">
                    <p><span className='card-head'>Name:</span> Prateek Niket</p>
                    <p><span className='card-head'>Manufacturing Year:</span> 2008</p>
                    <p><span className='card-head'>Color:</span> Red</p>
                    <p><span className='card-head'>ID:</span> xcouq87921yeh1e90</p>
                </div>
                {
                    window.location.pathname !== '/superadmin'
                        ? <div className='card-buttons'>
                            <button className='update' onClick={showEditPanel}><FaEdit /></button>
                            <button className='delete'><MdDelete /></button>
                        </div>
                        : <div></div>
                }
            </div>
            {isEditable === true ?
                <div className='edit-container'>
                    <GrFormClose className='close' onClick={showEditPanel} />
                    <form method='POST' action="">
                        <label htmlFor="newName">New Name</label>
                        <input type="text" />
                        <label htmlFor="newYear">New Mfg. Year</label>
                        <input type="text" />
                        <label htmlFor="newColor">New Color</label>
                        <input type="text" />
                        <input type="submit" value="Save Changes" />
                    </form>
                </div> :
                <div></div>
            }
        </div>
    )
}

export default VehicleCard