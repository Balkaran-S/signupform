import Navbar from "./component/Navbar";
import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./component/Home";
import About from "./component/About";
import Contact from "./component/Contact";
import Form from "./component/Form";
import 'bootstrap/dist/css/bootstrap.min.css'

export default function App() {
  return (
    <div  className="container">
      <BrowserRouter >
      <Navbar />
        <Routes>
          <Route path='/About' element={<About/>} ></Route>
          <Route path="/Home" element={<Home />} ></Route>
          <Route path='/Contact' element={<Contact/>}></Route>
          <Route path="/Form" element={<Form/>} ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  ) 
}