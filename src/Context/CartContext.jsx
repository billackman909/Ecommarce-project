import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export const CartProvider = ({ children }) => {
  const [card, setcard] = useState([]);

  const addToCart = (product) => {
    setcard((prevCard) => {
      const exist = prevCard.find((x) => x.id === product.id);
      if (exist) {
        return prevCard.map((x) => 
          x.id === product.id ? {...x, qty: x.qty + 1} : x
        );
      }
      else {
        return [...prevCard, {...product, qty: 1}];
      }
    });
  };

  const removeCard = (product) => {
    setcard((prevCard) => {
      const exist = prevCard.find((x) => x.id === product.id);
      if (!exist) return prevCard;
      
      if (exist.qty === 1) {
        return prevCard.filter((x) => x.id !== product.id);
      }
      else {
        return prevCard.map((x) => 
          x.id === product.id ? {...x, qty: x.qty - 1} : x
        );
      }
    });
  };

  const getTotalItems = () => {
    return card.reduce((sum, item) => sum + item.qty, 0);
  };

  const value = {
    card,
    addToCart,
    removeCard,
    getTotalItems
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};

