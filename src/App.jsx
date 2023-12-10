import { Route, Routes } from "react-router-dom"
import NavBar from "./components/NavBar"
import Home from "./pages/Home"
import ItemsDetails from "./pages/ItemsDetails"


function App() {


  return (
    <>
      <NavBar></NavBar>
      <Routes>
        <Route exact path="/" Component={Home}/>
        <Route exact path="/dets" Component={ItemsDetails}/>
      </Routes>
    </>
  )
}

export default App
