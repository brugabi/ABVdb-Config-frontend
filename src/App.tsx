import {BrowserRouter, Route, Routes } from "react-router-dom"
import { Login } from "./pages/Login"
import { Home } from "./pages/Home"
import { Opcoes } from "./pages/Opcoes"


function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route element={<Login></Login>} path="/login"></Route>
        <Route element={<Home></Home> } path="/"/>
        <Route element={<Opcoes></Opcoes>} path="/opcoes"></Route>
    </Routes>
    </BrowserRouter>
    
    
    </>
  )
}

export default App
