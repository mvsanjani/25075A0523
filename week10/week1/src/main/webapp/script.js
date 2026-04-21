// REGISTER
function register() {
  localStorage.setItem("user", regUser.value);
  localStorage.setItem("pass", regPass.value);
  alert("Registered Successfully!");
  window.location.href = "index.html";
}

// LOGIN
function login() {
  if (
    loginUser.value === localStorage.getItem("user") &&
    loginPass.value === localStorage.getItem("pass")
  ) {
    window.location.href = "catalog.html";
  } else {
    alert("Invalid Credentials");
  }
}

// CART
let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name, price) {
  cart.push({ name, price });
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Added to Cart!");
}

// DISPLAY CART
const cartItems = document.getElementById("cartItems");

if (cartItems) {
  const items = JSON.parse(localStorage.getItem("cart")) || [];
  let total = 0;
  let html = "";

  items.forEach(item => {
    total += item.price;
    html += `
      <div class="cart-item">
        <span>${item.name}</span>
		<span>&#8377;${item.price}</span>

      </div>
    `;
  });

  html += `<h3>Total: &#8377;${total}</h3>`;
  cartItems.innerHTML = html;
}
