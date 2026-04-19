import { Calendar, Flag, MapPin, Star, Clock, Users, ArrowUp } from 'lucide-react';
import TopBar from './TopBar';
import NavBar from './NavBar';
import Footer from './Footer';
import headerLogo from '../assets/header-logo.png';

const japanTours = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=800&auto=format&fit=crop",
    location: "Japan, Alps",
    title: "Marvel at Majestic Mountains and Lakes",
    price: 1500,
    originalPrice: 1850,
    duration: "4 Days / 5 Night",
    countries: "Japan",
    rating: 4.9
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=800&auto=format&fit=crop",
    location: "Japan, Kyoto",
    title: "Uncover Vibrant Culture and History",
    price: 1200,
    originalPrice: 1600,
    duration: "6 Days / 5 Night",
    countries: "Japan",
    rating: 4.8
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?q=80&w=800&auto=format&fit=crop",
    location: "Japan, Tokyo",
    title: "Discover Timeless Temples and Gardens",
    price: 1050,
    originalPrice: 1400,
    duration: "5 Days / 5 Night",
    countries: "Japan",
    rating: 4.7
  }
];

export default function DestinationPlace() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <TopBar />
      <NavBar logoSrc={headerLogo} />
      
      <main className="flex-1">
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] w-full overflow-hidden">
        <img
          src="/images/japan-hero.png"
          alt="Japan Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center px-4 max-w-4xl">
            <h1 className="text-4xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg">
              Explore Japan
            </h1>
            <p className="text-xl md:text-2xl text-white/90 font-medium max-w-2xl mx-auto drop-shadow-md">
              Where Ancient Traditions Meet Modern Innovation
            </p>
          </div>
        </div>
      </section>

      {/* Breadcrumb / Stats */}
      <div className="max-w-7xl mx-auto px-4 -mt-12 relative z-10">
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 md:p-8 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-indigo-50 rounded-full flex items-center justify-center mb-3">
              <MapPin className="text-indigo-600 w-6 h-6" />
            </div>
            <span className="text-gray-500 text-sm font-medium">Location</span>
            <span className="text-gray-900 font-bold">East Asia</span>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center mb-3">
              <Clock className="text-orange-600 w-6 h-6" />
            </div>
            <span className="text-gray-500 text-sm font-medium">Time Zone</span>
            <span className="text-gray-900 font-bold">GMT +9</span>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center mb-3">
              <Users className="text-green-600 w-6 h-6" />
            </div>
            <span className="text-gray-500 text-sm font-medium">Population</span>
            <span className="text-gray-900 font-bold">125 Million</span>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mb-3">
              <Star className="text-blue-600 w-6 h-6" />
            </div>
            <span className="text-gray-500 text-sm font-medium">Top Rated</span>
            <span className="text-gray-900 font-bold">Destinations</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Detailed Info */}
          <div className="lg:col-span-2 space-y-10">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">About Japan</h2>
              <p className="text-gray-600 leading-relaxed text-lg mb-6">
                Japan is a world of contrasts, where serene temples and centuries-old traditions coexist harmoniously with neon-lit cities and cutting-edge technology. From the snow-capped peaks of the Japanese Alps to the tropical beaches of Okinawa, the archipelago offers a diverse range of experiences for every traveler.
              </p>
              <p className="text-gray-600 leading-relaxed text-lg">
                Indulge in world-class cuisine, wander through peaceful Zen gardens, and witness the stunning beauty of cherry blossoms in spring or vibrant maples in autumn. Whether you're seeking spiritual enlightenment in Kyoto's temples or high-energy excitement in Tokyo's Shibuya Crossing, Japan promises an unforgettable journey.
              </p>
            </div>

            <div className="bg-indigo-600 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden shadow-2xl">
              <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-bold mb-4 italic">"The Land of the Rising Sun"</h3>
                <p className="text-indigo-100 text-lg max-w-2xl leading-relaxed">
                  Experience the perfect blend of hospitality (Omotenashi), exquisite art, and breathtaking natural beauty. Your Japanese adventure starts here.
                </p>
              </div>
              <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 bg-indigo-400/20 rounded-full blur-3xl"></div>
            </div>

            {/* Why Visit Section */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8">What to Expect in Japan</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex gap-4 p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="shrink-0 w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center">
                    <Star className="text-red-500 w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Rich Heritage</h4>
                    <p className="text-gray-500 text-sm">Explore thousands of years of history through stunning castles and shrines.</p>
                  </div>
                </div>
                <div className="flex gap-4 p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="shrink-0 w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center">
                    <Flag className="text-blue-500 w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Culinary Delights</h4>
                    <p className="text-gray-500 text-sm">Savor authentic sushi, ramen, and seasonal delicacies crafted with precision.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar / Quick Links */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Need Assistance?</h3>
              <p className="text-gray-500 text-sm mb-6 leading-relaxed">
                Our Japan travel experts are here to help you plan the perfect itinerary. Contact us for personalized packages.
              </p>
              <button className="w-full bg-[#5b4cc4] hover:bg-[#ff5a36] text-white font-bold py-4 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Get a Free Quote
              </button>
            </div>

            <div className="relative rounded-3xl overflow-hidden group">
              <img 
                src="https://images.unsplash.com/photo-1542051841857-5f90071e7989?w=800&q=80" 
                alt="Tokyo Night" 
                className="w-full h-[400px] object-cover group-hover:scale-110 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-8">
                <div>
                  <h4 className="text-white text-2xl font-bold mb-2">Special Winter Tours</h4>
                  <p className="text-white/80 text-sm">Book now for exclusive ski packages in Hokkaido.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tour Cards Grid */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-[#5b4cc4] font-medium text-lg tracking-wide mb-2">Popular Tours</h3>
            <h2 className="text-4xl font-bold text-gray-900">Featured Japan Experiences</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {japanTours.map((tour) => (
              <div
                key={tour.id}
                className="bg-white rounded-[2rem] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 group cursor-pointer hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-all duration-500"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={tour.image}
                    alt={tour.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center gap-1.5">
                    <Star className="text-orange-500 w-4 h-4" fill="currentColor" />
                    <span className="text-gray-900 text-xs font-bold">{tour.rating}</span>
                  </div>
                  <div className="absolute bottom-4 left-4 bg-[#ff5a36] text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg">
                    Featured
                  </div>
                </div>

                <div className="p-8">
                  <div className="flex items-center gap-2 text-indigo-600 font-bold text-xs uppercase tracking-widest mb-3">
                    <MapPin className="w-3.5 h-3.5" />
                    {tour.location}
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-[#5b4cc4] transition-colors line-clamp-2 min-h-[3.5rem]">
                    {tour.title}
                  </h4>
                  
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex flex-col">
                      <span className="text-gray-400 text-xs font-medium">From</span>
                      <div className="flex items-baseline gap-2">
                        <span className="text-2xl font-bold text-[#5b4cc4]">${tour.price}</span>
                        {tour.originalPrice && (
                          <span className="text-gray-400 text-sm line-through">${tour.originalPrice}</span>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 pt-6 border-t border-dashed border-gray-200">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 bg-indigo-50 rounded-lg flex items-center justify-center">
                        <Calendar className="w-4 h-4 text-indigo-600" />
                      </div>
                      <span className="text-gray-600 text-xs font-semibold">{tour.duration}</span>
                    </div>
                    <div className="flex items-center gap-2.5 justify-end">
                      <div className="w-8 h-8 bg-orange-50 rounded-lg flex items-center justify-center">
                        <Flag className="w-4 h-4 text-orange-600" />
                      </div>
                      <span className="text-gray-600 text-xs font-semibold">{tour.countries}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer / Scroll Top */}
       <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-10 right-10 w-14 h-14 bg-[#5b4cc4] text-white rounded-full shadow-2xl flex items-center justify-center hover:bg-[#ff5a36] hover:-translate-y-2 transition-all duration-300 z-50 cursor-pointer shadow-indigo-500/20"
      >
        <ArrowUp className="w-6 h-6" />
      </button>
      </main>

      <Footer />
    </div>
  );
}
