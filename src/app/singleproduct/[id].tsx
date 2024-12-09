import { useRouter } from "next/router";
import Link from "next/link";
import React from "react";

// Mock Product Data
const products = [
  { id: "pink-chair", name: "Pink Chair", price: "$129", image: "/pink-chair.png", description: "A comfortable pink chair for modern interiors." },
  { id: "orange-chair", name: "Orange Chair", price: "$109", image: "/orange-chair.png", description: "A vibrant orange chair for bold designs." },
  { id: "white-chair", name: "White Chair", price: "$139", image: "/white-chair.png", description: "A sleek white chair for minimalist aesthetics." },
  { id: "grey-chair", name: "Grey Chair", price: "$119", image: "/grey-chair.png", description: "A classic grey chair for versatile spaces." },
];

const ProductPage: React.FC = () => {
  const router = useRouter();
  const { id } = router.query; // Get the dynamic route parameter

  // Find the product based on the `id`
  const product = products.find((item) => item.id === id);

  if (!product) {
    return (
      <div style={{ padding: "50px", textAlign: "center" }}>
        <h1>Product Not Found</h1>
        <Link href="/" style={{ color: "#029FAE", textDecoration: "underline" }}>
          Go back to Home
        </Link>
      </div>
    );
  }

  return (
    <div style={{ padding: "70px" }}>
      <Link href="/" style={{ marginBottom: "20px", color: "#029FAE", textDecoration: "underline" }}>
        Back to Home
      </Link>
      <div style={{ display: "flex", gap: "40px", alignItems: "center" }}>
        {/* Product Image */}
        <img
          src={product.image}
          alt={product.name}
          style={{
            width: "300px",
            height: "300px",
            objectFit: "contain",
            borderRadius: "8px",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
          }}
        />
        {/* Product Details */}
        <div>
          <h1 style={{ fontSize: "36px", fontWeight: "700", color: "#272343" }}>{product.name}</h1>
          <p style={{ fontSize: "20px", fontWeight: "600", color: "#029FAE" }}>{product.price}</p>
          <p style={{ fontSize: "16px", color: "#6C6F7D", margin: "20px 0" }}>{product.description}</p>
          <button
            style={{
              padding: "14px 24px",
              borderRadius: "8px",
              backgroundColor: "#029FAE",
              color: "#FFFFFF",
              fontFamily: "Inter",
              fontSize: "16px",
              fontWeight: "600",
              border: "none",
              cursor: "pointer",
            }}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
