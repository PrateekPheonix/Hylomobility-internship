import React, { useState, useRef, useEffect } from 'react'
import '../css/card.css'
import { MdDelete } from 'react-icons/md';
import { FaEdit } from 'react-icons/fa';
import { GrFormClose } from 'react-icons/gr';
import axios from 'axios';


const UserCard = () => {
    console.log(window.location.pathname)

    const [isEditable, setIsEditable] = useState(false);
    // const [name, setName] = useState("");
    // const [email, setEmail] = useState("");

    const showEditPanel = () => {
        isEditable === false ?
            setIsEditable(true) :
            setIsEditable(false)
    }
    // const config = {
    //     headers: {
    //         "Content-type": "application/json"
    //     }
    // }
    // const formSubmit = async (e) => {
    //     e.preventDefault()
    //     await axios.put('http://localhost:5000/useradmin', {
    //         name,
    //         email,
    //     }, config)
    //     setName("")
    //     setEmail("")
    // }


    return (
        <div className='show-panel-container'>
            <div className='card'>
                <div className="card-content">
                    <p><span className='card-head'>Name:</span> Prateek Niket</p>
                    <p><span className='card-head'>Email:</span> PrateekNiket@gmail.com</p>
                    <p><span className='card-head'>Role:</span> Super Admin</p>
                    <p><span className='card-head'>ID:</span> 621dae359a65f3d5e54fe5cb</p>
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
                    <form onSubmit={formSubmit} method='POST' action="">
                        <label htmlFor="name">New Name</label>
                        <input name='name' type="text" />
                        <label htmlFor="email">New Email</label>
                        <input name='email' type="email" />
                        <input type="submit" value="Save Changes" />
                    </form>
                </div> :
                <div></div>
            }
        </div>
    )
}

export default UserCard

// value = { name } onChange = {(e) => setName(e.target.value)}
// value = { email } onChange = {(e) => setEmail(e.target.value)}