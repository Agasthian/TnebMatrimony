import React, {useEffect} from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import {connect} from 'react-redux'
import { ThemeProvider } from 'styled-components'

import GlobalStyles from './themes/globalStyles'
import theme from './themes/theme'
import Landing from './pages/Landing/landing.component'
import Dashboard from './pages/Dashboard/dash.components'
import Login from './pages/Login/login.components'


import * as actions from './action'


const SurverNew = () => <h2> SurverNew</h2>


const App = (props)=> {
  useEffect(()=>{
    props.fetchUser();
  })

  return (
    <ThemeProvider theme={theme}>
    <GlobalStyles/>
      
      <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Landing/>}/>
          <Route path='/login' element={<Login/>} />
          <Route path='/dash' element={<Dashboard/>}/>
          <Route path='/survey/new' element={<SurverNew/>}/>
        </Routes>
      </BrowserRouter>
      </>

    </ThemeProvider>
  );
}

export default connect(null,actions)(App);
