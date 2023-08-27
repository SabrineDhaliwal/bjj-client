import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from "../src/pages/LoginPage/LoginPage"
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element = {<LoginPage />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
