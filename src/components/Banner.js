import React from 'react';

function Banner() {
  const bannerStyle = {
    backgroundImage: "url('/banner2.png')",
    height: "50vh",
    backgroundSize: "cover",
    backgroundPosition: "center",
    position: "relative",
    // opacity: "0.8",
  };

  const textContainerStyle = {
    position: "absolute",
    top: "50%",
    left: "10%",
    transform: "translateY(-20%)",
    textAlign: "left",
    color: "white",
    maxWidth: "60%",
  };

  const headingStyle = {
    fontSize: "2.5vw",
    fontWeight: "bold",
    marginBottom: "1.5vh",
  };

  const descriptionStyle = {
    fontSize: "1.2vw",
  };

  return (
    <div style={bannerStyle}>
      <div style={textContainerStyle}>
        <h1 style={headingStyle}>Computer Engineering</h1>
        <p style={descriptionStyle}>142,765 Computer Engineers follow this</p>
      </div>
    </div>
  );
}

export default Banner;
