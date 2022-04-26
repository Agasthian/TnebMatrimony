
import {BrowserRouter,Routes,Route} from 'react-router-dom'

import Header from './components/Header'
import './App.css';


const Dashboard = () => <h2> Dashboard</h2>
const SurverNew = () => <h2> SurverNew</h2>
const Landing = () => <h2> Landing</h2>

function App() {
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

export default App;
