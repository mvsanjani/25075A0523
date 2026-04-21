// REGISTER
function register() {
  localStorage.setItem("user", regUser.value);
  localStorage.setItem("pass", regPass.value);
  alert("Registered!");
  window.location = "index.html";
}

// LOGIN
function login() {
  if (
    loginUser.value === localStorage.getItem("user") &&
    loginPass.value === localStorage.getItem("pass")
  ) {
    window.location = "catalog.html";
  } else {
    alert("Invalid");
  }
}

// CART
let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name, price) {
  cart.push({ name, price });
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Added");
}

// DISPLAY CART
let div = document.getElementById("cartItems");

if (div) {
  let items = JSON.parse(localStorage.getItem("cart")) || [];
  let total = 0;
  let output = "";

  items.forEach(i => {
    total += i.price;
output += `<p>${i.name} - &#8377;${i.price}</p>`;  });

output += `<h4>Total: &#8377;${total}</h4>`;  div.innerHTML = output;
}