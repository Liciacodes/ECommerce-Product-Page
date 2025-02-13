import { X } from "phosphor-react";
import { useState } from "react";
import CartEmptyState from "./Cart";
import { useCart } from "../CartContext/UseCart";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [activeLink, setActiveLink] = useState<string>("");
  const { items } = useCart();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const handleLinkClick = (link: string) => {
    setActiveLink(link);
    if (isMobileMenuOpen) {
      toggleMobileMenu();
    }
  };

  return (
    <nav className="relative flex items-center justify-between py-4 md:py-6 px-8 lg:px-32 border-b-[1px] border-lightGrayishBlue shadow-sm">
      {/* Left Section: Logo and Navigation */}
      <div className="flex items-center space-x-8">
        <button className="block md:hidden" onClick={toggleMobileMenu}>
          <img src="/src/assets/images/icon-menu.svg" alt="Menu" />
        </button>

        {/* Logo */}
        
        <span className="text-2xl md:text-3xl font-bold flex items-center">sneakers</span>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          <ul className="flex space-x-6 text-darkGrayishBlue font-medium items-center">
            {["Collections", "Men", "Women", "About", "Contact"].map((link: string) => (
              <li
                key={link}
                className={`cursor-pointer relative  ${
                  activeLink === link ? "text-black" : ""
                }`}
                onClick={() => handleLinkClick(link)}
              >
                <span className="hover:text-black">{link}</span>
                {activeLink === link && (
                  <span
                    className="absolute bottom-[-34px] left-0 right-0 h-[2px] bg-orange"
                  ></span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Right Section: Cart and Avatar */}
      <div className="flex items-center space-x-6">
        <button
          className="relative"
          onClick={toggleCart}
          aria-label="Toggle Cart"
        >
          <img src="/src/assets/images/icon-cart.svg" alt="Cart" className="cursor-pointer" />
          {items.length > 0 && (
            <span className="absolute -top-3 right-[-6px] font-bold rounded-full bg-orange text-white w-5 h-5 flex items-center justify-center">
              {items.length}
            </span>
          )}
        </button>
        <img
          src="/src/assets/images/image-avatar.png"
          alt="User Avatar"
          className="rounded-full w-10 h-10 border border-orange cursor-pointer"
        />
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <>
          <div
            className="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-10 md:hidden"
            onClick={toggleMobileMenu}
          />
          <div className="fixed top-0 left-0 w-[67%] h-full bg-white shadow-lg p-4 transition-transform duration-300 ease-in-out transform translate-x-0 md:hidden z-20">
            <button className="text-darkGrayishBlue text-2xl mb-4" onClick={toggleMobileMenu}>
              <X size={24} weight="bold" />
            </button>
            <ul className="flex flex-col space-y-6 text-black font-bold mt-8">
              {["Collections", "Men", "Women", "About", "Contact"].map((link: string) => (
                <li
                  key={link}
                  className={`cursor-pointer hover:text-black ${
                    activeLink === link ? "border-b-[1px] border-black" : ""
                  }`}
                  onClick={() => handleLinkClick(link)}
                >
                  {link}
                </li>
              ))}
            </ul>
          </div>
        </>
      )}

      {/* Cart Empty State */}
      {isCartOpen && <CartEmptyState />}
    </nav>
  );
}
