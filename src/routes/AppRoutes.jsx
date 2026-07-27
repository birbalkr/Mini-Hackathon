
import React from 'react'
import { Routes, Route } from "react-router";
import HomePage from '../components/HomePage';

function AppRoutes() {
    return (
        <Routes>
            <Route path='/' element={<HomePage />} />
        </Routes>
    )
}

export default AppRoutes
