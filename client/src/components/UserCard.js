import React,{useState} from 'react'
import '../css/card.css'
import { MdDelete} from 'react-icons/md';
import { FaEdit } from 'react-icons/fa';
import { GrFormClose } from 'react-icons/gr';


const UserCard = () => {
    console.log(window.location.pathname)

    const [isEditable, setIsEditable] = useState(false);

    const showEditPanel = () => {
        isEditable===false ? 
        setIsEditable(true) : 
        setIsEditable(false)
    }
    return (
        <div className='show-panel-container'>
            <div className='card'>
                <div className="card-content">
                    <p><span className='card-head'>Name:</span> Prateek Niket</p>
                    <p><span className='card-head'>Email:</span> PrateekNiket@gmail.com</p>
                    <p><span className='card-head'>Role:</span> Super Admin</p>
                    <p><span className='card-head'>ID:</span> avhs76asdas8abhus</p>
                </div>
                {
                    window.location.pathname!=='/superadmin'
                        ?<div className='card-buttons'>
                            <button className='update' onClick={showEditPanel}><FaEdit/></button>
                            <button className='delete'><MdDelete/></button>
                        </div>
                        :<div></div>
                }
            </div>
            {isEditable===true ? 
                <div className='edit-container'>
                    <GrFormClose className='close' onClick={showEditPanel}/>
                    <form method='POST' action="">
                        <label htmlFor="newName">New Name</label>
                        <input type="text" />
                        <label htmlFor="newEmail">New Email</label>
                        <input type="email" />
                        <input type="submit" value="Save Changes" />
                    </form>
                </div> :
                <div></div>
            } 
        </div>
    )
}

export default UserCard