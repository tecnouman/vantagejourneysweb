import { ArrowUp, Award, Shield, Compass, MapPin } from 'lucide-react';
import TopBar from './TopBar';
import NavBar from './NavBar';
import Footer from './Footer';
import headerLogo from '../assets/header-logo.png';

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <TopBar />
      <NavBar logoSrc={headerLogo} />
      
      <main>
        <section className="mx-auto w-full scroll-mt-28 mb-20">
      <div className="border border-gray-200 bg-white shadow-[0_20px_40px_-28px_rgba(17,24,39,0.35)]">
        {/* Header Section */}
        <div className="relative h-[180px] sm:h-[220px] md:h-[260px]">
          <img
            src="/images/breadcrumb-bg.jpg"
            alt="About Us header"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-r from-black/55 via-black/30 to-black/10" />
          <div className="absolute inset-0 flex items-end p-6 md:p-8">
            <div>
              <p className="text-xs md:text-sm tracking-[0.18em] uppercase text-white/85 font-medium">
                Our Story
              </p>
              <h2 className="mt-1 text-2xl md:text-4xl font-bold text-white">
                About Us
              </h2>
            </div>
          </div>
        </div>

        <div className="bg-[#F8FAFC] flex flex-col items-center py-12 px-4 relative font-sans text-slate-800">
           {/* Ribbon */}
          <div className="w-full max-w-[1400px] bg-[#5C5AE8] relative overflow-hidden shadow-sm mb-12 rounded-sm">
            <div className="absolute left-0 top-0 bottom-0 w-2 bg-[#FF8A00]" />
            <div className="py-5 px-6 text-center">
              <h2 className="text-[#FF8A00] font-bold text-xl mb-1 tracking-wide">
                Why Choose Us
              </h2>
              <p className="text-white text-sm font-medium">
                Vantage Journeys — Quality, Service, & Memorable Travel
              </p>
            </div>
          </div>

          <div className="w-full max-w-[1400px] space-y-12">
            
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Experience the Difference with Vantage Journeys</h3>
              <p className="text-slate-600 leading-relaxed mb-6 text-sm">
                Join hands with our trusted partners and discover exclusive travel experiences with unmatched comfort. We offer carefully curated destinations and tours that capture the true essence of every location, ensuring you experience travel the way it’s meant to be.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="flex flex-col items-center text-center p-5 bg-slate-50 rounded-xl hover:shadow-md transition-shadow">
                    <Award className="w-10 h-10 text-[#5C5AE8] mb-3" />
                    <h4 className="font-semibold text-slate-800 text-sm">Trusted, Local Travel Experts</h4>
                </div>
                <div className="flex flex-col items-center text-center p-5 bg-slate-50 rounded-xl hover:shadow-md transition-shadow">
                    <Shield className="w-10 h-10 text-[#5C5AE8] mb-3" />
                    <h4 className="font-semibold text-slate-800 text-sm">Exclusive Deals & Discounts</h4>
                </div>
                <div className="flex flex-col items-center text-center p-5 bg-slate-50 rounded-xl hover:shadow-md transition-shadow">
                    <Compass className="w-10 h-10 text-[#5C5AE8] mb-3" />
                    <h4 className="font-semibold text-slate-800 text-sm">Personalized Itineraries</h4>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Our Expertise</h3>
              <p className="text-slate-600 leading-relaxed mb-4 text-sm">
                Vantage Journeys has quickly become a trendsetter in Pakistan's travel industry. Our passion for travel, combined with dedication to quality, has earned us a reputation as a leading travel service provider. Our expertise spans a wide range of travel services, including business travel, tourist tourism, and religious pilgrimage.
              </p>
              <p className="text-slate-600 leading-relaxed text-sm">
                We offer a wide range of travel services designed to provide hassle-free and memorable experiences. From your first step to your dream destination, Vantage Journeys is by your side. Creating exceptional travel experiences for modern explorers and established globetrotters.
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-slate-800 mb-6 text-center">Our Services</h3>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex items-start gap-4 hover:border-[#5C5AE8]/40 transition-colors">
                <div className="p-3 bg-[#5C5AE8]/10 rounded-lg shrink-0">
                  <MapPin className="w-6 h-6 text-[#5C5AE8]" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-800 mb-2">Visa Support</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">Vantage Journeys (Pvt) Ltd Visa Assistance Services streamline the visa application process by providing expert guidance, documentation support, and professional assistance. Our team helps individuals, groups, and businesses obtain the necessary visas for seamless travel.</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex items-start gap-4 hover:border-[#5C5AE8]/40 transition-colors">
                <div className="p-3 bg-[#5C5AE8]/10 rounded-lg shrink-0">
                  <Shield className="w-6 h-6 text-[#5C5AE8]" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-800 mb-2">Travel Insurance</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">Vantage Journeys (Pvt) Ltd Travel Insurance provides financial protection against unexpected events during travel, including medical emergencies, trip cancellations, and lost baggage. It offers peace of mind by covering unforeseen expenses.</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex items-start gap-4 hover:border-[#5C5AE8]/40 transition-colors">
                <div className="p-3 bg-[#5C5AE8]/10 rounded-lg shrink-0">
                  <MapPin className="w-6 h-6 text-[#5C5AE8]" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-800 mb-2">Vantage Flights & Accommodation</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">We offer 24/7 support for all your travel needs, covering international and domestic flights worldwide. Our team also specializes in securing top hotels and resorts worldwide for group tours and individual travelers, ensuring a seamless experience.</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex items-start gap-4 hover:border-[#5C5AE8]/40 transition-colors">
                <div className="p-3 bg-[#5C5AE8]/10 rounded-lg shrink-0">
                  <Compass className="w-6 h-6 text-[#5C5AE8]" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-800 mb-2">Global Transfers & Cruises</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">We offer worldwide transfer services that guarantee convenient and reliable transportation wherever you go, as well as worldwide cruise services that deliver unforgettable journeys across stunning destinations.</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex items-start gap-4 hover:border-[#5C5AE8]/40 transition-colors">
                <div className="p-3 bg-[#5C5AE8]/10 rounded-lg shrink-0">
                  <Award className="w-6 h-6 text-[#5C5AE8]" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-800 mb-2">Specialized Tourism</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">Our specialized tours include Religious Tourism for Umrah and Ziarat, Sports Tourism with comprehensive packages for major events, Corporate Groups for business travel, and Educational Tourism providing unique access to cultural and historical destinations.</p>
                </div>
              </div>

            </div>

          </div>

          {/* Scroll to Top Button */}
          <button
            className="fixed bottom-8 right-8 bg-[#5C5AE8] hover:bg-[#4A48C8] text-white p-3.5 rounded-full shadow-lg transition-all duration-300 hover:-translate-y-1 z-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#5C5AE8] cursor-pointer"
            aria-label="Scroll to top"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
      </main>

      <Footer />
    </div>
  );
}
