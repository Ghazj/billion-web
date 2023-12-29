import { Link, BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import MainMenu from './screens/mainMenu/mainMenu.js';
import SignIn from './screens/signIn/signIn.js';
import Login from './screens/login/login.js';
import CustomerDashboard from './screens/customerDashboard/customerDashboard.js';

import { UserContextProvider } from './contexts/userContext.js';

import logo from './logo.svg';
import './App.css';

function App() {
  const [user, setUser] = useState(true);
  return (
    <UserContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainMenu />} />
          <Route path='/sign-in' element={<SignIn />} />
          <Route path='/login' element={<Login />} />
          <Route path='/customerDashboard' element={<CustomerDashboard />} />
        </Routes>
      </BrowserRouter>
    </UserContextProvider>
  );
}

export default App;
