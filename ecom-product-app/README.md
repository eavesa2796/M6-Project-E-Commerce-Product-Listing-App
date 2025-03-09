# React E-Commerce Product App

## Project Overview
This project is a simple e-commerce product display application built using React. The purpose of this project is to practice working with React components, props, and state while focusing on custom styling without using frameworks like Bootstrap.

## Features & Learning Objectives
Through this project, I practiced:
- Organizing code using React components.
- Managing state with the `useState` hook.
- Passing and handling data between components using props.
- Structuring a React project with a clear component hierarchy.

This project does not yet include event handling, but it provides a solid foundation for when it is introduced later.

## Project Setup
### 1. Setting Up the React App
I created the React project using Vite for a fast and efficient setup:
```sh
npx create-vite ecom-product-app --template react
cd ecom-product-app
```

### 2. Planning the Components
I structured the project using the following components:

#### **App Component (Parent Component)**
- Holds the state for the list of products.
- Passes the product data as props to child components.
- Handles the overall structure of the application.

#### **ProductList Component**
- Receives the list of products as a prop from the `App` component.
- Maps through the product list to render individual `ProductItem` components.
- Handles the display of multiple products.

#### **ProductItem Component**
- Receives product data as props from the `ProductList` component.
- Displays product details including name, price, and description.
- Applies custom styling for better visual differentiation.

## Implementation
I created a state in the `App` component to hold an array of products, each with attributes like `id`, `name`, `price`, and `description`. I then passed this list as a prop to the `ProductList` component, which mapped through the array and rendered each product using the `ProductItem` component.

### Testing & Functionality Check
To ensure that my app works correctly, I tested the following:
- Products are displayed with names, prices, and descriptions.
- Components correctly use props and state.
- The layout and styling provide a visually appealing display.

## Bonus Enhancements
To extend the project, I considered adding:
- A category attribute to filter products by category.
- Images for each product in the `ProductItem` component.

## Final Checklist
Before wrapping up the project, I confirmed that:
- The product list renders correctly.
- State and props are used properly across components.
- CSS styling is applied to enhance the UI.

This project provided a great starting point for working with React components and passing data efficiently. Future enhancements could include event handling, interactivity, and further UI improvements.


