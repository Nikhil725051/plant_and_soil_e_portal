import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import Plants from './pages/plants/Plants';
import PlantDetail from './pages/plantDetail/PlantDetail';
import Header from './components/Header';
import { Box, Card, Typography } from '@mui/material';
import Articles from './pages/articles/Articles';
import Article from './pages/article/Article';
import Videos from './pages/videos/Videos';
import Quizzes from './pages/quizzes/Quizzes';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Header />
     <Box>
       <Card
         sx={{
           backgroundColor: 'rgba(255, 255, 255, 0.2)',
           backdropFilter: 'blur(50px)',
           boxShadow: '0px 0px 8px 2px rgba(0,0,0,0.12)',
           marginX: '30px',
           borderRadius: 5,
           position: 'relative',           
           top: '-50px'
         }}>
         <Routes>
           <Route exact path='/plants' element={<Plants />}></Route>
           <Route exact path='/plantDetail' element={<PlantDetail />}></Route>
           <Route exact path='/articles' element={<Articles />}></Route>
           <Route exact path='/articles/article' element={<Article />}></Route>
           <Route exact path='/videos' element={<Videos />}></Route>
           <Route exact path='/quizzes' element={<Quizzes />}></Route>
           <Route exact path='/' element={<Plants />}></Route>
         </Routes>
       </Card>
     </Box>
     <Typography mb={2} textAlign={'center'}>&copy; 2023 PlantNexus</Typography>
    </BrowserRouter>
  );
}

export default App;
