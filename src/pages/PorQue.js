import React, { useState } from "react";
import FormEmotions from '../components/FormEmotions';
import PorqueImg from "../images/Porque.jpg";
import "../style/Porque.css";
import NavBar from "../components/NavBar";
import Banho from "../images/Porque/Porque/banho.png";
import Barulho from "../images/Porque/Porque/barulho.png";
import Bebida from "../images/Porque/Porque/bebida.png";
import Bichinho from "../images/Porque/Porque/bichinho.png";
import Cafeina from "../images/Porque/Porque/cafeina.png";
import Celular from "../images/Porque/Porque/celular.png";
import Cheiro from "../images/Porque/Porque/cheiro.png";
import Doces from "../images/Porque/Porque/doces.png";
import Escola from "../images/Porque/Porque/escola.png";
import Familia from "../images/Porque/Porque/familia.png";
import Fastfood from "../images/Porque/Porque/fastfood.png";
import Festa from "../images/Porque/Porque/festa.png";
import Fumaca from "../images/Porque/Porque/Fumaca.png";
import Insonia from "../images/Porque/Porque/insonia.png";
import Luz from "../images/Porque/Porque/luz.png";
import Reuniao from "../images/Porque/Porque/reuniao.png";

function Humor() {
  const [buttonEmotions, setButtonEmotions] = useState(false);

  return (
    <div>
      <img src={PorqueImg} alt="humor" className="PorqueImg" />
      <NavBar />
      <table className="containerTablePq">
        <tbody>
        <FormEmotions trigger={buttonEmotions} setTrigger={setButtonEmotions}></FormEmotions>
          <tr>
            <td><img src={Cafeina} alt="Cafeina" className="porque" onClick={() => setButtonEmotions(true)}/></td>
            <td><img src={Celular} alt="Celular" className="porque" onClick={() => setButtonEmotions(true)}/></td>
            <td><img src={Cheiro} alt="Cheiro" className="porque" onClick={() => setButtonEmotions(true)}/></td>
            <td><img src={Doces} alt="Doces" className="porque" onClick={() => setButtonEmotions(true)}/></td>
          </tr>
          <tr>
            <td><img src={Escola} alt="Escola" className="porque" onClick={() => setButtonEmotions(true)}/></td>
            <td><img src={Familia} alt="Familia" className="porque" onClick={() => setButtonEmotions(true)}/></td>
            <td><img src={Fastfood} alt="Fastfood" className="porque" onClick={() => setButtonEmotions(true)}/></td>
            <td><img src={Festa} alt="Festa" className="porque" onClick={() => setButtonEmotions(true)}/></td>
          </tr>
          <tr>
            <td><img src={Fumaca} alt="Fumaca" className="porque" onClick={() => setButtonEmotions(true)}/></td>
            <td><img src={Insonia} alt="Insonia" className="porque" onClick={() => setButtonEmotions(true)}/></td>
            <td><img src={Luz} alt="Luz" className="porque" onClick={() => setButtonEmotions(true)}/></td>
            <td><img src={Reuniao} alt="Reuniao" className="porque" onClick={() => setButtonEmotions(true)}/></td>
          </tr>
          <tr>
            <th><img src={Banho} alt="Banho" className="porque" onClick={() => setButtonEmotions(true)}/></th>
            <th><img src={Barulho} alt="Barulho" className="porque" onClick={() => setButtonEmotions(true)}/></th>
            <th><img src={Bebida} alt="Bebida" className="porque" onClick={() => setButtonEmotions(true)}/></th>
            <th><img src={Bichinho} alt="Bichinho" className="porque" onClick={() => setButtonEmotions(true)}/></th>
          </tr>
        </tbody>
      </table>
      
    </div>
  );
}

export default Humor;
