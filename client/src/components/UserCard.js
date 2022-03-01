import React, { useState } from 'react'
import '../css/card.css'
import { MdDelete } from 'react-icons/md';
import { FaEdit } from 'react-icons/fa';
import { GrFormClose } from 'react-icons/gr';
import axios from 'axios';


const UserCard = (props) => {

    const [isEditable, setIsEditable] = useState(false);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

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
        await axios.put('http://localhost:5000/useradmin', {
            id: props.id,
            name,
            email,
        }, config)
        setName("")
        setEmail("")
        alert("User Data Changed Successfully!!")
    }

    const deleteUser = async () => {

        await axios.delete('http://localhost:5000/useradmin', {
            data: {
                id: props.id
            }
        })
        window.location.reload();
        alert("User Data Deleted Successfully!!")
    }


    return (
        <div className='show-panel-container'>
            <div className='card card-width'>
                <div className="card-content">
                    <p><span className='card-head'>Name:</span> {props.name}</p>
                    <p><span className='card-head'>Email:</span> {props.email}</p>
                    <p><span className='card-head'>Role:</span> {props.role}</p>
                    <p><span className='card-head'>ID:</span> {props.id}</p>
                </div>
                {
                    window.location.pathname !== '/superadmin'
                        ? <div className='card-buttons'>
                            <button className='update' onClick={showEditPanel}><FaEdit /></button>
                            <button className='delete' onClick={deleteUser}><MdDelete /></button>
                        </div>
                        : <div></div>
                }
            </div>
            {isEditable === true ?
                <div className='edit-container'>
                    <GrFormClose className='close' onClick={showEditPanel} />
                    <form onSubmit={formSubmit} method='POST' action="">
                        <label htmlFor="name">New Name</label>
                        <input value={name} onChange={(e) => setName(e.target.value)} name='name' type="text" />
                        <label htmlFor="email">New Email</label>
                        <input value={email} onChange={(e) => setEmail(e.target.value)} name='email' type="email" />
                        <input type="submit" value="Save Changes" />
                    </form>
                </div> :
                <div></div>
            }
        </div>
    )
}

export default UserCard
