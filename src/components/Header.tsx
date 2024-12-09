import React from 'react';
import Link from 'next/link';

// Top Announcement Header
const Header: React.FC = () => {
  return (
    <div
      style={{
        width: '1530px',
        height: '35px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0 300px',
        backgroundColor: '#272343',
        color: '#FFFFFF',
      }}
    >
      <span>✔ Free Shipping On All Orders Over $50</span>
      <div style={{ display: 'flex', gap: '20px' }}>
        <span>Eng</span>
        <Link href="/faqs"> <span>Faqs</span></Link>
      
        <span>Need Help</span>
      </div>
    </div>
  );
};

// Main Header Section with Logo and Navigation
const MainHeader: React.FC = () => {
  return (
    <div>
      {/* Logo and Cart Section */}
      <div
        style={{
          width: '1530px',
          height: '84px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '20px 300px',
          backgroundColor: '#F0F2F3',
          gap: '0px',
          opacity: 1,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <img src="/logo.png.png" alt="Comforty Logo" style={{ height: '40px' }} />
          <span style={{ fontSize: '24px', fontWeight: 'bold' }}>Comforty</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
        
          <div style={{ position: 'relative' }}>
          <Link href="/cart">
            <img src="/cart.png" alt="Cart" style={{ height: '24px' }} />
            </Link>
            <span
              style={{
                position: 'absolute',
                top: '-5px',
                right: '-10px',
                backgroundColor: '#FF0000',
                color: '#FFFFFF',
                borderRadius: '50%',
                padding: '2px 5px',
                fontSize: '12px',
              }}
            >
              2
            </span>
          </div>
        </div>
      </div>

      {/* Navigation Links Section */}
      <div
        style={{
          width: '1530px',
          height: '74px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '14px 300px',
          backgroundColor: '#FFFFFF',
          gap: '0px',
          boxShadow: '0px 1px 0px 0px #E1E3E5',
          opacity: 1,
        }}
      >
        {/* Navigation Links */}
        <div style={{ display: 'flex', gap: '20px' }}>
          
          <Link href="/"> <span>Home</span></Link>
          <Link href="/product"> <span>Shop</span></Link>
          <Link href="/product"> <span>Product</span> </Link>
          
          <Link href="/singleproduct"> <span>Pages</span></Link>
          <Link href="/about"> <span>About</span></Link>
          
        </div>

        {/* Contact Section */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            width: '168px',
            height: '15px',
            opacity: 1,
          }}
        >
           <Link href="/contact">
            <span style={{ cursor: 'pointer' }}>Contact (804) 456-6789</span>
          </Link>
          
        </div>
      </div>
    </div>
  );
};

// App Component
const App: React.FC = () => {
  return (
    <div>
      <Header />
      <MainHeader />
    </div>
  );
};

export default App;
