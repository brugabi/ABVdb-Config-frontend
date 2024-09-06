import {BrowserRouter, Route, Routes } from "react-router-dom"
import { Login } from "./pages/Login"
import { Home } from "./pages/Home"


function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route element={<Login></Login>} path="/login"></Route>
        <Route element={<Home></Home> } path="/"/>
    </Routes>
    </BrowserRouter>
    
    
    </>
  )
}

export default App
