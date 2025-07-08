import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="bg-[#060d15] text-white px-6 py-4 flex items-center justify-between shadow-md">
      {/* Left: Logo + Name */}
      <div className="flex items-center space-x-2">
        <Image
          src="/images/firebirdlogo.jpg"
          alt="Logo"
          width={50}
          height={80}
        />
        <span className="text-white font-semibold text-lg">Firebird</span>
        <span className="text-gray-400 text-sm">computing</span>
      </div>

      {/* Center: Nav Links */}
      <div className="space-x-6 text-sm font-light hidden md:flex">
        <a href="#" className="hover:text-gray-300">Home</a>
        <a href="#" className="hover:text-gray-300">About</a>
        <a href="#" className="hover:text-gray-300">Services</a>
        <a href="#" className="hover:text-gray-300">Contacts</a>
      </div>

      {/* Right: CTA Button */}
      <button className="bg-gray-300 text-black px-4 py-2 rounded-md text-sm font-medium hover:bg-white transition">
        BOOK A DEMO
      </button>
    </nav>
  );
}
