import './App.scss';
// import {  } from ;
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from "../src/pages/LoginPage/LoginPage"
import Navbar from './components/Navbar/Navbar';
import CreateAccountPage from './pages/CreateAccountPage/CreateAccountPage';
import UserProfilePage from "./pages/UserProfilePage/UserProfilePage";
import Footer from './components/Footer/Footer';
import EditSummaryPage from './pages/EditPages/EditSummaryPage';
import AddTechPage from './pages/AddPage/AddPage';
import TechniquesPage from './pages/TechniquesPage/TechniquesPage';
import TechniquesDetailsPage from './pages/TechniquesDetailPage/TechniquesDetailPage';
import LandingPage from './pages/LandingPage/LandingPage';
import PositionsPage from './pages/PositionsPage/PositionsPage';
import PositionsDetailsPage from './pages/PositionsDetailsPage/PositionsDetailsPage';
import EditTechsPage from './pages/EditPages/EditTechsPage';



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
      <Route path='techs/:id' element= {<TechniquesPage/>}/>
      <Route path='techs/:id/edit' element= {<EditTechsPage/> }/>
      <Route path='/edit/:summaryid' element ={<EditSummaryPage/>}/>
      <Route path='/add/techs' element = {<AddTechPage />}/>
      <Route path='/positions' element ={<PositionsPage/>}/>
      <Route path= '/positions/:id' element ={<PositionsDetailsPage/>}/>
    </Routes>
    <Footer />
    </BrowserRouter>
  );
}

export default App;
