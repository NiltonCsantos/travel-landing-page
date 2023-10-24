import Cover from "../cover"
import Header from "../header"
import SectionCaroulsel from "../main-caroulsel"
import Footer from "../footer"

import "./container.css"

import { Outlet } from "react-router-dom"

export default()=>{

  return(
  
    <div id="container">
        <Header/>
        <Outlet/>
        <SectionCaroulsel/>
        <Footer/>
  </div>
  )
}