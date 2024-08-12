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

// fetch('https://api.escuelajs.co/api/v1/products')
//   .then((response) => response.json())
//   .then((products) => {
//     console.log('title:', products[0].title);
//     console.log('images:', products[0].images[0]);
//     console.log(products);
//     products.forEach((product, i) => {
//       console.log(typeof product.images[0], ':', product.images[0], i);
//       const productDiv = document.createElement('div');
//       productDiv.classList.add('pro');

//       productDiv.innerHTML = `
//         <img src="${product.images[0]}" alt="${product.name}">
//         <div class="des">
//           <span>${product.brand}</span>
//           <h5>${product.name}</h5>
//           <div class="star">
//             ${'★'.repeat(product.rating)}${'☆'.repeat(5 - product.rating)}
//           </div>
//           <h4>$${product.price}</h4>
//         </div>
//         <a href="#" class="cart" data-id="${
//           product.id
//         }"><i class="fa-solid fa-cart-shopping"></i></a>
//       `;

//       productsContainer.appendChild(productDiv);
//     });
//   })
//   .catch((error) => console.error('Error fetching products:', error));

// fetch('https://jsonplaceholder.typicode.com/users').then((res) => {
//   return res.json().then((data) => {
//     data.forEach((user) => {
//       const markup = `<li>${user.name}</li>`;

//       document.querySelector('ul').insertAdjacentHTML('beforeend', markup);
//     });
//     console.log(data);
//   });
// });

// fetch('https://api.escuelajs.co/api/v1/products').then((res) => {
//   return res.json().then((data) => {
//     data.forEach((user) => {
//       const markup = `<li>${user.name}</li>`;

//       document.querySelector('ul').insertAdjacentHTML('beforeend', markup);
//     });
//     console.log(data[0]);
//   });
// });

// fetch('https://fakestoreapi.com/products/1').then((res) => {
//   return res.json().then((data) => {
//     data.forEach((user) => {
//       const markup = `<li>${user.name}</li>`;

//       document.querySelector('ul').insertAdjacentHTML('beforeend', markup);
//     });
//     console.log(data);
//   });
// });

// fetch('https://api.escuelajs.co/api/v1/products').then((res) => {
//   return res.json().then((data) => {
//     console.log(data);
//   });
// });
// fetch('https://fakestoreapi.com/products/1').then((res) => {
//   return res.json().then((data) => {
//     console.log(data);
//   });
// });

// `<div class="pro-container">
//         <div class="pro">
//           <img src="img/products/f1.jpg" alt="" />
//           <div class="des">
//             <span>addidas</span>
//             <h5>Cartoon Astronaut T-Shirts</h5>
//             <div class="star">
//               <i class="fas fa-star"></i>
//               <i class="fas fa-star"></i>
//               <i class="fas fa-star"></i>
//               <i class="fas fa-star"></i>
//               <i class="fas fa-star"></i>
//             </div>
//             <h4>$78</h4>
//           </div>
//           <a href="#"><i class="fa-solid fa-cart-shopping cart"></i></a>
//         </div>`;
