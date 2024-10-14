# Github repositorylink :
#    https://github.com/guri5405/Backend-ShoppyGlobe.git

# ShoppyGlobe E-commerce Backend - Node.js & Express.js API

# Project Overview
This project provides the backend API for ShoppyGlobe, an e-commerce application. It is built using Node.js, Express.js, and MongoDB, with key functionalities such as product management, shopping cart operations, user authentication, and more. The API is designed to handle e-commerce operations like fetching product lists, managing cart items, and securing routes with JWT-based authentication.

# Features
1.Product Management:
Fetch all products.
Retrieve detailed product information by ID.

2.Cart Management:
Add products to the cart.
Update product quantities in the cart.
Remove products from the cart.

3.User Authentication:
Register new users.
Login users and return JWT tokens for authenticated actions.
Protect cart routes so only logged-in users can manage their carts.

4.MongoDB Integration:
Store and manage product and cart data using MongoDB.
Perform full CRUD operations on product and cart collections.

5.API Error Handling & Validation:
Ensure all routes handle errors gracefully and validate inputs before processing.

6.API Testing:
All routes tested using ThunderClient for functionality validation.

# API Endpoints
1.Product Routes
GET /products: Fetch a list of all available products.
GET /products/:id: Get detailed information for a product by its ID.

2.Cart Routes
POST /cart: Add a product to the shopping cart.
PUT /cart/:id: Update the quantity of a product in the cart.
DELETE /cart/:id: Remove a product from the cart.

3.User Routes
POST /register: Register a new user.
POST /login: Log in a user and return a JWT token for authorization.

# Tech Stack
Node.js: JavaScript runtime for backend development.

Express.js: Web application framework for routing and middleware.

MongoDB: NoSQL database to store products and cart items.

JWT (JSON Web Tokens): Used for secure user authentication.

ThunderClient: A lightweight API testing tool.

