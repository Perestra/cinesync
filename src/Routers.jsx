import React from 'react'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Initial from 'src/pages/Initial/Initial'
import Footer from 'src/components/Footer/Footer'
import Login from 'src/pages/Login/Login'

const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={ <Initial /> }/>
        <Route path='/login' element={ <Login /> } />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default Routers