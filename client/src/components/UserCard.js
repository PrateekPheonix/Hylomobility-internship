import React from 'react'
import '../css/card.css'

const UserCard = () => {
    return (
        <div className='card'>
            <div className="card-content">
                <p><span className='card-head'>Name:</span> Prateek Niket</p>
                <p><span className='card-head'>Email:</span> PrateekNiket@gmail.com</p>
                <p><span className='card-head'>Role:</span> Super Admin</p>
                <p><span className='card-head'>ID:</span> avhs76asdas8abhus</p>
            </div>
        </div>
    )
}

export default UserCard