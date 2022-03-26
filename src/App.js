import bootstrap from "../node_modules/bootstrap/dist/css/bootstrap.rtl.min.css";
import './App.css';
import Home from './components/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AddUser from './components/AddUser';
import EditUser from './components/EditUser';

function App() {
  return (
    <div>

          <BrowserRouter>
             
             <Routes>
              <Route path="/" element= {<Home />}/> 
              <Route path="/AddUser" element= {<AddUser />}/>
              <Route path="/EditUser/:userId" element= {<EditUser />}/>
             </Routes>

          </BrowserRouter> 
 
        

    </div>
  );
}

export default App;
