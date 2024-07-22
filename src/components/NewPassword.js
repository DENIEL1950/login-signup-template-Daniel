import React, { useState } from "react";

function NewPassword() {
  const [tempPassword, setTempPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (newPassword !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    // Aquí iría la lógica para actualizar la contraseña en el servidor

    alert("Your password has been successfully reset.");
  };

  return (
    <div className="form-wrap">
      <form onSubmit={handleSubmit}>
        <h2>Establecer nueva contraseña</h2>
        <input
          type="password"
          className="input"
          placeholder="Enter temporary password"
          value={tempPassword}
          onChange={(e) => setTempPassword(e.target.value)}
          required
        />
        <input
          type="password"
          className="input"
          placeholder="Enter new password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          required
        />
        <input
          type="password"
          className="input"
          placeholder="Confirm new password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <button type="submit" className="button">Restablecer la contraseña</button>
      </form>
    </div>
  );
}

export default NewPassword;
