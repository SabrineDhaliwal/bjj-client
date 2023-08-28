import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from "../src/pages/LoginPage/LoginPage"
import Navbar from './components/Navbar/Navbar';
import CreateAccountPage from './pages/CreateAccountPage/CreateAccountPage';
import LandingPage from './pages/LandingPage/LandingPage';

function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element = {<LoginPage />} />
      <Route path='/createaccount' element = {<CreateAccountPage/>} />
      <Route path='/:id' element = {<LandingPage/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
