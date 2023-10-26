# Food Cart Menu App

## Overview

The Food Cart Menu App is a web-based application built with React that allows users to browse and order food from various restaurants. The app features a user-friendly interface and incorporates various technologies to provide a seamless user experience.

## Project Links

- [GitHub Repository](https://github.com/NehalSoni765/food-cart-menu-app)
- [Live Demo](https://foodcartmenu.netlify.app)

## Pages

- **Home**: Displays a list of restaurants with options to filter and view restaurant menus. Users can also search for specific restaurants.

- **About Us**: Information about the app and its creators.

- **Contact Us**: Provides contact information and a form for user inquiries.

- **Cart**: Displays the items added to the user's cart. Users can proceed with the order or clear the cart.

- **User Name**: Allows users to personalize their experience by setting their username.

## Restaurant Menu

The "Restaurant Menu" page provides users with a detailed view of the restaurant's menu. It includes categories of items with titles, descriptions, prices, and images. Users can easily add items to their cart from this page. Here's an overview of this page's features:

- **Category Selection**: The menu allows users to choose categories of items. Clicking on a category will expand it to reveal the items within.

- **Item Details**: Each menu item is displayed with its title, description, price, and an image for easy identification.

- **Add to Cart**: Users can add items to their cart by clicking the "Add" button associated with each menu item.

This page utilizes various technologies and components, including React state management,reusable component data mapping, and a user-friendly interface to make the ordering process seamless for users.

## Features

- **Lazy Loading**: The "About Us" page is lazy-loaded to improve performance.

- **Routing**: Navigation between different pages is achieved through React Router with mster page header for an improved user experience..

- **Shimmer (Loader)**: A loading animation is displayed while data is being fetched to enhance the user experience.

- **State Management**: Redux is used to manage the application's state, including cart items.

- **Higher Order Component (HOC)**: HOCs are utilized to enhance component behavior and manage user authentication.

- **Parent Controlling Component**: The parent component controls the opening and closing of menu categories in the restaurant menu.

- **Hooks**: Various React hooks, such as useState, useContext, and useEffect, are used to manage state, context, and component lifecycle.

- **Data Mapping**: Data from the Swiggy real-time API is mapped and displayed on the app.

- **Window Event Handling**: Window events are used to control the UI, such as online-offline status.

- **Custom Hooks**: Custom hooks are created to manage specific functionalities, enhancing code reusability.

- **Destructuring**: ES6 destructuring is used for cleaner and more efficient code.

## Tech Stack

The app is built using the following technologies and practices:

- React
- React Router
- Redux
- Lazy Loading
- Shimmer (Loader)
- Higher Order Component (HOC)
- Parent Controller Component
- Custom Hooks
- Destructuring
- Swiggy Real-Time API
- Unit Testing

## Installation

To run the app locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/NehalSoni765/food-cart-menu-app.git
2. Navigate to the project directory:
   ```bash
   cd food-cart-menu-app
3. Install the necessary dependencies:
   ```bash
   npm install
4. Start the development server:
   ```bash
   npm run start
7. Open the browser https://localhost:1234.

