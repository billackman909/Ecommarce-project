import React from 'react';
import { useCart } from '../Context/CartContext';

const Products = [
  {
    id: 1909,
    name: "T-Shirt",
    Price: 20,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 22,
    name: "T-Shirt",
    Price: 20,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 220,
    name: "T-Shirt",
    Price: 120,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 12,
    name: "T-Shirt",
    Price: 200,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    name: "Shirt",
    Price: 20,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    name: "Perfume",
    Price: 20,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 30,
    name: "Perfume",
    Price: 20,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 300,
    name: "Perfume",
    Price: 20,
    image: "https://via.placeholder.com/150",
  },
];

const Productlist = () => {
  const { addToCart } = useCart();

  return (
    <div style={{ width: "100%", flex: "1" }}>
      <h2 style={{ marginBottom: "20px", fontSize: "24px", fontWeight: "bold" }}>Products</h2>
      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", justifyContent: "center" }}>
        {Products.map((product) => (
          <div
            key={product.id}
            style={{
              border: "1px solid #ddd",
              padding: "15px",
              borderRadius: "8px",
              backgroundColor: "white",
              boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
              width: "250px",
              display: "flex",
              flexDirection: "column",
              gap: "10px"
            }}>
            <img 
              src={product.image} 
              alt={product.name}
              style={{
                width: "100%",
                height: "200px",
                objectFit: "cover",
                borderRadius: "4px"
              }}
            />
            <h3 style={{ margin: 0, fontSize: "18px" }}>{product.name}</h3>
            <p style={{ margin: 0, fontSize: "20px", fontWeight: "bold", color: "#007bff" }}>
              ${product.Price}
            </p>
            <button 
              onClick={() => addToCart(product)}
              style={{
                backgroundColor: "#007bff",
                color: "white",
                border: "none",
                padding: "10px 15px",
                borderRadius: "4px",
                cursor: "pointer",
                fontSize: "16px",
                fontWeight: "500",
                transition: "background-color 0.3s"
              }}
              onMouseOver={(e) => e.target.style.backgroundColor = "#0056b3"}
              onMouseOut={(e) => e.target.style.backgroundColor = "#007bff"}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Productlist