import React from "react";

function Contact() {
  return (
    <div style={styles.container}>
      <h2>Contact Us</h2>
      <p>Email: support@studentms.com</p>
      <p>Phone: +91 9876543210</p>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    marginTop: "50px"
  }
};

export default Contact;