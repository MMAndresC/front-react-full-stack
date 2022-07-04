import { Routes, Route } from 'react-router-dom';

import './App.scss';
import Home from './components/home/Home';
import Login from './components/User/Login';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="app">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
      </Routes>
    
    </div>
  );
}

export default App;
