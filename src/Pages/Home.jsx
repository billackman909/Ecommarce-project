import React from 'react';
import Productlist from '../Components/Productlist';

const Home = () => {
  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#f9f9f9" }}>
      <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "20px" }}>
        <h1 style={{ textAlign: "center", fontSize: "32px", fontWeight: "bold", marginBottom: "30px", color: "#333" }}>
          Our Products
        </h1>
        <Productlist />
      </div>
    </div>
  );
};

export default Home;

