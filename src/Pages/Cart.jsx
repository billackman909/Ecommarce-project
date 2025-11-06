import React from 'react';
import { useCart } from '../Context/CartContext';
import Card from '../Components/Card';

const Cart = () => {
  const { card, addToCart, removeCard } = useCart();
  const total = card.reduce((a, c) => a + c.Price * c.qty, 0);

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#f9f9f9" }}>
      <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "20px" }}>
        <h1 style={{ textAlign: "center", fontSize: "32px", fontWeight: "bold", marginBottom: "30px", color: "#333" }}>
          Shopping Cart
        </h1>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "flex-start" }}>
          <div style={{ width: "100%", maxWidth: "600px" }}>
            <Card card={card} addToCart={addToCart} removeCart={removeCard} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;

