import React from "react";
import { useHistory } from "react-router";
import HumorImg from "../images/humor.jpg";
import "../style/Humor.css";
import NavBar from "../components/NavBar";
import Engracada from "../images/carinhas/carinhas/engraçado.png";
import Apaixonado from "../images/carinhas/carinhas/apaixonado.png";
import Pensativo from "../images/carinhas/carinhas/pensativo.png";
import Feliz from "../images/carinhas/carinhas/feliz.png";
import Surpreso from "../images/carinhas/carinhas/surpreso.png";
import Alegre from "../images/carinhas/carinhas/alegre.png";
import Chorando from "../images/carinhas/carinhas/chorando.png";
import Nervoso from "../images/carinhas/carinhas/nervoso.png";
import Ok from "../images/carinhas/carinhas/ok.png";
import Calmo from "../images/carinhas/carinhas/calmo.png";
import Assustado from "../images/carinhas/carinhas/assustado.png";
import Triste from "../images/carinhas/carinhas/triste.png";
import Irritado from "../images/carinhas/carinhas/irritado.png";
import Divertido from "../images/carinhas/carinhas/divertido.png";
import Aborrecido from "../images/carinhas/carinhas/aborrecido.png";
import Satisfeito from "../images/carinhas/carinhas/satisfeito.png";

function Humor() {
  const history = useHistory("/porque")

  return (
    <div>
      <img src={HumorImg} alt="humor" className="humorImg" />
      <NavBar />
      <table className="containerTable">
        <tbody>
        <tr>
            <th><img onClick={() => history.push("/porque")} src={Engracada} alt="Engracada" className="Emotions"/></th>
            <th><img onClick={() => history.push("/porque")} src={Apaixonado} alt="Apaixonado" className="Emotions"/></th>
            <th><img onClick={() => history.push("/porque")} src={Pensativo} alt="Pensativo" className="Emotions"/></th>
            <th><img onClick={() => history.push("/porque")} src={Feliz} alt="Feliz" className="Emotions"/></th>
          </tr>
          <tr>
            <td><img onClick={() => history.push("/porque")} src={Surpreso} alt="Surpreso" className="Emotions"/></td>
            <td><img onClick={() => history.push("/porque")} src={Alegre} alt="Alegre" className="Emotions"/></td>
            <td><img onClick={() => history.push("/porque")} src={Chorando} alt="Chorando" className="Emotions"/></td>
            <td><img onClick={() => history.push("/porque")} src={Nervoso} alt="Nervoso" className="Emotions"/></td>
          </tr>
          <tr>
            <td><img onClick={() => history.push("/porque")} src={Ok} alt="Ok" className="Emotions"/></td>
            <td><img onClick={() => history.push("/porque")} src={Calmo} alt="Calmo" className="Emotions"/></td>
            <td><img onClick={() => history.push("/porque")} src={Assustado} alt="Assustado" className="Emotions"/></td>
            <td><img onClick={() => history.push("/porque")} src={Triste} alt="Triste" className="Emotions"/></td>
          </tr>
          <tr>
            <td><img onClick={() => history.push("/porque")} src={Irritado} alt="Irritado" className="Emotions"/></td>
            <td><img onClick={() => history.push("/porque")} src={Divertido} alt="Divertido" className="Emotions"/></td>
            <td><img onClick={() => history.push("/porque")} src={Aborrecido} alt="Aborrecido" className="Emotions"/></td>
            <td><img onClick={() => history.push("/porque")} src={Satisfeito} alt="Satisfeito" className="Emotions"/></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Humor;
