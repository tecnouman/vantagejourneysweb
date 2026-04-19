import { MapPin, Phone, Mail, Send} from 'lucide-react';
import TopBar from './TopBar';
import NavBar from './NavBar';
import Footer from './Footer';
import headerLogo from '../assets/header-logo.png';

export default function ContactUs() {
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
                alt="Contact Us header"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-r from-black/60 via-black/30 to-black/10" />
              <div className="absolute inset-0 flex items-end p-6 md:p-8">
                <div>
                  <p className="text-xs md:text-sm tracking-[0.18em] uppercase text-white/85 font-medium flex items-center gap-2">
                    <Phone className="w-4 h-4 text-[#FF8A00]" />
                    Get In Touch
                  </p>
                  <h2 className="mt-2 text-2xl md:text-4xl font-bold text-white">
                    Contact Us
                  </h2>
                </div>
              </div>
            </div>

            <div className="bg-[#F8FAFC] py-16 px-4 md:px-10 relative font-sans text-slate-800">
              <div className="w-full max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12">

                {/* Contact Info */}
                <div className="lg:col-span-2 space-y-8">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-[#5C5AE8] mb-4">Contact with Us for Your Any Help</h3>
                    <p className="text-slate-600 leading-relaxed">
                      We offer carefully curated travel destinations and tour experiences that capture the true essence of every place you visit. With our attraction passes, you enjoy more for less—saving significantly compared to purchasing individual tickets.
                    </p>
                  </div>

                  <div className="space-y-6 pt-4">
                    <div className="flex items-start gap-4 group">
                      <div className="bg-[#5C5AE8]/10 p-3 rounded-full text-[#5C5AE8] group-hover:bg-[#5C5AE8] group-hover:text-white transition-colors duration-300">
                        <Phone className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-800">Phone</h4>
                        <a href="tel:+923009248148" className="text-slate-600 hover:text-[#5C5AE8] transition-colors">
                          +92 300 9248148
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 group">
                      <div className="bg-[#FF8A00]/10 p-3 rounded-full text-[#FF8A00] group-hover:bg-[#FF8A00] group-hover:text-white transition-colors duration-300">
                        <Mail className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-800">Email</h4>
                        <a href="mailto:info@vantagejourneys.com.pk" className="text-slate-600 hover:text-[#FF8A00] transition-colors">
                          info@vantagejourneys.com.pk
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 group">
                      <div className="bg-[#5C5AE8]/10 p-3 rounded-full text-[#5C5AE8] group-hover:bg-[#5C5AE8] group-hover:text-white transition-colors duration-300">
                        <MapPin className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-800">Address</h4>
                        <p className="text-slate-600">
                          Suit 702 7th Floor Balad Trade Center-II, 114 Alamgir Road, Bahadurabad Bahadur Yar Jang CHS, Karachi, 74800
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Contact Form */}
                <div className="lg:col-span-3 bg-white rounded-2xl border border-slate-200 shadow-sm p-6 md:p-10">
                  <h3 className="text-2xl font-bold text-slate-800 mb-2">Send Your Message!</h3>
                  <p className="text-slate-500 mb-8">
                    Don't hesitate to contact Vantage Journeys dedicated support team. We're here to assist you every step of the way!
                  </p>

                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-semibold text-slate-700">Your Name *</label>
                        <input type="text" id="name" placeholder="John Doe" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5C5AE8]/50 focus:border-[#5C5AE8] transition-all" />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-semibold text-slate-700">Your Email *</label>
                        <input type="email" id="email" placeholder="john@example.com" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5C5AE8]/50 focus:border-[#5C5AE8] transition-all" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-semibold text-slate-700">Subject</label>
                      <input type="text" id="subject" placeholder="How can we help?" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5C5AE8]/50 focus:border-[#5C5AE8] transition-all" />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-semibold text-slate-700">Your Message *</label>
                      <textarea id="message" rows={6} placeholder="Write your message here..." className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5C5AE8]/50 focus:border-[#5C5AE8] transition-all resize-none"></textarea>
                    </div>

                    <button type="button" className="inline-flex items-center justify-center gap-2 w-full md:w-auto px-8 py-3.5 bg-[#5C5AE8] hover:bg-[#4A48C8] text-white font-bold rounded-lg transition-all shadow-[0_4px_14px_0_rgba(92,90,232,0.39)] hover:shadow-[0_6px_20px_rgba(92,90,232,0.23)] hover:-translate-y-0.5 cursor-pointer">
                      Send Message
                      <Send className="w-4 h-4" />
                    </button>
                  </form>
                </div>

              </div>

              {/* Full Width Map Section */}
              <div className="w-full mt-16 h-[350px] md:h-[450px] rounded-2xl overflow-hidden shadow-sm border border-slate-200">
                <iframe
                  title="Vantage Journeys Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3619.4952628262567!2d67.06693787707458!3d24.881082777915772!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33f007e0c0bad%3A0xd8962e1452e3a158!2sBalad%20Trade%20Center-II%20(BTC-2)!5e0!3m2!1sen!2s!4v1776631391948!5m2!1sen!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
