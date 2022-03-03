import React from 'react'
import SuperAdminForm from './SuperAdminForm'
import UserAdminForm from './UserAdminForm'
import VehicleAdminForm from './VehicleAdminForm'
import Error404 from './Error404'

const Home = () => {


    let data = localStorage.getItem("role")

    if (data === 'superAdmin') {
        return (
            <SuperAdminForm />
        );
    } else if (data === 'userAdmin') {
        return (
            <UserAdminForm />
        );
    } else if (data === 'vehicleAdmin') {
        return (
            <VehicleAdminForm />
        );
    } else {
        return (
            <Error404 />
        )
    }

}

export default Home