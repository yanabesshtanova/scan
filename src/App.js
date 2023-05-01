import { BrowserRouter ,Routes, Route } from "react-router-dom"
import Footer from "./components/footer/Footer"
import Header from "./components/header/Header"
import Home from "./pages/home/Home"
import Faq from "./pages/FAQ/Faq"
import Rate from "./pages/rate/Rate"
import Register from "./pages/register/Register"


const App = () => {
  return (
    <BrowserRouter>
    

    <Header/>
    <Routes>
      
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/faq" element={<Faq/>}/>
         <Route exact path="/rate" element={<Rate/>}/>
         <Route exact path ="/register" element={<Register/>}/>
      
    </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

export default App

