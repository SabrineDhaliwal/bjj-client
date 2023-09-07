import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from "../src/pages/LoginPage/LoginPage"
import Navbar from './components/Navbar/Navbar';
import CreateAccountPage from './pages/CreateAccountPage/CreateAccountPage';
import UserProfilePage from "./pages/UserProfilePage/UserProfilePage";
import Footer from './components/Footer/Footer';
import EditSummaryPage from './pages/EditSummaryPage/EditSummaryPage';
import AddTechPage from './pages/AddPage/AddPage';
import TechniquesPage from './pages/TechniquesPage/TechniquesPage';
import TechniquesDetailsPage from './pages/TechniquesDetailPage/TechniquesDetailPage';
import LandingPage from './pages/LandingPage/LandingPage';
import PositionsPage from './pages/PositionsPage/PositionsPage';



function App() {
  
  

  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element={<LandingPage />}/>
      <Route path='/login' element = {<LoginPage />} />
      <Route path='/createaccount' element = {<CreateAccountPage/>} />
      <Route path='/userprofile/:id' element = {<UserProfilePage/>}/>
      <Route path='/techs' element = {<TechniquesPage/>}/>
      <Route path ='techs/:id' element= {<TechniquesDetailsPage/>}/>
      <Route path='/edit/:summaryid' element ={<EditSummaryPage/>}/>
      <Route path='/add/techs' element = {<AddTechPage />}/>
      <Route path='/positions' element ={<PositionsPage/>}/>
    </Routes>
    <Footer />
    </BrowserRouter>
  );
}

export default App;
