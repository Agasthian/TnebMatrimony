import React, {useEffect} from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import {connect} from 'react-redux'

import './styles/main.scss'

import Home from './pages/Home/home.component'
import Dashboard from './pages/Dashboard/dash.components'
import Login from './pages/Login/login.components'

import * as actions from './action'


const SurverNew = () => <h2> SurverNew</h2>



const App = (props)=> {

  //Fetches user data on app load - fetch user is accessed via action cretor of redux library
  useEffect(()=>{
    props.fetchUser();
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
    
      
  );
}

export default connect(null,actions)(App);
