import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { AddPositionPage, AddTechPage, CreateAccountPage, EditSummaryPage, EditTechsPage, EditProfilePage ,LandingPage, LoginPage,  PositionsPage, TechniquesPage, UserProfilePage } from "./pages/index"
import { useState } from 'react';





function App() {
  const [loggedIn, setLoggedIn] = useState(false)

  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/' element={<LandingPage />}/>
      <Route path='/login' element = {<LoginPage  setLoggedIn={setLoggedIn}/>} />
      <Route path='/createaccount' element = {<CreateAccountPage setLoggedIn={setLoggedIn}/>} />

      <Route path='/profile/:id' element = {<UserProfilePage loggedIn={loggedIn}/>} />
      <Route path='profile/:id/edit' element ={<EditProfilePage />} /> 

      <Route path='/edit/:summaryid' element ={<EditSummaryPage/>}/>

      <Route path='/techs' element = {<TechniquesPage/>}/>
      <Route path='techs/:id' element= {<TechniquesPage/>}/>
      <Route path='techs/:id/edit' element= {<EditTechsPage/> }/>
      <Route path='/add/techs' element = {<AddTechPage />}/>

      <Route path='/positions' element ={<PositionsPage/>}/>
      <Route path= '/positions/:id' element ={<PositionsPage/>}/> 
      <Route path='/add/postion' element ={<AddPositionPage/>}/>
    </Routes>
    <Footer />
    </BrowserRouter>
  );
}

export default App;
