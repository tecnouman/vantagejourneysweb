import { Users, Camera, Briefcase, ArrowRight, Phone, Mail, MapPin, Navigation, ArrowUp } from 'lucide-react';
import headerLogo from '../assets/header-logo.png';


const quickLinks = ['All Destination', 'Our Team', 'Tour Places', 'Reviews', 'Link Tree'];
const legalDocs = ['Vantage Journeys NTN', 'DTS License', 'IATA Certification'];

export default function Footer() {
  return (
    <footer className="w-full bg-white pt-24 pb-6 border-t border-gray-100 flex flex-col items-center">

      <div className="w-full max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 pt-16 border-t border-gray-100">
        <div className="flex flex-col">
          <img src={headerLogo} alt="Vantage Journeys" className="h-16 w-auto object-contain mb-6" />
          <p className="text-sm text-gray-500 leading-relaxed mb-8 pr-4">
            From your first step to your dream destination, Vantage Journeys is by your side. Providing the best travel experiences.
          </p>
          <div className="flex gap-3">
            <a href="#" className="w-10 h-10 rounded-full bg-[#1877F2]/10 text-[#1877F2] flex items-center justify-center hover:bg-[#1877F2] hover:text-white transition-colors duration-300"><Users size={18} strokeWidth={2.5} /></a>
            <a href="#" className="w-10 h-10 rounded-full bg-[#E4405F]/10 text-[#E4405F] flex items-center justify-center hover:bg-[#E4405F] hover:text-white transition-colors duration-300"><Camera size={18} strokeWidth={2.5} /></a>
            <a href="#" className="w-10 h-10 rounded-full bg-[#FF0000]/10 text-[#FF0000] flex items-center justify-center hover:bg-[#FF0000] hover:text-white transition-colors duration-300"><Briefcase size={18} strokeWidth={2.5} /></a>
          </div>
        </div>

        <div>
          <h4 className="font-bold text-[#111827] text-xl mb-6 flex items-center gap-2">
            <span className="w-1 h-5 bg-[#ff5a36] rounded-full"></span>
            Quick Links
          </h4>
          <ul className="space-y-4 text-[15px] text-gray-500 font-medium">
            {quickLinks.map((link) => (
              <li key={link}><a href="#" className="hover:text-[#ff5a36] transition-colors flex items-center gap-2"><ArrowRight size={14} className="text-[#5d58d8]" /> {link}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-[#111827] text-xl mb-6 flex items-center gap-2">
            <span className="w-1 h-5 bg-[#ff5a36] rounded-full"></span>
            Get In Touch
          </h4>
          <ul className="space-y-5 text-[14px] text-gray-500">
            <li className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-[#5d58d8]/10 text-[#5d58d8] flex items-center justify-center shrink-0 mt-0.5"><Phone size={18} strokeWidth={2.5} /></div>
              <div className="flex flex-col pt-1">
                <span className="font-semibold text-gray-900 mb-0.5">Phone Number</span>
                <span>+92 300 9248148</span>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-[#ff5a36]/10 text-[#ff5a36] flex items-center justify-center shrink-0 mt-0.5"><Mail size={18} strokeWidth={2.5} /></div>
              <div className="flex flex-col pt-1">
                <span className="font-semibold text-gray-900 mb-0.5">Email Address</span>
                <span>info@vantagejourneys.com.pk</span>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-[#ffb703]/10 text-[#ffb703] flex items-center justify-center shrink-0 mt-0.5"><MapPin size={18} strokeWidth={2.5} /></div>
              <div className="flex flex-col pt-1">
                <span className="font-semibold text-gray-900 mb-0.5">Location</span>
                <span>Suit 702 7th Floor Balad Trade Center-II, 114 Alamgir Road, Bahadurabad Bahadur Yar Jang CHS, Karachi, 74800</span>
              </div>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-[#111827] text-xl mb-6 flex items-center gap-2">
            <span className="w-1 h-5 bg-[#ff5a36] rounded-full"></span>
            Legal Documents
          </h4>
          <ul className="space-y-4 text-[15px] text-gray-500 font-medium">
            {legalDocs.map((doc) => (
              <li key={doc}><a href="#" className="hover:text-[#5d58d8] transition-colors flex items-center gap-3"><Navigation size={18} className="text-[#ff5a36]" /> {doc}</a></li>
            ))}
          </ul>
        </div>
      </div>

      <div className="w-full max-w-7xl mx-auto px-6 mt-16">
        <div className="w-full border-t border-gray-100 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 relative">
          <p className="text-sm text-gray-500 font-medium">
            © 2026 <span className="text-[#5d58d8] font-bold">Vantage Journeys</span>. All rights reserved.
          </p>

          <button
            className="fixed bottom-8 right-8 bg-[#5C5AE8] hover:bg-[#4A48C8] text-white p-3.5 rounded-full shadow-lg transition-all duration-300 hover:-translate-y-1 z-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#5C5AE8] cursor-pointer"
            aria-label="Scroll to top"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
