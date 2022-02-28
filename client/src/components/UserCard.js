import React from 'react'
import '../css/card.css'
import { MdDelete} from 'react-icons/md';


const UserCard = () => {
    console.log(window.location.pathname)
    return (
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
                    <button className='delete'><MdDelete/></button>
                    </div>
                    :<div></div>
            }
        </div>
    )
}

export default UserCard