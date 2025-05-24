import React from "react";
import { useCartStore } from "../store/useStore";

const CartSummary = () => {
  const cart = useCartStore((state) => state.cart);

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div style={{ marginBottom: "20px" }}>
      <h2>Cart Summary</h2>
      {cart.map((item) => (
        <div
          key={item.id}
          style={{ borderBottom: "1px solid #ddd", padding: "10px" }}
        >
          <p>
            <strong>{item.title}</strong> - ${item.price}
          </p>
        </div>
      ))}
      <h3>Total: ${total.toFixed(2)}</h3>
    </div>
  );
};

export default CartSummary;
