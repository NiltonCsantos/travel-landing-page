import Cover from "../cover"
import Header from "../header"
import SectionCaroulsel from "../main-caroulsel"
import Footer from "../footer"

import "./container.css"
export default()=>{

  return(
  
    <div id="container">
        <Header/>
        <Cover/>
        <SectionCaroulsel/>
        <Footer/>
  </div>
  )
}