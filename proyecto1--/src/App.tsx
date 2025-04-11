import Home from "./Page/Home/Home"
import About from "./Page/About/About"
import User from "./Page/User/User";
import PageNotFound from "./Page/Error/PageNotFound"
import { BrowserRouter as Router } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Nav from "./componentes/Nav";
import Profile from "./Page/User/Profile";
import Clothing from "./Page/tienda/clothing";
function App() {
  

  return (
    <>
      
        <div>
        <Router>
        <Nav></Nav>
        <Routes>
          
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/store" element={<Clothing></Clothing>}></Route> 
          <Route path="/error" element={<PageNotFound></PageNotFound>}></Route>
          <Route path="/user/:name" element={<User></User>}></Route>
          <Route path="/profile" element={<Profile></Profile>}></Route>
        </Routes>

      </Router>

        </div>
    </>
  )
}

export default App
