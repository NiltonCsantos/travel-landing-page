import "./header.css"

import Menu from "./menu"

import { Link } from "react-router-dom"

export default ()=>{

  return(
    <header>

      <h2>FLY.<span>GO</span></h2>

      <ul>
        <li> <Link to={"/"}><span>Principal</span></Link> </li>
        <li><a href="#costumers">Depoimentos</a></li>
        <li><Link to={"/destiny"}>Destinos</Link></li>
        <li><a href="#pricing">Preços</a></li>
      </ul>

      <Menu/>
      
    </header>
  )

}