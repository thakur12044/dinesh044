
import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./Pages/Login";
import Signup from "./Pages/Register";
import House from "./Pages/House";
import toast, { Toaster } from 'react-hot-toast';
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Productscat from './Pages/Productscat';
import Addproduct from './Pages/Addproduct';

function App() {
  return (
   
    <>
    <Header/>  
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<House/>}/>
     <Route path="/login" element={<Login/>}/>
     <Route path="/register" element={<Signup/>}/>   
     <Route path="/Productscat/:id" element={<Productscat/>}/>
     <Route path="/Addproduct/:id" element={<Addproduct/>}/>
    </Routes>
    </BrowserRouter>
    <Footer/>
    <Toaster
  position="top-right"
  reverseOrder={false}
/>
    </>
  );
}

export default App;