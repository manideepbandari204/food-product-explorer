# 🍔 Food Product Explorer

##  Objective
This project is a web application built using ReactJS that allows users to explore food products using the OpenFoodFacts API. Users can search, filter, sort, and view detailed information about food products.

---

##  Features

### 🔹 Homepage
- Displays list of food products
- Shows:
  - Product name
  - Image
  - Category
  - Ingredients
  - Nutrition Grade
- Pagination using "Load More"

### 🔹 Search
- Search products by name

### 🔹 Barcode Search
- Fetch product using barcode

### 🔹 Category Filter
- Dynamically fetched categories from API
- Filter products by category

### 🔹 Sorting
- Sort by:
  - Product Name (A-Z / Z-A)
  - Nutrition Grade (A-E / E-A)

### 🔹 Product Detail Page
- Displays:
  - Product image
  - Ingredients
  - Nutrition values
  - Labels

### 🔹 UI/UX
- Responsive design
- Tailwind CSS styling
- Modern UI with animations

---

##  Technologies Used

- ReactJS
- Tailwind CSS
- OpenFoodFacts API

---

##  API Used

Base URL:
https://world.openfoodfacts.org/

Endpoints:
- Products: `/products.json`
- Search: `/cgi/search.pl`
- Category: `/category/{category}.json`
- Barcode: `/api/v0/product/{barcode}.json`

---

##  How It Works

- Fetches product data from OpenFoodFacts API
- Uses React state to manage:
  - Products
  - Filters
  - Sorting
- Component-based architecture for clean code

---

## ⏱ Time Taken

Approximately: **8–10 hours**

---

##  Setup Instructions

```bash
npm install
npm start
