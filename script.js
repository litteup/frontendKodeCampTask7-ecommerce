// Script for navigation bar
const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

// Check if navbar is active,if not click the menu bar to see the menu items

if (bar) {
  bar.addEventListener('click', () => {
    nav.classList.add('active');
  });
}

// close the hamburger menu using the x icon
if (close) {
  close.addEventListener('click', () => {
    nav.classList.remove('active');
  });
}

// Fetch products from API and display them
const productsContainer = document.getElementById('products-container');

//using fakestoreapi.com/products to get data into the featured product section
fetch('https://fakestoreapi.com/products')
  .then((response) => response.json())
  .then((products) => {
    console.log(products);
    console.log(products.title, products.image);
    products.forEach((product, i) => {
      console.log(product.title, product.image);
      const productDiv = document.createElement('div');
      productDiv.classList.add('pro');

      productDiv.innerHTML = `
        <img src="${product.image}" alt="${product.title}">
        <div class="des">
          <span>${product.category}</span>
          <h5>${product.title}</h5>
          <div class="star">
            ${'★'.repeat(product.rating.rate)}${'☆'.repeat(
        5 - product.rating.rate
      )}
          </div>
          <h4>$${product.price}</h4>
        </div>
        <a href="#" class="cart" data-id="${
          product.id
        }"><i class="fa-solid fa-cart-shopping"></i></a>
      `;

      productsContainer.appendChild(productDiv);
    });
  })
  .catch((error) => console.error('Error fetching products:', error));

// implementing the add to cart functionality

let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Function to update Local Storage
function updateLocalStorage() {
  localStorage.setItem('cart', JSON.stringify(cart));
}

// Event delegation for Add to Cart buttons
productsContainer.addEventListener('click', (e) => {
  if (e.target.closest('.cart')) {
    e.preventDefault();
    const productId = e.target.closest('.cart').getAttribute('data-id');
    addToCart(productId);
  }
});

function addToCart(productId) {
  // Check if product already in cart
  const existingProduct = cart.find((item) => item.id === productId);
  if (existingProduct) {
    existingProduct.quantity += 1;
  } else {
    cart.push({ id: productId, quantity: 1 });
  }
  updateLocalStorage();
  alert('Product added to cart!');
}
