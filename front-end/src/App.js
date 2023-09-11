import './App.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import SignUp from './components/SignUp';
import { BrowserRouter } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import PrivateComponent from './components/PrivateComponent';
import Login from './components/Login';
import AddProduct from './components/AddProduct';
import ProductList from './components/ProductList';
import UpdateProduct from './components/UpdateProduct';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>

          <Route element={<PrivateComponent/>}>
          <Route path="" element={<ProductList/>}/>
          <Route path="/add" element={<AddProduct/>}/>
          <Route path="/update/:_id" element={<UpdateProduct/>}/>
          <Route path="/profile" element={<h1>Profile Comonent</h1>}/>
          </Route>

          <Route path='/signup' element={<SignUp/>} />
          <Route path='/login' element={<Login/>} />
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
