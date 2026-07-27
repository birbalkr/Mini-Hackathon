
import React from 'react'
import { Routes, Route } from "react-router";
import Login from '../components/Login'
import Register from '../components/Register';

function AuthRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  )
}

export default AuthRoutes
