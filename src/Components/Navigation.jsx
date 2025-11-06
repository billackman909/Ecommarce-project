import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../Context/CartContext';

const Navigation = () => {
  const location = useLocation();
  const { getTotalItems } = useCart();
  const totalItems = getTotalItems();

  return (
    <nav style={{
      backgroundColor: "white",
      padding: "15px 20px",
      boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
      marginBottom: "20px"
    }}>
      <div style={{
        maxWidth: "1400px",
        margin: "0 auto",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }}>
        <Link 
          to="/" 
          style={{
            textDecoration: "none",
            fontSize: "24px",
            fontWeight: "bold",
            color: "#333"
          }}
        >
          🛍️ Mini E-commerce
        </Link>
        
        <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
          <Link
            to="/"
            style={{
              textDecoration: "none",
              color: location.pathname === "/" ? "#007bff" : "#666",
              fontWeight: location.pathname === "/" ? "bold" : "normal",
              padding: "8px 15px",
              borderRadius: "4px",
              backgroundColor: location.pathname === "/" ? "#e7f3ff" : "transparent",
              transition: "all 0.3s"
            }}
          >
            Products
          </Link>
          
          <Link
            to="/cart"
            style={{
              textDecoration: "none",
              color: location.pathname === "/cart" ? "#007bff" : "#666",
              fontWeight: location.pathname === "/cart" ? "bold" : "normal",
              padding: "8px 15px",
              borderRadius: "4px",
              backgroundColor: location.pathname === "/cart" ? "#e7f3ff" : "transparent",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              position: "relative",
              transition: "all 0.3s"
            }}
          >
            Cart 🛒
            {totalItems > 0 && (
              <span style={{
                backgroundColor: "#007bff",
                color: "white",
                borderRadius: "50%",
                width: "20px",
                height: "20px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "12px",
                fontWeight: "bold"
              }}>
                {totalItems}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

