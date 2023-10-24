import "./costumers.css";

import p1 from "../../assets/images/p1.png";
import p2 from "../../assets/images/p2.png";
import p3 from "../../assets/images/p3.png";

export default () => {
  return (
    <div className="costumers" id="costumers">
      <h2>
        O que nossos <br /> clientes dizem?
      </h2>

      <div className="explain">
        <div className="costumer">
          <img src={p1} alt="" />

          <div className="description">
            <p>João</p>
            <p>
              Minha viagem foi incrível! A agência superou todas as
              expectativas. Mal posso esperar para a próxima aventura!
            </p>
          </div>
        </div>

        <div className="costumer">
          
          <img src={p3} alt="" />

          <div className="description">
            <p>Júlia</p>
            <p>
              Graças à agência, vivi uma experiência única. Cada detalhe foi
              cuidadosamente planejado, tornando minha viagem inesquecível
            </p>
          </div>
        </div>


        <div className="costumer">
          <img src={p2} alt="" />

          <div className="description">
            <p>Maria</p>
            <p>
              Viajar com eles foi a melhor decisão que tomei. Atendimento
              excepcional e destinos surpreendentes. Recomendo a todos!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
