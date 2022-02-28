import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login'
import SuperAdminForm from './components/SuperAdminForm'
import UserAdminForm from './components/UserAdminForm'
import VehicleAdminForm from './components/VehicleAdminForm'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' exact element={<Login />} />
          <Route path='/superadmin' exact element={<SuperAdminForm />} />
          <Route path='/useradmin' exact element={<UserAdminForm />} />
          <Route path='/vehicleadmin' exact element={<VehicleAdminForm />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
