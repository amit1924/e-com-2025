import React, { useState } from "react";

const ShippingForm = ({ onSubmit }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    address: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <h2>Shipping Info</h2>
      <input name="name" placeholder="Name" onChange={handleChange} required />
      <br />
      <input
        name="email"
        placeholder="Email"
        onChange={handleChange}
        required
      />
      <br />
      <textarea
        name="address"
        placeholder="Address"
        onChange={handleChange}
        required
      />
      <br />
      <button type="submit" style={{ marginTop: "10px" }}>
        Continue to Checkout
      </button>
    </form>
  );
};

export default ShippingForm;
