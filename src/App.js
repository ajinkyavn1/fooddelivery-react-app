import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import HomePage from './Pages/Home';
import CartPage from './Pages/Cart';
function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/cart' element={<CartPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
