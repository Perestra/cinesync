import React from 'react'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Initial from 'src/pages/Initial/Initial'
import Footer from 'src/components/Footer/Footer'

const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={ <Initial /> }/>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default Routers