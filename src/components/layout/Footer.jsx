// import React from 'react';
// // https://preview.colorlib.com/theme/alazea/img/bg-img/3.jpg
// const Footer = () => {
//   return (
//     <footer className="w-full border-t border-border  text-foreground py-6 footer-area bg-img ">
//       <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4 ">
//         {/* Left Section */}
//         <div className="text-sm text-muted-foreground">
//           © {new Date().getFullYear()} GreenHaven. All rights reserved.
//         </div>

//         {/* Right Section */}
//         <div className="flex gap-4 text-sm">
//           <a
//             href="/privacy"
//             className="hover:text-primary transition-colors duration-200"
//           >
//             Privacy Policy
//           </a>
//           <a
//             href="/terms"
//             className="hover:text-primary transition-colors duration-200"
//           >
//             Terms of Service
//           </a>
//           <a
//             href="/contact"
//             className="hover:text-primary transition-colors duration-200"
//           >
//             Contact
//           </a>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import React from 'react';
import { FaFacebookF, FaTwitter, FaGooglePlusG, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-green-500 text-white pt-12 pb-6 px-6 md:px-16">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
        
        {/* Brand Info */}
        <div>
          <h2 className="text-2xl font-bold text-green-400 mb-3">ALAZEA</h2>
          <p className="mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. India situs atione mantor.
          </p>
          <div className="flex space-x-4 mt-2">
            <FaFacebookF className="hover:text-green-400 cursor-pointer" />
            <FaTwitter className="hover:text-green-400 cursor-pointer" />
            <FaGooglePlusG className="hover:text-green-400 cursor-pointer" />
            <FaInstagram className="hover:text-green-400 cursor-pointer" />
            <FaLinkedinIn className="hover:text-green-400 cursor-pointer" />
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">QUICK LINK</h3>
          <ul className="space-y-2">
            <li>Purchase</li>
            <li>Payment</li>
            <li>Return</li>
            <li>Shipping</li>
            <li>Orders</li>
            <li>FAQs</li>
            <li>News</li>
            <li>Advertise</li>
            <li>Career</li>
            <li>Policies</li>
          </ul>
        </div>

        {/* Best Seller */}
        <div>
          <h3 className="text-lg font-semibold mb-3">BEST SELLER</h3>
          <div className="flex items-center mb-4">
            <img src="https://preview.colorlib.com/theme/alazea/img/bg-img/4.jpg" alt="Cactus" className="w-14 h-14 object-cover mr-3" />
            <div>
              <p>Cactus Flower</p>
              <p className="text-green-400 font-semibold">$10.99</p>
            </div>
          </div>
          <div className="flex items-center">
            <img src="https://preview.colorlib.com/theme/alazea/img/bg-img/5.jpg" alt="Tulip" className="w-14 h-14 object-cover mr-3" />
            <div>
              <p>Tulip Flower</p>
              <p className="text-green-400 font-semibold">$11.99</p>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-3">CONTACT</h3>
          <p className="mb-2">Address: <span className="text-green-300">505 Silk Rd, New York</span></p>
          <p className="mb-2">Phone: <span className="text-green-300">+1 234 122 122</span></p>
          <p className="mb-2">Email: <span className="text-green-300">info.deercreative@gmail.com</span></p>
          <p className="mb-2">Open hours: <span className="text-green-300">Mon - Sun: 8 AM to 9 PM</span></p>
          <p className="mb-2">Happy hours: <span className="text-green-300">Sat: 2 PM to 4 PM</span></p>
        </div>
      </div>

      {/* Bottom line */}
      <div className="mt-10 border-t border-green-800 pt-4 text-center text-xs text-green-300">
        © Copyright {new Date().getFullYear()} All rights reserved | This template is made with 💚 by <a href="https://colorlib.com" target="_blank" rel="noopener noreferrer" className="text-white hover:underline">Colorlib</a>
      </div>
    </footer>
  );
};

export default Footer;
