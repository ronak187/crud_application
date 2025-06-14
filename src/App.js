import logo from './logo.svg';
import './App.css';

//component
import NavBar from './components/NavBar'
import CodeforInterview from './components/CodeforInterview';
import AddUser from './components/AddUser';
import AllUser from './components/AllUser';
import EditUser from './components/EditUser';


import { BrowserRouter, Routes, Route  } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
     <NavBar/>
     <Routes>
      <Route path = "/" element={<CodeforInterview/>} />
      <Route path = "/add" element={<AddUser/>} />
      <Route path = "/all" element={ <AllUser/>} />
      <Route path = "/edit/:id" element={ <EditUser/>} />
       
      
       
     </Routes>
    </BrowserRouter>
  );
}

export default App;
