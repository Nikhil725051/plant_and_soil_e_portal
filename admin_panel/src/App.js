import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Signup from './pages/signup/Signup';
import Login from './pages/login/Login';
import Home from './pages/home/home';
import { useContext } from 'react';
import { AuthContext } from './context/AuthContext';
import AddPlant from './pages/addPlant/AddPlant';
import WriteArticle from './pages/writeArticle/WriteArticle';
import AddQuiz from './pages/addQuiz/AddQuiz';
import AddVideo from './pages/addVideo/AddVideo';



function App() {

  const { user } = useContext(AuthContext)
  console.log(user.user)

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/signup' element={<Signup />}></Route>
        <Route exact path='/login' element={<Login />}></Route>
        <Route exact path='*' element={<Navigate to={user.user ? '/home' : '/login'}/>}></Route>
        
        {user.user
        &&
       <>
         <Route exact path='/home' element={<Home />}></Route>
         <Route exact path='/addPlant' element={<AddPlant />}></Route>
         <Route exact path='/writeArticle' element={<WriteArticle />}></Route>
         <Route exact path='/addQuiz' element={<AddQuiz />}></Route>
         <Route exact path='/addVideo' element={<AddVideo />}></Route>
       </>
        
        }
      </Routes>
    </BrowserRouter>
  );
}

export default App;
