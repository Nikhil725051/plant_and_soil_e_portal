import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Signup from './pages/signup/Signup';
import Login from './pages/login/Login';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/signup' element={<Signup></Signup>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
