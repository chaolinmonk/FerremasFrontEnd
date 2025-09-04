import { Children } from "react";
import "./page.css"
export default function Home() {
  return (
    <div id="bg">
      <div id="loginCard">
        <div id="loginCardInputs">
          <h2>Iniciar Sesión</h2>
          <input type="email" name="loginCardInputsEmail" id="loginCardInputsEmail" />
          <input type="password" name="loginCardInputsPassword" id="loginCardInputsPassword" />
          <div id="options">
            <div id="buttons">
              <button type="button">nena</button>
              <button type="button">nena</button>  
            </div>
            <div id="register">
              <a href="">Registrarse</a>  
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
