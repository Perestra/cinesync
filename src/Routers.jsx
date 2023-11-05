import React from 'react'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Initial from 'src/pages/Initial/Initial'
import Header from 'src/components/Header/Header'

const Routers = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={ <Initial /> }/>
      </Routes>
    </BrowserRouter>
  )
}

export default Routers