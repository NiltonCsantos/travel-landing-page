import "./cover.css"


import {BsPersonVcard} from "react-icons/bs"


import {GiCommercialAirplane} from "react-icons/gi"

import {TbWorldCheck} from "react-icons/tb"

import{MdConnectingAirports} from "react-icons/md"

import{BsWhatsapp} from "react-icons/bs"
import{AiFillStar} from "react-icons/ai"

import mainImg from "../../assets/images/cover-img.png"

import clienteImg from "../../assets/images/Ellipse 8.png"


export default()=>{
 
  return(
    <div className="cover">

    <div className="main-content">
     
      <h1><span>Descubra</span> onde <br />a vida pulsa <GiCommercialAirplane/> <br /> com <span>intensidade</span></h1>

      <p>
      Descubra onde a vida ganha intensidade. <br /> Viaje e viva momentos únicos
    </p>

    <div className="divulgation">

      <button>
        Vamos nessa
      </button>

      <div className="images">
        

      </div>

    </div>

      
      <ul>
        <li><TbWorldCheck className="icon"/>1200+
            <br /><span>viagens concluídas</span>
        </li>
        <li ><MdConnectingAirports className="icon"/>700+<br />
          <span>Campanhas Concluídas</span>
        </li>
        <li><BsPersonVcard className="icon"/> 5000+
        <br /><span>Passageiros satisfeitos</span></li>
      </ul>


    </div>

    <div className="cover-image">

      <img src={mainImg} alt="" />

      <div className="support">
          <h3>24 horas</h3>
          <p>suporte online</p>
      </div>

      <div className="contact">
          <BsWhatsapp className="whatsapp"/>
          <p>Faça seu pedido</p>
      </div>

      <div className="client">
        <img src={clienteImg} alt="" />
        <div className="reviews">
        <span>
          <AiFillStar/>
          <AiFillStar/>
          <AiFillStar/>
          <AiFillStar/>
          <AiFillStar/>
          
          </span>
          <p>Nível de avaliação</p>
        </div>
      </div>
    
    </div>

    

  </div>
  )

}