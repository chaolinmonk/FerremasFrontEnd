"use client";

import { useState } from "react";
import "./page.css";

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [error, setError] = useState("");

  // ✅ Validación de email con regex
  const checkMail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleRegister = () => {
    if (!email || !password || !userName) {
      setError("Favor llenar todos los campos");
      return;
    }

    if (!checkMail(email)) {
      setError("El correo no es válido");
      return;
    }

    console.log("Registrado!", email, password, userName);
    setError(""); // limpiar errores al registrar bien
  };

  return (
    <div id="bg">
      <div id="loginCard">
        <h1>F<span>ERREMA</span>X</h1>
        <div id="loginCardInputs">
          <h2>Crear usuario</h2>

          <input
            type="text"
            id="loginCardInputsName"
            placeholder="Nombre de Usuario"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />

          <input
            type="email"
            id="loginCardInputsEmail"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            id="loginCardInputsPassword"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {/* Mensaje dinámico */}
          {error && <p style={{ color: "#f26157" }}>{error}</p>}
          <div id="options">
            <div id="buttons">
              <button type="button" onClick={handleRegister}>
                Registrarse
              </button>
            </div>
            <div id="register">
              <a href="/">Ya tengo cuenta</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
