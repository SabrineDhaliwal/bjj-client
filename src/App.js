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
      <Route path='/' element = {<LoginPage />} />
      <Route path='/createaccount' element = {<CreateAccountPage/>} />
      <Route path='/userprofile/:id' element = {<UserProfilePage/>}/>
    </Routes>
    <Footer />
    </BrowserRouter>
  );
}

export default App;
