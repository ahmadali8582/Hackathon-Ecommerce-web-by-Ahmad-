import React from 'react';

const ContactPage: React.FC = () => {
  return (
    <div style={{ padding: '50px', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Get In Touch With Us</h1>
      <p style={{ textAlign: 'center', marginBottom: '40px', color: '#666' }}>
        For More Information About Our Products & Services, Please Feel Free To Drop Us An Email. 
        Our Staff Will Always Be There To Help You Out. Do Not Hesitate!
      </p>

      <div style={{ display: 'flex', justifyContent: 'space-between', gap: '20px' }}>
        {/* Left Section */}
        <div style={{ flex: '1', lineHeight: '1.8' }}>
          <h3>Address</h3>
          <p>528 5th Avenue, New York NY10036, United States</p>
          <h3>Phone</h3>
          <p>Mobile: +1 (804) 456-6789</p>
          <p>Hotline: +1 (804) 456-6789</p>
          <h3>Working Time</h3>
          <p>Monday-Friday: 9:00 - 22:00</p>
          <p>Saturday-Sunday: 9:00 - 21:00</p>
        </div>

        {/* Right Section */}
        <form style={{ flex: '1' }}>
          <div style={{ marginBottom: '15px' }}>
            <label>Your Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              style={{
                width: '100%',
                padding: '10px',
                border: '1px solid #ccc',
                borderRadius: '5px',
              }}
            />
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label>Email Address</label>
            <input
              type="email"
              placeholder="Enter your email"
              style={{
                width: '100%',
                padding: '10px',
                border: '1px solid #ccc',
                borderRadius: '5px',
              }}
            />
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label>Subject</label>
            <input
              type="text"
              placeholder="Enter the subject"
              style={{
                width: '100%',
                padding: '10px',
                border: '1px solid #ccc',
                borderRadius: '5px',
              }}
            />
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label>Message</label>
            <textarea
              placeholder="Write your message"
              style={{
                width: '100%',
                padding: '10px',
                border: '1px solid #ccc',
                borderRadius: '5px',
                height: '100px',
              }}
            />
          </div>
          <button
            type="submit"
            style={{
              padding: '10px 20px',
              backgroundColor: '#272343',
              color: '#fff',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
