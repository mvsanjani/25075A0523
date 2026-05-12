import React, { useState } from "react";

function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Registered Successfully!");
    console.log(form);
  };

  return (
    <div style={styles.container}>
      <h2>Register</h2>

      <form onSubmit={handleSubmit}>
        <label>Name:</label> 
        <input name="name" placeholder="Name" onChange={handleChange} required />
        <br/> <br/>
        <label>Email:</label>
        <input name="email" placeholder="Email" onChange={handleChange} required />
        <br/> <br/>
        <label>Password:</label>
        <input name="password" type="password" placeholder="Password" onChange={handleChange} required />
        <br/> <br/>
        <button type="submit">Register</button>
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

export default Register;