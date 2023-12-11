import { Route, Routes } from "react-router-dom"
import NavBar from "./components/NavBar"
import Home from "./pages/Home"
import ItemsDetails from "./pages/ItemsDetails"
import Contact from './pages/Contact'


function App() {


  return (
    <>
      <NavBar></NavBar>
      <Routes>
        <Route exact path="/mini-shop/" Component={Home}/>
        <Route exact path="/mini-shop/dets" Component={ItemsDetails}/>
        <Route exact path='/mini-shop/contact' Component={Contact}/>
      </Routes>
    </>
  )
}

export default App
