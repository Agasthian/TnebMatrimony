import React, {useEffect} from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import {connect} from 'react-redux'

import Header from './components/Header'
import './App.css';
import * as actions from './action'


const Dashboard = () => <h2> Dashboard</h2>
const SurverNew = () => <h2> SurverNew</h2>
const Landing = () => <h2> Landing</h2>

const App = (props)=> {
  useEffect(()=>{
    props.fetchUser();
  })

  return (
    <div>
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path='/' element={<Landing/>}/>
          <Route path='/dash' element={<Dashboard/>}/>
          <Route path='/survey/new' element={<SurverNew/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default connect(null,actions)(App);
