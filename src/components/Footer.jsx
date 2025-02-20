import React from "react";
import {assets} from "../assets/assets"; // Ensure correct path

const Footer = () => {
  return (
    <div className="flex items-center justify-between gap-4 px-4 lg:px-44 py-3">
      {/* Logo */}
      <img width={150} src={assets.logo} alt="Company Logo" />

      {/* Text */}
      <p className="flex-1 border-l border-gray-400 pl-4 text-sm text-gray-500 max-sm:hidden">
        © 2024 Your Company. All rights reserved.
      </p>

      {/* Social Media Icons */}
      <div className="flex gap-1">
        <img width={40} src={assets.facebook_icon} alt="Facebook Icon" />
        <img width={40} src={assets.twitter_icon} alt="Twitter Icon" />
        <img width={40} src={assets.google_plus_icon} alt="Google Plus Icon" />
      </div>
    </div>
  );
};

export default Footer;
