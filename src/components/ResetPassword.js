import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function ResetPassword() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    // Aquí iría la lógica para enviar un correo electrónico con una contraseña temporal

    // Simulación de envío de correo
    setTimeout(() => {
      alert("A temporary password has been sent to your email.");
      navigate("/new-password");
    }, 1000);
  };

  return (
    <div className="form-wrap">
      <form onSubmit={handleSubmit}>
        <h2>Restablecer la contraseña</h2>
        <input
          type="email"
          className="input"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit" className="button">Enviar contraseña temporal</button>
      </form>
    </div>
  );
}

export default ResetPassword;
