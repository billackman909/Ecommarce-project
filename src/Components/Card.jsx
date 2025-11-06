import React from "react";

const Card = ({ card = [], addToCart, removeCart }) => {
  // Safe reduce (if card is undefined, default [] handles it)
  const total = card.reduce((a, c) => a + c.Price * c.qty, 0);

  return (
    <div style={{ width: "100%" }}>
      <div
        style={{
          border: "1px solid #ddd",
          padding: "20px",
          borderRadius: "8px",
          backgroundColor: "white",
          boxShadow: "0 2px 4px rgba(0,0,0,0.1)"
        }}>
        <h2 style={{ marginTop: 0, marginBottom: "20px", fontSize: "24px", fontWeight: "bold" }}>
          Cart 🛒
        </h2>

        {/* If empty */}
        {card.length === 0 ? (
          <p style={{ textAlign: "center", color: "#666", padding: "20px" }}>
            Your cart is empty
          </p>
        ) : (
          <>
            {/* Items in cart */}
            <div style={{ maxHeight: "400px", overflowY: "auto", marginBottom: "15px" }}>
              {card.map((item) => (
                <div 
                  key={item.id} 
                  style={{ 
                    marginBottom: "15px",
                    paddingBottom: "15px",
                    borderBottom: "1px solid #eee"
                  }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
                    <h4 style={{ margin: 0, fontSize: "16px", fontWeight: "600" }}>{item.name}</h4>
                    <span style={{ fontSize: "16px", fontWeight: "bold", color: "#007bff" }}>
                      ${item.Price}
                    </span>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                      <button 
                        onClick={() => removeCart(item)}
                        style={{
                          backgroundColor: "#dc3545",
                          color: "white",
                          border: "none",
                          padding: "5px 12px",
                          borderRadius: "4px",
                          cursor: "pointer",
                          fontSize: "16px",
                          fontWeight: "bold",
                          width: "32px",
                          height: "32px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center"
                        }}
                        onMouseOver={(e) => e.target.style.backgroundColor = "#c82333"}
                        onMouseOut={(e) => e.target.style.backgroundColor = "#dc3545"}
                      >
                        -
                      </button>
                      <span style={{ fontSize: "16px", fontWeight: "500", minWidth: "30px", textAlign: "center" }}>
                        {item.qty}
                      </span>
                      <button 
                        onClick={() => addToCart(item)}
                        style={{
                          backgroundColor: "#28a745",
                          color: "white",
                          border: "none",
                          padding: "5px 12px",
                          borderRadius: "4px",
                          cursor: "pointer",
                          fontSize: "16px",
                          fontWeight: "bold",
                          width: "32px",
                          height: "32px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center"
                        }}
                        onMouseOver={(e) => e.target.style.backgroundColor = "#218838"}
                        onMouseOut={(e) => e.target.style.backgroundColor = "#28a745"}
                      >
                        +
                      </button>
                    </div>
                    <span style={{ fontSize: "16px", fontWeight: "600" }}>
                      ${(item.Price * item.qty).toFixed(2)}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Total */}
            <hr style={{ border: "none", borderTop: "2px solid #ddd", margin: "20px 0" }} />
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <h3 style={{ margin: 0, fontSize: "20px", fontWeight: "bold" }}>Total:</h3>
              <h3 style={{ margin: 0, fontSize: "24px", fontWeight: "bold", color: "#007bff" }}>
                ${total.toFixed(2)}
              </h3>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Card;
