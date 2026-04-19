import { ChevronDown, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const navLinks = [
  { name: 'Home', hasDropdown: false, href: '/' },
  { name: 'Ticketing', hasDropdown: false, href: '/ticketing' },
  { name: 'Hotels', hasDropdown: false, href: '/hotel-booking' },
  { name: 'Visas', hasDropdown: false, href: '/visa-application' },
  { name: 'Tours', hasDropdown: true, href: '#', subLinks: [
    { name: 'Tour Details', href: '/trip/discover-timeless-temples-and-gardens' }
  ]},
  { name: 'Destinations', hasDropdown: true, href: '#', subLinks: [
    { name: 'Our Destination', href: '/destinations' },
    { name: 'Japan', href: '/destinations/japan' }
  ]},

  { name: 'Pages', hasDropdown: true, href: '#', subLinks: [
    { name: 'About Us', href: '/about-us' },
    { name: 'Contact Us', href: '/contact-us' },
    { name: 'Guider Details', href: '/guider-details' },
    { name: 'Privacy Policy', href: '/privacy-policy' },
    { name: 'Terms and Conditions', href: '/terms-and-conditions' },
    { name: 'FAQ', href: '/faq' }
  ]},
];

type NavBarProps = {
  logoSrc?: string;
};

export default function NavBar({ logoSrc }: NavBarProps) {
  return (
    <nav className="bg-white w-full shadow-sm z-40 relative">
      <div className="w-full flex justify-between items-center h-[90px] px-4 md:px-8">
        <Link to="/" className="flex items-center space-x-2 cursor-pointer">
          {logoSrc ? (
            <img src={logoSrc} alt="Vantage Journeys" className="h-30 w-auto object-contain" />
          ) : (
            <>
              <div className="relative flex items-center justify-center w-10 h-10">
                <svg viewBox="0 0 100 100" className="w-10 h-10 fill-[#f97316]">
                  <path d="M50,10 C27.9,10 10,27.9 10,50 C10,72.1 27.9,90 50,90 C72.1,90 90,72.1 90,50 C90,27.9 72.1,10 50,10 Z M50,85 C30.7,85 15,69.3 15,50 C15,30.7 30.7,15 50,15 C69.3,15 85,30.7 85,50 C85,69.3 69.3,85 50,85 Z" />
                  <path d="M65,45 L35,45 L45,30 Z" className="fill-[#5b4cc4]" />
                  <path d="M30,50 L70,50 L60,65 Z" className="fill-[#333]" />
                </svg>
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-[#333] font-bold text-xl tracking-tight">VANTAGE</span>
                <span className="text-[#5b4cc4] font-bold text-xl tracking-tight">
                  JOURNEYS<span className="text-[10px] text-gray-500 align-top ml-1">®</span>
                </span>
                <span className="text-[8px] text-gray-500 tracking-widest text-right mr-2">(PVT) LTD</span>
              </div>
            </>
          )}
        </Link>

        {/* Right side container */}
        <div className="flex items-center">
          <div className="hidden lg:flex items-center space-x-8 mr-8">
          {navLinks.map((link, index) => (
            <div key={index} className="group relative">
              {link.href.startsWith('/') ? (
                <Link
                  to={link.href}
                  className="cursor-pointer flex items-center space-x-1 py-6"
                >
                  <span className="text-black text-lg font-medium hover:text-[#5b4cc4] transition-colors">
                    {link.name}
                  </span>
                  {link.hasDropdown && (
                    <ChevronDown size={14} className="text-gray-500 group-hover:text-[#5b4cc4] transition-colors" />
                  )}
                </Link>
              ) : (
                <div
                  className="cursor-pointer flex items-center space-x-1 py-6"
                >
                  <span className="text-black text-lg font-medium group-hover:text-[#5b4cc4] transition-colors">
                    {link.name}
                  </span>
                  {link.hasDropdown && (
                    <ChevronDown size={14} className="text-gray-500 group-hover:text-[#5b4cc4] transition-colors" />
                  )}
                </div>
              )}
              
              {/* Dropdown Menu */}
              {link.hasDropdown && link.subLinks && (
                <div className="absolute top-full left-0 w-48 bg-white shadow-lg border-t-2 border-[#5b4cc4] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top translate-y-2 group-hover:translate-y-0 z-50">
                  <div className="py-2">
                    {link.subLinks.map((subLink, subIndex) => (
                      <Link
                        key={subIndex}
                        to={subLink.href}
                        className="block px-4 py-2.5 text-black text-lg font-medium hover:text-[#5b4cc4] transition-colors"
                      >
                        {subLink.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

          <div className="hidden md:flex">
            <Link
              to="/ticketing"
              className="bg-[#5b4cc4] hover:bg-[#ff5a36] transition-colors duration-300 text-white font-medium px-6 h-[90px] flex items-center space-x-2 w-40 justify-center cursor-pointer"
            >
              <span>Book Now</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="lg:hidden flex items-center ml-4">
            <button className="text-gray-700 cursor-pointer">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
