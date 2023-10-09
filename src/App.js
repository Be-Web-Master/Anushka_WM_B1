// import React from 'react'
// import {ExpiryDateComponent} from './ExpiryDateComponent'
// import SlabPricing from './SlabPricing'
// import Table from './Table'

// const App = () => {
//   return (
//     // <ExpiryDateComponent/>
//     // <SlabPricing/>
//     <Table/>
//   )
// }

// export default App
import React from 'react'
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import { AboutUs } from './pages/AboutUs'
import { Contact } from './pages/Contact'
import { Home } from './pages/Home'
import './App.css'


const App = () => {
  return (
    <>
      <BrowserRouter>
        <NavLink to='/' className={({ isActive }) => isActive && "active-nav"}>
          Home
        </NavLink>
        <NavLink to='/about' className={({ isActive }) => isActive && "active-nav"}>
          AboutUs
        </NavLink>
        <NavLink to='/contact' className={({ isActive }) => isActive && "active-nav"}>
          Contact
        </NavLink>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<AboutUs />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App