import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainMenu from './screens/mainMenu/mainMenu.js';
import SignIn from './screens/signIn/signIn.js';
import Login from './screens/login/login.js';
import CustomerDashboard from './screens/customerDashboard/customerDashboard.js';

import { UserContextProvider } from './contexts/userContext.js';
import './App.css';

function App() {
  return (
    <div className='App'>
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
    </div>
  );
}

export default App;
