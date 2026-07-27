import React from 'react'
import AuthRoutes from './routes/AuthRoutes';
import AppRoutes from './routes/AppRoutes';
function App() {
  const userData = JSON.parse(localStorage.getItem("userData"));
  return (
    <>
      {userData?.isLogin ? <AppRoutes /> : <AuthRoutes />}
    </>
  )
}

export default App

