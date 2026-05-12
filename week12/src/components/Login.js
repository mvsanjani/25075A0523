import React, { useState } from "react";

function Login() {
  const [login, setLogin] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Login Successful!");
    console.log(login);
  };

  return (
    <div style={styles.container}>
      <h2>Login</h2>

      <form onSubmit={handleSubmit}>
        <label>Email:</label>
        <input name= "email" placeholder="Email" onChange={handleChange} required />
        <br/> <br/>
        <label>Password:</label>
        <input name="password" type="password" placeholder="Password" onChange={handleChange} required />
        <br/> <br/>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    marginTop: "50px"
  }
};

export default Login;