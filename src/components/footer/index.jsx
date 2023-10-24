import "./footer.css"


import {AiOutlineMail, AiOutlineInstagram} from "react-icons/ai"

import {MdOutlineWhatsapp} from "react-icons/md"

export default()=>{
  return(
    <aside>
      <footer>
        <h2>
        FLY.<span>GO</span>
        </h2>
        <div className="copy">
        <p>Todos os direitos reservados</p>
        
        <div className="networks">
        <MdOutlineWhatsapp/>
        <AiOutlineInstagram/>
        <AiOutlineMail/>
        </div>

        </div>
      </footer>
    </aside>
  )
}