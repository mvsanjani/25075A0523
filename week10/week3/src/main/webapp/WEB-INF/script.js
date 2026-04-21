// REGISTER VALIDATION
function validateRegister() {
  let user = regUser.value.trim();
  let pass = regPass.value.trim();

  // Empty check
  if (user === "" || pass === "") {
    alert("All fields are required");
    return;
  }

  // Username length
  if (user.length < 3) {
    alert("Username must be at least 3 characters");
    return;
  }

  // Password length
  if (pass.length < 5) {
    alert("Password must be at least 5 characters");
    return;
  }

  // Save data
  localStorage.setItem("user", user);
  localStorage.setItem("pass", pass);

  alert("Registered Successfully");
  window.location = "index.html";
}


// LOGIN VALIDATION
function validateLogin() {
  let user = loginUser.value.trim();
  let pass = loginPass.value.trim();

  // Empty check
  if (user === "" || pass === "") {
    alert("All fields are required");
    return;
  }

  // Check credentials
  if (
    user === localStorage.getItem("user") &&
    pass === localStorage.getItem("pass")
  ) {
    alert("Login Successful");
  } else {
    alert("Invalid Username or Password");
  }
}