import { ArrowUp, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import TopBar from './TopBar';
import NavBar from './NavBar';
import Footer from './Footer';
import headerLogo from '../assets/header-logo.png';

const destinationsList = [
  { city: 'Thimpu', country: 'Bhutan', image: 'https://images.unsplash.com/photo-1623146465057-7988880696cb?w=800&q=80', href: '#' },
  { city: 'Kyoto', country: 'Japan', image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&q=80', href: '/destinations/japan' },
  { city: 'Cusco', country: 'Peru', image: 'https://images.unsplash.com/photo-1587595431973-160d0d94add1?w=800&q=80', href: '#' },
  { city: 'Vienna', country: 'Australia', image: 'https://images.unsplash.com/photo-1516550893923-42d28e5677af?w=800&q=80', href: '#' },
  { city: 'Lisbon', country: 'Portugal', image: 'https://images.unsplash.com/photo-1536663815808-535e2280d2c2?w=800&q=80', href: '#' },
  { city: 'Zagreb', country: 'Croatia', image: 'https://images.unsplash.com/photo-1550503023-e18e8df5e977?w=800&q=80', href: '#' },
  { city: 'Kathmandu', country: 'Nepal', image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&q=80', href: '#' },
  { city: 'Pokhara', country: 'Nepal', image: 'https://images.unsplash.com/photo-1585250422949-06404845cfcc?w=800&q=80', href: '#' },
];

export default function Destinations() {
  return (
    <div className="font-sans">
      <TopBar />
      <NavBar logoSrc={headerLogo} />
      
      
        <section className="mx-auto w-full scroll-mt-28 mb-20">
      <div className="border border-gray-200 bg-white shadow-[0_20px_40px_-28px_rgba(17,24,39,0.35)] flex flex-col font-sans">
        {/* Header Section */}
        <div className="relative h-[200px] sm:h-[250px] md:h-[300px]">
          <img
            src="/images/breadcrumb-bg.jpg"
            alt="Destinations header"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/20" />
          <div className="absolute inset-0 flex items-end p-6 md:p-10">
            <div>
              <p className="text-xs md:text-sm tracking-[0.18em] uppercase text-white/85 font-medium mb-2">
                Discover The World
              </p>
              <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
                Our Destinations
              </h1>
            </div>
          </div>
        </div>

        <div className="bg-[#F8FAFC] py-16 px-4 md:px-8 relative">
          <div className="max-w-[1200px] mx-auto">
            <div className="text-center md:text-left mb-12">
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800 tracking-tight">
                Explore Trendy Locations
              </h2>
              <p className="mt-4 text-slate-600 text-base max-w-2xl">
                From your first step to your dream destination, Vantage Journeys is by your side. We curate the best travel experiences to let you discover the beauty of the world.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {destinationsList.map((dest, index) => (
                <Link to={dest.href} key={index} className="relative h-[320px] rounded-[2rem] overflow-hidden group shadow-md hover:shadow-xl transition-shadow duration-300 block">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url(${dest.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="absolute top-5 right-5 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-10">
                    <div className="w-10 h-10 bg-white hover:bg-[#ff5a36] text-gray-800 hover:text-white rounded-full flex items-center justify-center transition-colors duration-200 shadow-lg">
                      <ArrowUpRight size={20} />
                    </div>
                  </div>

                  <div className="absolute bottom-6 left-6 z-10 flex flex-col">
                    <span className="text-[#ff5a36] font-semibold text-sm drop-shadow-md mb-1">{dest.country}</span>
                    <span className="text-white font-bold text-2xl drop-shadow-md">{dest.city}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll to Top Button */}
        <button
          className="fixed bottom-8 right-8 bg-[#5b4cc4] hover:bg-[#ff5a36] text-white p-3.5 rounded-full shadow-lg transition-all duration-300 hover:-translate-y-1 z-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#5b4cc4] cursor-pointer"
          aria-label="Scroll to top"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      </div>
        </section>
      

      <Footer />
    </div>
  );
}
