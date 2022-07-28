import React, {useEffect} from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import {connect} from 'react-redux'

import * as actions from './action'
import './styles/main.scss'

import Home from './pages/home/home.components'
import Dashboard from './pages/dashboard/dash.components'
import Login from './pages/login/login.components'

const SurverNew = () => <h2> SurverNew</h2>

const App = (props) => {

   //Fetches user data on app load - fetch user is accessed via action cretor of redux library
   useEffect(()=>{
    props.fetchUser();
    console.log('props', props)
  })

  return (
    <>
       <BrowserRouter>
         <Routes>
           <Route path='/' element={<Home/>}/>
           <Route path='/login' element={<Login/>} />
            <Route path='/dash' element={<Dashboard/>}/>
           <Route path='/survey/new' element={<SurverNew/>}/>
         </Routes>
       </BrowserRouter>
    </>
  )
}

export default connect(null,actions)(App);