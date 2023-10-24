import "./section.css"

import img from "../../../assets/images/Rectangle 3583.png"

export default()=>{
  return(
    <section>

      <article>

        <p>Descubra o mundo conosco, sua agência de viagens especializada em aventuras únicas e personalizadas. Deixe-nos realizar seus sonhos de viagem, conectando você a destinos exóticos e experiências autênticas. Nossos especialistas cuidam de todos os detalhes, para que você aproveite sua jornada sem preocupações. Transforme cada viagem em uma memória inesquecível. Vem viajar conosco!</p>

        <img src={img} alt="" />
        
      </article>

      <article>

        <h2>
        Por que você deve <br />escolher ir conosco?
        </h2>

        <div className="number">
          <h5>1</h5>
          <p>
          Oferecemos uma equipe experiente e especializada que conhece os melhores destinos e pode criar itinerários personalizados.
          </p>

        </div>
        <div className="number">

        <h5>2</h5>
        <p> Fornecemos um atendimento exclusivo, adaptado às suas necessidades, garantindo que sua viagem seja memorável e sem preocupações.</p>

        </div>
        <div className="number">

        <h5>3</h5>
        Oferecemos acesso a destinos exclusivos e experiências autênticas que transformarão suas viagens em memórias inesquecíveis.

        </div>

      </article>

    </section>
  )
}