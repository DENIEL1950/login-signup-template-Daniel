import React, { useState } from "react";

function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(`Submitted username: ${username}, password: ${password}, email: ${email}`);
  };

  return (
    <div className="form-wrap">
      <form className="signup-form" onSubmit={handleSubmit}>
        <input
          type="email"
          className="input"
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
        />
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
        <input type="submit" className="button" value="Sign Up" />
      </form>
      <div className="help-text">
        <p>Al registrarte, aceptas nuestra</p>
        <p>
          <a href="#">Términos de servicio</a>
        </p>
      </div>
    </div>
  );
}

export default Signup;
