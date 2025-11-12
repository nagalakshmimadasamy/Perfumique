


const products = [
  { name: "Lavender Bliss", desc: "Soft and soothing lavender aroma for everyday calm.", price: 499, img: "images/p1.jpg" },
  { name: "Golden Aura", desc: "Warm vanilla and amber for a golden touch of luxury.", price: 299, img: "images/p2.jpg" },
  { name: "Rose Whisper", desc: "Elegant rose petals with a hint of musk and charm.", price: 599, img: "images/p3.jpg" },
  { name: "Ocean Dream", desc: "Fresh sea breeze scent for those who love freedom.", price: 399, img: "images/p4.avif" },
  { name: "Midnight Desire", desc: "Bold and mysterious fragrance with deep undertones.", price: 499, img: "images/p5.avif" },
  { name: "Vanilla Essence", desc: "Sweet vanilla essence blended with creamy luxury.", price: 599, img: "images/p6.avif" },
  { name: "Floral Charm", desc: "A vibrant floral mix that captures your joyful spirit.", price: 699, img: "images/p7.avif" },
  { name: "Amber Glow", desc: "Rich amber tones that radiate confidence and warmth.", price: 399, img: "images/p8.avif" },
  { name: "Jasmine Mist", desc: "Fresh jasmine petals with a soft, romantic aroma.", price: 799, img: "images/p9.avif" },
  { name: "Crystal Bloom", desc: "Light floral fragrance with a sparkling, modern touch.", price: 599, img: "images/p10.avif" },
  { name: "Citrus Charm", desc: "Fresh lemon and orange zest.", price: 499, img: "images/citrus.jpg" },
];

// Function to create product box
function createProductBox(product) {
  const box = document.createElement('div');
  box.className = 'box';
  box.innerHTML = `
    <img src="${product.img}" alt="${product.name}">
    <p><strong>${product.name}</strong><br>${product.desc}</p>
    <p class="price">&#8377;${product.price}</p>
  `;
  return box;
}

// Add products to all sliders
document.querySelectorAll('.product-track').forEach(track => {
  products.forEach(product => {
    track.appendChild(createProductBox(product));
  });
});

// Make arrows work for **each slider individually**
document.querySelectorAll('.product-container').forEach(container => {
  const track = container.querySelector('.product-track');
  const leftArrow = container.querySelector('.left-arrow');
  const rightArrow = container.querySelector('.right-arrow');

  leftArrow.addEventListener('click', () => {
    track.scrollBy({ left: -300, behavior: 'smooth' });
  });

  rightArrow.addEventListener('click', () => {
    track.scrollBy({ left: 300, behavior: 'smooth' });
  });
});
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const tracks = document.querySelectorAll('.product-track');

function createProductBox(product) {
  const box = document.createElement('div');
  box.className = 'box';
  box.innerHTML = `
    <img src="${product.img}" alt="${product.name}">
    <p><strong>${product.name}</strong><br>${product.desc}</p>
    <p class="price">&#8377;${product.price}</p>
  `;
  return box;
}

// Add products to all sliders initially
tracks.forEach(track => {
  products.forEach(product => {
    track.appendChild(createProductBox(product));
  });
});

// Search function (triggered by button click)
searchBtn.addEventListener('click', () => {
  const query = searchInput.value.toLowerCase();
  tracks.forEach(track => {
    track.innerHTML = ''; // clear current products
    products
      .filter(product => product.name.toLowerCase().includes(query))
      .forEach(product => {
        track.appendChild(createProductBox(product));
      });
  });
});

// ===== Arrow Scroll Functionality =====
function setupArrows() {
  const arrows = document.querySelectorAll('.arrow');

  arrows.forEach(arrow => {
    const track = arrow.parentElement.querySelector('.product-track');
    arrow.addEventListener('click', () => {
      if (arrow.classList.contains('left-arrow')) {
        track.scrollBy({ left: -300, behavior: 'smooth' });
      } else {
        track.scrollBy({ left: 300, behavior: 'smooth' });
      }
    });
  });
}

// Call once at start
setupArrows();

// Call again after search (to reattach listeners if DOM changes)
searchBtn.addEventListener('click', () => {
  const query = searchInput.value.toLowerCase();
  tracks.forEach(track => {
    track.innerHTML = '';
    products
      .filter(product => product.name.toLowerCase().includes(query))
      .forEach(product => {
        track.appendChild(createProductBox(product));
      });
  });
  setupArrows(); 
});

function createProductBox(product) {
  const box = document.createElement('div');
  box.className = 'box';
  box.innerHTML = `
    <img src="${product.img}" alt="${product.name}">
    <p><strong>${product.name}</strong><br>${product.desc}</p>
    <p class="price">&#8377;${product.price}</p>
    <button class="add-cart-btn">Add to Cart</button>
  `;
  return box;
}
// ===== CART FUNCTIONALITY =====
let cart = JSON.parse(localStorage.getItem("cart")) || [];


const cartCount = document.createElement('span');
cartCount.className = 'cart-count';
cartCount.textContent = '0';

// Add cart icon to navigation
const nav = document.querySelector('nav');
const cartIcon = document.createElement('div');
cartIcon.className = 'cart-icon';
cartIcon.innerHTML = '🛒';
cartIcon.appendChild(cartCount);
nav.appendChild(cartIcon);

// Add event listener for Add to Cart buttons

document.addEventListener('click', (e) => {
  if (e.target.classList.contains('add-cart-btn')) {
    const btn = e.target;
    const productBox = btn.closest('.box');
    const name = productBox.querySelector('strong').textContent;
    const price = productBox.querySelector('.price').textContent;

    const img = productBox.querySelector("img").src;
cart.push({ name, price, img });
localStorage.setItem("cart", JSON.stringify(cart));
cartCount.textContent = cart.length;

    // Change button text to show success
    btn.textContent = "✅ Added!";
    btn.disabled = true;

    // Optional: revert back after 2 seconds
    setTimeout(() => {
      btn.textContent = "Add to Cart";
      btn.disabled = false;
    }, 2000);
  }
});

// ===== CART POPUP =====
const cartPopup = document.getElementById('cartPopup');
const cartItemsList = document.getElementById('cartItems');
const closeCart = document.getElementById('closeCart');

cartIcon.addEventListener('click', () => {
  window.location.href = 'cart.html';
});


