import React from 'react'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Initial from './pages/Initial/Initial'

const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={ <Initial /> }/>
      </Routes>
    </BrowserRouter>
  )
}

export default Routers