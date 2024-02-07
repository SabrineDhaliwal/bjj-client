import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { AddTechPage, CreateAccountPage, EditSummaryPage, EditTechsPage, LandingPage, LoginPage, PositionsDetailsPage, PositionsPage, TechniquesDetailsPage, TechniquesPage, UserProfilePage } from "./pages/index"




function App() {
  

  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/' element={<LandingPage />}/>
      <Route path='/login' element = {<LoginPage />} />
      <Route path='/createaccount' element = {<CreateAccountPage/>} />
      <Route path='/profile/:id' element = {<UserProfilePage/>}/>
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
