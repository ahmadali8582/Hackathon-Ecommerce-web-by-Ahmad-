import React from "react";

const ProductPage: React.FC = () => {
  // Products List
  const products = [
    { name: "Pink Chair", price: "$129", image: "/pink-chair.png" },
    { name: "Orange Chair", price: "$109", image: "/orange-chair.png" },
    { name: "White Chair", price: "$139", image: "/white-chair.png" },
    { name: "Grey Chair", price: "$119", image: "/grey-chair.png" },
  ];

  return (
    <div style={{ fontFamily: "Inter, sans-serif", padding: "50px" }}>
      {/* Header Section */}
      <div
        style={{
          width: "100%",
          height: "400px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#F0F2F3",
          marginBottom: "50px",
        }}
      >
        <h1
          style={{
            fontSize: "48px",
            fontWeight: "700",
            color: "#272343",
          }}
        >
          All Products
        </h1>
      </div>

      {/* Products Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "30px",
        }}
      >
        {products.map((product, index) => (
          <div
            key={index}
            style={{
              backgroundColor: "#FFFFFF",
              borderRadius: "8px",
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
              padding: "20px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {/* Product Image */}
            <img
              src={product.image}
              alt={product.name}
              style={{
                width: "200px",
                height: "200px",
                objectFit: "contain",
                marginBottom: "20px",
              }}
            />

            {/* Product Name */}
            <h3
              style={{
                fontSize: "18px",
                fontWeight: "600",
                marginBottom: "10px",
              }}
            >
              {product.name}
            </h3>

            {/* Product Price */}
            <p
              style={{
                fontSize: "16px",
                fontWeight: "600",
                color: "#029FAE",
                marginBottom: "20px",
              }}
            >
              {product.price}
            </p>

            {/* Buy Now Button */}
            <button
              style={{
                padding: "10px 20px",
                backgroundColor: "#029FAE",
                color: "#FFFFFF",
                border: "none",
                borderRadius: "8px",
                fontSize: "14px",
                fontWeight: "600",
                cursor: "pointer",
              }}
            >
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
