💐 Perfumique — AI-Powered Perfume E-Commerce Website

Perfumique is a modern perfume e-commerce web application that combines AI-based image recognition with a smooth shopping experience.
Users can search perfumes by text or upload a perfume image to find visually similar products — powered by TensorFlow.js MobileNet.

🛍️ Features

🔎 Smart Search Bar — Search products using text.

🧠 AI Image Search — Upload an image and get similar perfumes recommended by an AI model.

🛒 Add to Cart — Add your favorite perfumes and view them on a separate cart page.

👤 User Authentication — Sign Up, Login, and Logout system using localStorage.

🖼️ Dynamic Product Display — “Just Arrived” and “Featured Products” sections dynamically rendered.

✉️ Contact & About Sections — Includes company info and a working contact form layout.

🌸 Responsive UI — Fully styled for a clean and elegant perfume brand experience.

🧩 Tech Stack

Frontend: HTML5, CSS3, JavaScript

AI Integration: TensorFlow.js + MobileNet (for image-based product search)

Storage: LocalStorage (for authentication and cart data)

⚙️ How It Works

User Signup/Login:

New users register with name, email, and password.

Returning users can log in and access all features.

AI Image Search:

Users upload an image of a perfume bottle.

The app uses the MobileNet model to extract image features.

It compares the uploaded image with product images and finds the most similar ones.

Cart Functionality:

Users can add products to the cart.

Cart contents are stored in localStorage.

The cart page allows product removal or continuing shopping.

Logout:

Logs the user out and redirects to the login page.

🧠 AI Model

Model Used: MobileNetV2 (TensorFlow.js)

Purpose: Image feature extraction for similarity comparison

Logic:

Calculates both shape and color similarity between uploaded and store images.

Ranks products based on combined similarity score.

📁 Folder Structure
Perfumique/
│
├── index.html         # Main website
├── login.html         # Login page
├── signup.html        # Signup page
├── cart.html          # Cart page
├── products.js        # Product data
├── script.js          # JavaScript for interactivity
├── style.css          # Styling for all pages
└── images/            # Perfume & brand images

📸 Preview

Homepage Sections:

AI-based image search

Just Arrived products

Featured products

Customer testimonials

Brand logos

About & Contact sections

Cart Page:

Clean layout for viewing added perfumes

Option to remove products or continue shopping


👩‍💻 Developer

Name: Nagalakshmi M
Project: Perfumique — AI Integrated Perfume E-commerce Website
Year: 2025
