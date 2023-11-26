import React from 'react'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AccountProvider } from 'src/contexts/AccountContext'
import { AuthProvider } from 'src/contexts/AuthContext'
import { RequireAuth } from 'src/contexts/RequireAuth'

import Initial from 'src/pages/Initial/Initial'
import Login from 'src/pages/Login/Login'
import CreateAccount from 'src/pages/CreateAccount/CreateAccount'
import ForgotPassword from 'src/pages/ForgotPassword/ForgotPassword'
import Footer from 'src/components/Footer/Footer'
import Home from 'src/pages/Home/Home'

const Routers = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <AccountProvider> 
          <Routes>
            <Route index element={ <Initial /> }/>
            <Route path='/login' element={ <Login /> } />
            <Route path='/criarconta' element={ <CreateAccount /> } />
            <Route path='/esqueciminhasenha' element={ <ForgotPassword /> } />
            <Route path='/inicio' element={ <RequireAuth><Home/></RequireAuth> }/>  
          </Routes>
        </AccountProvider>
        <Footer />
      </BrowserRouter>
    </AuthProvider>
    
  )
}

export default Routers