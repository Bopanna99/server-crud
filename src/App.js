import React from "react";
import {BrowserRouter, Routes , Route} from 'react-router-dom'
import {ToastContainer} from 'react-toastify'
import Menu from "./component/Menu";
import Home from "./component/Home";
import Create from "./component/Create";
import Update from "./component/Update";
import Pnf from "./component/Pnf";

function App(props){
  return(
    <BrowserRouter>
      <Menu/>
      <ToastContainer autoClose={4000} position=""/>
      <Routes>
        <Route path={`/`} element={<Home/>}></Route>
        <Route path={`/create`} element={<Create/>}></Route>
        <Route path={`/update/:id`} element={<Update/>}></Route>
        <Route path={`/*`} element={<Pnf/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App


