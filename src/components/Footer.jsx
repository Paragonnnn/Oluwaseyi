import React from "react";

const Footer = () => {
    const year = new Date().getFullYear()
  return (
    <div className="max-w-[1440px] mx-auto">
      <div>© {year} Oluwaseyi Hassan | All Rights Reserved.</div>
    </div>
  );
};

export default Footer;
