import './App.css';
import Home from './components/Home';
import { Routes,Route } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import Veg from './components/Veg';
import Nonveg from './components/Nonveg';
import Juice from './components/Juice';
import Cart from './components/Cart';
import Orders from './components/Orders';
function App() {
  return (
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/orders" element={<Orders/>} />
        <Route path='/veg' element={<Veg/>}/>
        <Route path='/non-veg' element={<Nonveg/>}/>
        <Route path='/juice' element={<Juice/>}/>
      </Routes>
  );
}

export default App;
