

import React from 'react';
import { FaFacebookF, FaTwitter, FaGooglePlusG, FaInstagram, FaLinkedinIn } from 'react-icons/fa';


const Footer = () => {
  const quickLinks = ['Purchase','Payment','Return','Shipping','Orders','FAQs','News','Advertise','Career','Policies']
  return (
    <footer className="bg-green-500 text-white pt-12 pb-6 px-6 md:px-16 ">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">

        {/* Brand Info */}
        <div className='flex flex-col items-center'>
          <h2 className="text-2xl  font-bold text-white mb-3">ALAZEA</h2>
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
        <div className='flex flex-col items-center'>
          <h3 className="text-lg font-semibold mb-3">QUICK LINKS</h3>
          <ul className="space-y-2 underline text-blue-300">
           {
            quickLinks.map((item, index)=>{
              return(
                  <li className='' key={index}>{item}</li>
              )
            })
           }
          </ul>
        </div>

        {/* Best Seller */}
        <div className='flex flex-col items-center align-center'>
          <h3 className="text-lg font-semibold mb-3">BEST SELLER</h3>
          <div className="flex items-center mb-4">
            <img src="https://preview.colorlib.com/theme/alazea/img/bg-img/4.jpg" alt="Cactus" className="w-14 h-14 object-cover mr-3" />
            <div>
              <p>Cactus Flower</p>
              <p className="text-black font-semibold">$10.99</p>
            </div>
          </div>
          <div className="flex items-center">
            <img src="https://preview.colorlib.com/theme/alazea/img/bg-img/5.jpg" alt="Tulip" className="w-14 h-14 object-cover mr-3" />
            <div>
              <p>Tulip Flower</p>
              <p className="text-black font-semibold">$11.99</p>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className='flex flex-col items-center align-center'>
          <h3 className="text-lg font-semibold mb-3">CONTACT</h3>
          <p className="mb-2 font-bold">Address: <span className="text-black">505 Silk Rd, New York</span></p>
          <p className="mb-2 font-bold">Phone: <span className="text-black">+1 234 122 122</span></p>
          <p className="mb-2 font-bold">Email: <span className="text-black">info.deercreative@gmail.com</span></p>
          <p className="mb-2 font-bold">Open hours: <span className="text-black">Mon - Sun: 8 AM to 9 PM</span></p>
          <p className="mb-2 font-bold">Happy hours: <span className="text-black">Sat: 2 PM to 4 PM</span></p>
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
