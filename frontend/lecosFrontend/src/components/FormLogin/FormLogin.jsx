import React, { useState } from "react";
import "./FormLogin.css";
import { Link } from 'react-router-dom';

const FormLogin = () => {
  const [name, setName] = useState("cris@emai.com");
  const [senha, setSenha] = useState("1234");
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [error, setError] = useState("");

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name) {
      setError("O campo e-mail é obrigatório.");
      return;
    }

    if (!senha) {
      setError("O campo senha é obrigatório.");
      return;
    }

    setError("");
    console.log("Login enviado:", { name, senha });

    setName("");
    setSenha("");
  };

  return (
    <div className="login-form">
      <h2 className="form-title">MEU LECO´S LOGIN</h2>
      <form className="form-fields" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="E-mail"
          className="form-input"
          value={name}
          onChange={handleName}
        />

        <div className="password-field">
          <input
            type={mostrarSenha ? "text" : "password"}
            placeholder="Senha"
            className="form-input senha-input"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
          <button
            type="button"
            className="toggle-password"
            onClick={() => setMostrarSenha(!mostrarSenha)}
          >
            {mostrarSenha ? "Ocultar" : "Mostrar"}
          </button>
        </div>


        <p className="form-error">{error || "\u00A0"}</p>

        <div className="form-links">
          <Link to="/cadastro" className="form-link">
            Cadastre-se
          </Link>
          <Link to="/esqueci-senha" className="form-link">
            Esqueci a senha
          </Link>
        </div>

        <button type="submit" className="form-button">
          <Link to="/pedidos" className="form-link">Entrar</Link>
        </button>
      </form>
    </div>
  );
};

export default FormLogin;
