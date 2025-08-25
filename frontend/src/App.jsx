import React from "react";
import { Container } from "react-bootstrap";
import Footer from "./components/Footer.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CartScreen from "./components/Screens/CartScreen.jsx";
import HomeScreen from "./components/Screens/HomeScreen.jsx";
import Header from "./components/Header.jsx";
import SignUpScreen from "./components/Screens/SignUpScreen.jsx";
import LoginScreen from "./components/Screens/LoginScreen.jsx";
import ProductScreen from "./components/Screens/ProductScreen.jsx";

function App() {
  return (
    <>
      <Router>
        <Header />
        <br />
        <br />
        <Routes>
          <Route path="/" element={<HomeScreen />} /> 
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/signup" element={<SignUpScreen />} />
          <Route path="/cart" element={<CartScreen />} />
          <Route path="/product/:id" element={<ProductScreen />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
