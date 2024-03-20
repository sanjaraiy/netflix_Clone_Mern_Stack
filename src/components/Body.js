import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'

import Browser from './Browser'
import Login from './Login'
function Body() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login></Login>}></Route>
            <Route path="/browser" element={<Browser></Browser>}></Route>
        </Routes>
  </BrowserRouter>
  )
}

export default Body