import React from 'react'
import {BrowserRouter,Routes,Route, Navigate} from 'react-router-dom'
import Home from './Home'
import Login from './Login'
import Profile from './Profile'

const Router = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>} ></Route>
        <Route path='/Home' element={<Home/>} ></Route>
        <Route path='/Profile/:id/:name' element={<Profile/>}></Route>
        {/* <Route path='*'element={<h1>this folder is not found</h1>}></Route> */}
        <Route path='*'element={<Navigate to={'/Home'}></Navigate>}></Route>
      </Routes>
      </BrowserRouter> 
      {/* router */}
    </div>
  )
}

export default Router
