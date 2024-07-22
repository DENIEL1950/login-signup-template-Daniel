import React, { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (rememberMe) {
      console.log("Remember me is checked");
    }

    console.log(`Submitted username: ${username}, password: ${password}`);
  };

  return (
    <div className="form-wrap">
      <form className="login-form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="input"
          placeholder="Username"
          value={username}
          onChange={handleUsernameChange}
        />
        <input
          type="password"
          className="input"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
        />
        <div className="checkbox-wrap">
          <input
            type="checkbox"
            className="checkbox"
            id="remember_me"
            checked={rememberMe}
            onChange={(event) => setRememberMe(event.target.checked)}
          />
          <label htmlFor="remember_me" className="remember_me">Recordarme para un futuro inicio de sesión</label>
        </div>
        <input type="submit" className="button" value="Login" />
      </form>
      <div className="help-text">
        <p>
          <Link to="/reset-password">Olvidaste tu contraseña?</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
