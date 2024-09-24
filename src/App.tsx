import {BrowserRouter, Route, Routes } from "react-router-dom"
import { Login } from "./pages/Login"
import { Home } from "./pages/Home"
import { Opcoes } from "./pages/Opcoes"
import { SequenciaDonwload } from "./pages/SequenciaDownload"
import { ErrorPage } from "./pages/ErrorPage"


function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route element={<Login></Login>} path="/login"></Route>
        <Route element={<Home></Home> } path="/"/>
        <Route element={<Opcoes></Opcoes>} path="/opcoes"></Route>
        <Route element={<SequenciaDonwload></SequenciaDonwload>} path="/download"></Route>
        <Route element={<ErrorPage></ErrorPage>} path="*"></Route>
    </Routes>
    </BrowserRouter>
    
    
    </>
  )
}

export default App
