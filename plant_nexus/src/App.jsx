import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import Plants from './pages/plants/Plants';

function App() {
  return (
   <BrowserRouter>
   <Navbar />
   <Routes>
    <Route exact path='/plants' element={<Plants />}></Route>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
