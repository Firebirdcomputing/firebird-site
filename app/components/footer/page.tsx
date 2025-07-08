import Image from "next/image";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaGithub,
  FaDribbble,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#060d15] text-white px-8 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">

        {/* Logo and Location */}
        <div>
          <div className="flex items-center space-x-2 mb-2">
            <Image src="/images/firebirdlogo.jpg" alt="Firebird Logo" width={50} height={80} />
            <span className="font-bold text-lg">Firebird</span>
          </div>
          <p className="text-gray-300">Nairobi, Kenya</p>
          <div className="mt-6">
            <p className="font-semibold text-white">Phone number</p>
            <p className="text-gray-300 text-sm">+254 700 000 000</p>
          </div>
          <div className="mt-2">
            <p className="font-semibold text-white">Email</p>
            <p className="text-gray-300 text-sm">firebird@mail.com</p>
          </div>
        </div>

        {/* Socials */}
        <div>
          <h4 className="font-semibold mb-2">Socials</h4>
          <div className="flex space-x-4 text-gray-400 text-xl">
            <FaFacebookF className="hover:text-white cursor-pointer" />
            <FaInstagram className="hover:text-white cursor-pointer" />
            <FaDribbble className="hover:text-white cursor-pointer" />
            <FaLinkedinIn className="hover:text-white cursor-pointer" />
            <FaTwitter className="hover:text-white cursor-pointer" />
            <FaGithub className="hover:text-white cursor-pointer" />
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold mb-2">Quick Links</h4>
          <ul className="space-y-1 text-gray-300">
            <li><a href="#" className="hover:text-white">About</a></li>
            <li><a href="#" className="hover:text-white">Services</a></li>
            <li><a href="#" className="hover:text-white">Resources</a></li>
            <li><a href="#" className="hover:text-white">Contact Us</a></li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4 className="font-semibold mb-2">Legal</h4>
          <ul className="space-y-1 text-gray-300">
            <li><a href="#" className="hover:text-white">Terms of service</a></li>
            <li><a href="#" className="hover:text-white">Privacy policy</a></li>
            <li><a href="#" className="hover:text-white">Cookie policy</a></li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 my-8" />

      {/* Bottom Note */}
      <div className="text-center text-gray-500 text-xs">
        © 2025 Firebird Inc. All rights reserved
      </div>
    </footer>
  );
}
