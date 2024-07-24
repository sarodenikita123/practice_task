import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Pages/Home';
import About from './Components/Pages/About';
import Contact from './Components/Pages/Contact';
import Add from './Components/Pages/User/Add';
import Show from './Components/Pages/User/Show';
import Signin from './Components/Pages/User/Signin';
import Navbar from './Components/Layout/Navbar';
import Update from './Components/Pages/User/Update';
import Delete from './Components/Pages/User/Delete';
import Signup from './Components/Pages/User/Signup';


function App() {
  return (
   <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/home' element={<Home/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
      <Route path='/add' element={<Add/>}></Route>
      <Route path='/show' element={<Show/>}></Route>
      <Route path='/update/:userId' element={<Update/>}></Route>
      <Route path='/delete/:userId' element={<Delete/>}></Route>
      <Route path='/signin' element={<Signin/>}></Route>
      <Route path='/signup' element={<Signup/>}></Route>

      
    </Routes>
    </BrowserRouter>
   </>
  );
}

export default App;
