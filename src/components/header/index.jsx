import "./header.css"

import Menu from "./menu"

export default ()=>{

  return(
    <header>

      <h2>FLY.<span>Go</span></h2>

      <ul>
        <li> <span>Principal</span> </li>
        <li>Sobre</li>
        <li>Destinos</li>
        <li>Preços</li>
      </ul>

      <Menu/>
      
    </header>
  )

}