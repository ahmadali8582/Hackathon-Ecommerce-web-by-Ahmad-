import React from "react";

// Header Section
const PageHeader: React.FC = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "850px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "70px",
        backgroundColor: "#F0F2F3",
        position: "relative",
      }}
    >
      {/* Welcome Text */}
      <div style={{ maxWidth: "600px" }}>
        <h1
          style={{
            fontFamily: "Inter",
            fontSize: "60px",
            fontWeight: "700",
            lineHeight: "66px",
            color: "#272343",
            marginBottom: "20px",
          }}
        >
          Best Furniture Collection for your interior.
        </h1>
        <p
          style={{
            fontFamily: "Inter",
            fontSize: "14px",
            fontWeight: "400",
            lineHeight: "20px",
            letterSpacing: "0.12em",
            color: "#272343",
            marginBottom: "40px",
          }}
        >
          Welcome to Chairy
        </p>
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
          Shop Now
        </button>
      </div>

      {/* Chair Image */}
      <img
        src="/chair.png"
        alt="Chair"
        style={{
          width: "434px",
          height: "584px",
          objectFit: "contain",
          borderRadius: "8px",
        }}
      />
    </div>
  );
};

const LogoSection: React.FC = () => {
  // Array of image filenames stored in the public folder
  const logos = ["logoa.png", "logo (2).png", "logo (3).png", "logo (4).png", "logo (5).png", "logo (6).png"];

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "20px",
        margin: "40px 0",
      }}
    >
      {logos.map((logo, index) => (
        <img
          key={index}
          src={`/${logo}`} // Correct path to images in the public folder
          alt={`${logo.split(".")[0]} logo`} // Use the filename without extension as alt text
          style={{ height: "100px", objectFit: "contain" }}
        />
      ))}
    </div>
  );
};

// Featured Products Section
const FeaturedProducts: React.FC = () => {
  const products = [
    { name: "Pink Chair", price: "$129", image: "/pink-chair.png" },
    { name: "Orange Chair", price: "$109", image: "/orange-chair.png" },
    { name: "White Chair", price: "$139", image: "/white-chair.png" },
    { name: "Grey Chair", price: "$119", image: "/grey-chair.png" },
  ];

  return (
    <div style={{ padding: "70px" }}>
      <h2 style={{ fontSize: "24px", fontWeight: "600", color: "#272343" }}>
        Featured Products
      </h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "20px",
          marginTop: "20px",
        }}
      >
        {products.map((product, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              backgroundColor: "#FFFFFF",
              borderRadius: "8px",
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
              padding: "10px",
            }}
          >
            <img
              src={product.image}
              alt={product.name}
              style={{
                width: "120px",
                height: "120px",
                objectFit: "contain",
                marginBottom: "10px",
              }}
            />
            <h3 style={{ fontSize: "18px", margin: "10px 0" }}>{product.name}</h3>
            <p style={{ fontWeight: "600", color: "#029FAE" }}>{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

// Categories Section
const CategoriesSection: React.FC = () => {
  const categories = [
    { name: "White Chairs", image: "/white-chair-category.png" },
    { name: "Wooden Chairs", image: "/wooden-chair-category.png" },
    { name: "Studio Chairs", image: "/studio.png" },
  ];

  return (
    <div style={{ padding: "70px", backgroundColor: "#F8F9FA" }}>
      <h2 style={{ fontSize: "24px", fontWeight: "600", color: "#272343" }}>
        Top Categories
      </h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "20px",
          marginTop: "20px",
        }}
      >
        {categories.map((category, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              backgroundColor: "#FFFFFF",
              borderRadius: "8px",
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
              padding: "10px",
            }}
          >
            <img
              src={category.image}
              alt={category.name}
              style={{
                width: "120px",
                height: "120px",
                objectFit: "contain",
                marginBottom: "10px",
              }}
            />
            <h3 style={{ fontSize: "18px", margin: "10px 0" }}>
              {category.name}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

// Products Section
const ProductsSection: React.FC = () => {
  const products = [
    { name: "Pink Chair", price: "$129", image: "/pink-chair.png" },
    { name: "Orange Chair", price: "$109", image: "/orange-chair.png" },
    { name: "White Chair", price: "$139", image: "/white-chair.png" },
    { name: "Grey Chair", price: "$119", image: "/grey-chair.png" },
  ];

  return (
    <div style={{ padding: "70px" }}>
      <h2 style={{ fontSize: "24px", fontWeight: "600", color: "#272343" }}>
        Our Products
      </h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "20px",
          marginTop: "20px",
        }}
      >
        {products.map((product, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              backgroundColor: "#FFFFFF",
              borderRadius: "8px",
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
              padding: "10px",
            }}
          >
            <img
              src={product.image}
              alt={product.name}
              style={{
                width: "120px",
                height: "120px",
                objectFit: "contain",
                marginBottom: "10px",
              }}
            />
            <h3 style={{ fontSize: "18px", margin: "10px 0" }}>{product.name}</h3>
            <p style={{ fontWeight: "600", color: "#029FAE" }}>{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

// Main Page Component
const Page: React.FC = () => {
  return (
    <div>
      <PageHeader />
      <LogoSection />
      <FeaturedProducts />
      <CategoriesSection />
      <ProductsSection />
    </div>
  );
};

export default Page;