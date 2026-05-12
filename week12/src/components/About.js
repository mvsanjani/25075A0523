import React from "react";

function About() {
  return (
    <div style={styles.container}>
      <h2>About</h2>
      <p>This is a Student Management System built using React.</p>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    marginTop: "50px"
  }
};

export default About;