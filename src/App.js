import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from "../src/pages/LoginPage/LoginPage"
import Navbar from './components/Navbar/Navbar';
import CreateAccountPage from './pages/CreateAccountPage/CreateAccountPage';
import UserProfilePage from "./pages/UserProfilePage/UserProfilePage";
import Footer from './components/Footer/Footer';

function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/login' element = {<LoginPage />} />
      <Route path='/useraccount' element = {<CreateAccountPage/>} />
      <Route path='/useraccount/:id' element = {<UserProfilePage/>}/>
    </Routes>
    <Footer />
    </BrowserRouter>
  );
}

export default App;
