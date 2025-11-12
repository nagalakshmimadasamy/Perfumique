# 🌸 Perfumique – AI-Powered Perfume Store Website

**Perfumique** is a modern, elegant, and AI-powered e-commerce website for perfume lovers.  
It lets users search perfumes by **name or image**, explore collections, and manage a shopping cart.

---

## ✨ Features

### 🧠 AI-Based Search
- Upload an image, and the website finds visually **similar perfumes** using **TensorFlow.js + MobileNetV2**.
- AI compares both **color & visual similarity** of perfume bottles.

### 🔍 Text Search
- Search perfumes instantly by name or description.

### 🛍️ Product Sections
- **Just Arrived** and **Featured Products** sections display dynamically loaded perfumes.
- Each product has a **description**, **price**, and an **Add to Cart** button.

### 🧾 Shopping Cart
- Products can be added to the cart and stored using **localStorage**.
- You can view added products, remove items, and continue shopping.

### 👤 Login, Signup & Logout
- LocalStorage-based user authentication with a **logout** option that redirects to the login page.

### 📰 Blog Section
- Displays perfume-related articles for visitors to explore.

### 💬 Testimonials
- Realistic customer feedback to enhance trust and engagement.

### 🏷️ Brand Showcase
- Carousel of top perfume brands like Chanel, Dior, Gucci, Versace, and more.

### 📩 Contact Form
- Simple contact section for customer inquiries and messages.

---

## 🧠 Tech Stack

| Technology | Purpose |
|-------------|----------|
| **HTML5** | Website structure |
| **CSS3** | Styling and animations |
| **JavaScript (ES6)** | Dynamic UI and interactivity |
| **TensorFlow.js** | AI image recognition |
| **MobileNetV2** | Pre-trained image classification model |
| **LocalStorage** | Cart and user data persistence |

---

## 🧩 Project Structure

Perfumique/
│
├── index.html # Main homepage
├── login.html # Login page
├── signup.html # Signup page
├── cart.html # Cart page
├── products.js # Product details
├── script.js # Website logic and interactivity
├── style.css # Main styling
└── images/ # All perfume and brand images



---

## ⚙️ How It Works
- User logs in or signs up (data stored in LocalStorage).
- AI model (MobileNetV2) loads through TensorFlow.js.
- Uploaded perfume image is analyzed for color and shape similarity.
- Top similar products are displayed dynamically.
- Users can add, view, or remove items from the cart.
- Logout clears session and redirects to the login page.

---

## 👩‍💻 Developer

**Name:** Nagalakshmi M 
**Project Title:** *Perfumique – AI Integrated Perfume E-commerce Website*  
**Year:** 2025
