import React from 'react'
import { Routes, Route } from "react-router-dom"
import Home from './pages/Home'
import Register from './pages/Register'
import Login from './pages/Login'
import Doctors from './pages/Doctors'
import About from './pages/About'
import Contact from './pages/Contact'
import Notifications from './pages/Notifications'
import Specialities from './pages/Specialities'
import Appointments from './pages/Appointments'
import DoctorInfo from './pages/DoctorInfo'
import PatientsList from './pages/Admin/PatientsList'
import DoctorRegister from './pages/Doctor/DoctorRegister'
import DoctorLogin from './pages/Doctor/DoctorLogin'
import Dashboard from './pages/Doctor/Dashboard'
import ProtectRoute from "./protect/protect.route"
import ProtectRouteDoctor from "./protect/protect.route.doctor"
import Profile from './pages/Profile'
import AdminProtectRoute from './protect/protect.route.admin'
import AdminLogin from './pages/Admin/AdminLogin'


const App = () => {
  return (
    <Routes>
      {/* patient  */}
      <Route path='/' element={<Home />} />
      <Route path='/register' element={<Register />} />
      <Route path='/login' element={<Login />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={
        <ProtectRoute>
          <Contact />
        </ProtectRoute>
      } />
      <Route path='/notifications' element={
        <ProtectRoute>
          <Notifications />
        </ProtectRoute>
      } />
      <Route path='/specialities' element={
        <ProtectRoute>
          <Specialities />
        </ProtectRoute>
      } />
      <Route path='/appointments' element={
        <ProtectRoute>
          <Appointments />
        </ProtectRoute>
      } />
      <Route path='/doctors' element={
        <ProtectRoute>
          <Doctors />
        </ProtectRoute>
      } />
      <Route path='/doctor/:id' element={
        <ProtectRoute>
          <DoctorInfo />
        </ProtectRoute>
      } />
      <Route path='/profile' element={
        <ProtectRoute>
          <Profile />
        </ProtectRoute>
      } />


      {/* doctor  */}
      <Route path='/doctor/register' element={<DoctorRegister />} />
      <Route path='/doctor/login' element={<DoctorLogin />} />
      <Route path='/doctor/dashboard' element={
        <ProtectRouteDoctor>
          <Dashboard />
        </ProtectRouteDoctor>
      } />



      {/* for Admin  */}
      <Route path='/admin/patientslist' element={
        <AdminProtectRoute>
          <PatientsList />
        </AdminProtectRoute>
      } />
      <Route path='/admin/login' element={<AdminLogin />} />



    </Routes>
  )
}

export default App