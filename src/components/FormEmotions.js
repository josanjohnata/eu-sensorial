import React from 'react';
import '../style/FormEmotions.css';

function FormEmotions(props) {
  return props.trigger ? (
    <div className="formEmotions">
        <h2>Fale um pouco sobre esse sentimento.</h2>
        <form className="mainLogin">
          <textarea></textarea>
          <button
            id="buttonLogin"
            type="button"
            onClick={() => props.setTrigger(false)}
          >
            Enviar
          </button>
        </form>
        {props.children}
      </div>
  ) : (
    ""
  );
}

export default FormEmotions;
