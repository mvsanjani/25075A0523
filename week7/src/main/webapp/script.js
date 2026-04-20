let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name, price) {
  cart.push({ name, price });
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Added!");
}

const cartItems = document.getElementById("cartItems");

if (cartItems) {
  let items = JSON.parse(localStorage.getItem("cart")) || [];
  let total = 0;
  let html = "";

  items.forEach(item => {
    total += item.price;
    html += `
      <div>
        <span>${item.name}</span>
        <span>&#8377;${item.price}</span>
      </div>
    `;
  });

  html += `<h3>Total: &#8377;${total}</h3>`;
  cartItems.innerHTML = html;
}