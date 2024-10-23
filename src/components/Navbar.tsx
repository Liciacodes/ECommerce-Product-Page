export default function Navbar() {
    return (
      <nav className='flex justify-between items-center py-6 px-8 lg:px-32 lg:border-b border-lightGrayishBlue'>
        {/* Left Section: Logo and Navigation */}
        <div className='flex items-center space-x-8'>
          {/* Logo */}
          <button className="block sm:hidden"><img src="/src/assets/images/icon-menu.svg" alt="Menu"  /></button>
          
          <span className='text-[32px] font-bold '>sneakers</span>
          
          {/* Desktop Navigation */}
          <ul className="hidden sm:flex space-x-6 text-darkGrayishBlue font-normal">
            <li className="hover:text-black cursor-pointer">Collections</li>
            <li className="hover:text-black cursor-pointer">Men</li>
            <li className="hover:text-black cursor-pointer">Women</li>
            <li className="hover:text-black cursor-pointer">About</li>
            <li className="hover:text-black cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Right Section: Cart and Avatar */}
        <div className="flex items-center space-x-6">
          <button>
            <img src="/src/assets/images/icon-cart.svg" alt="Cart" />
          </button>
          <img src="/src/assets/images/image-avatar.png" alt="User Avatar" className="rounded-full w-8" />
        </div>
      </nav>
    );
  }
  