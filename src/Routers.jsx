import React from 'react'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AccountProvider } from 'src/contexts/AccountContext'

import Initial from 'src/pages/Initial/Initial'
import Login from 'src/pages/Login/Login'
import CreateAccount from 'src/pages/CreateAccount/CreateAccount'
import ForgotPassword from 'src/pages/ForgotPassword/ForgotPassword'
import Footer from 'src/components/Footer/Footer'

const Routers = () => {
  return (
    <BrowserRouter>
      <AccountProvider> 
        <Routes>
          <Route index element={ <Initial /> }/>
          <Route path='/login' element={ <Login /> } />
          <Route path='/criarconta' element={ <CreateAccount /> } />
          <Route path='/esqueciminhasenha' element={ <ForgotPassword /> } />
        </Routes>
      </AccountProvider>
      <Footer />
    </BrowserRouter>
  )
}

export default Routers