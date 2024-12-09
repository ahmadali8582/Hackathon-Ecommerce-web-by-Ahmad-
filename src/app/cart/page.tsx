import React from "react";

// Cart Page Component
const CartPage: React.FC = () => {
  const cartItems = [
    {
      name: "Library Stool Chair",
      color: "Ashen Slate/Cobalt Bliss",
      size: "L",
      price: 99,
      quantity: 1,
      image: "/orange-chair.png",
    },
    {
      name: "Library Stool Chair",
      color: "Ashen Slate/Cobalt Bliss",
      size: "L",
      price: 99,
      quantity: 1,
      image: "/grey-chair.png",
    },
  ];

  const subtotal = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div
      style={{
        width: "1530px",
        margin: "20px auto",
        padding: "20px",
        backgroundColor: "#F9FAFB",
        borderRadius: "8px",
      }}
    >
      {/* Cart Header */}
      <h1 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "20px" }}>
        Cart
      </h1>

      {/* Cart Items Section */}
      <div style={{ display: "flex", gap: "20px" }}>
        {/* Cart Items */}
        <div style={{ flex: "2" }}>
          {cartItems.map((item, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: "20px",
                backgroundColor: "#FFFFFF",
                padding: "20px",
                borderRadius: "8px",
                boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
              }}
            >
              <div style={{ display: "flex", gap: "20px" }}>
                <img
                  src={item.image}
                  alt={item.name}
                  style={{
                    width: "80px",
                    height: "80px",
                    borderRadius: "8px",
                  }}
                />
                <div>
                  <h3 style={{ fontSize: "18px", fontWeight: "bold" }}>
                    {item.name}
                  </h3>
                  <p style={{ fontSize: "14px", color: "#6B7280" }}>
                    {item.color} | Size: {item.size}
                  </p>
                  <p style={{ fontSize: "14px", color: "#6B7280" }}>
                    Quantity: {item.quantity}
                  </p>
                </div>
              </div>
              <div style={{ textAlign: "right" }}>
                <p style={{ fontSize: "18px", fontWeight: "bold" }}>
                  ${item.price.toFixed(2)}
                </p>
                <button
                  style={{
                    border: "none",
                    backgroundColor: "transparent",
                    color: "#029FAE",
                    cursor: "pointer",
                    fontWeight: "bold",
                  }}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Cart Summary */}
        <div
          style={{
            flex: "1",
            backgroundColor: "#FFFFFF",
            padding: "20px",
            borderRadius: "8px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
          }}
        >
          <h2 style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "20px" }}>
            Summary
          </h2>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "10px",
            }}
          >
            <p>Subtotal</p>
            <p>${subtotal.toFixed(2)}</p>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "10px",
            }}
          >
            <p>Estimated Delivery & Handling</p>
            <p>Free</p>
          </div>
          <hr style={{ margin: "20px 0", borderColor: "#E5E7EB" }} />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "20px",
            }}
          >
            <p style={{ fontWeight: "bold" }}>Total</p>
            <p style={{ fontWeight: "bold" }}>${subtotal.toFixed(2)}</p>
          </div>
          <button
            style={{
              width: "100%",
              padding: "10px",
              backgroundColor: "#029FAE",
              color: "#FFFFFF",
              fontSize: "16px",
              fontWeight: "bold",
              borderRadius: "8px",
              border: "none",
              cursor: "pointer",
            }}
          >
            Member Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
