import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import './App.scss';
import Home from './components/home/Home';
import Login from './components/User/Login';
import Navbar from './components/Navbar/Navbar';
import Register from './components/User/Register';
import UserZone from './components/User/UserZone';
import { getCheckSession } from './redux/auth/auth.actions';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCheckSession());
    // eslint-disable-next-line
  }, []);
  return (
    <div className="app">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/gestion' element={<UserZone/>}></Route>
      </Routes>
    
    </div>
  );
}

export default App;
