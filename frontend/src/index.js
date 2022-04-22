import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import Main from './main'
import BroMain from './bro_main'
import Log from './log'
import SignUp from './sign_up'
import FoodCards from './foodCards'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' exact={true} element={<Main />} />
      <Route path='/browse' exact={true} element={<BroMain />} />
      <Route path='/login' exact={true} element={<Log />} />
      <Route path='/register' exact={true} element={<SignUp />} />
      <Route path='/cards' exact={true} element={<FoodCards />} />
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)