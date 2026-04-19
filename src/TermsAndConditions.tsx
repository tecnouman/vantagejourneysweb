import { ArrowUp } from 'lucide-react';
import TopBar from './components/TopBar';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import headerLogo from './assets/header-logo.png';

const termsData = [
  {
    title: "1. Booking and Reservations",
    items: [
      "All bookings are subject to availability and confirmation from Vantage Journeys.",
      "A minimum deposit (usually 30–50%) is required at the time of booking.",
      "Final payment must be made within the communicated timeframe."
    ]
  },
  {
    title: "2. Payment Terms",
    items: [
      "Payments may be made via bank transfer, cash deposit, or approved digital gateways.",
      "Full payment must be completed before departure.",
      "Late payments may incur penalties or additional charges."
    ]
  },
  {
    title: "3. Pricing and Inclusions",
    items: [
      "Prices are quoted in PKR or USD and may vary due to exchange rates.",
      "Inclusions are specified in each package; all other items are excluded.",
      "Prices may change without notice due to supplier or airfare updates."
    ]
  },
  {
    title: "4. Cancellations and Refund Policy",
    items: [
      "Cancellations must be submitted in writing via email or WhatsApp.",
      "Booking deposits are generally non-refundable unless stated otherwise.",
      "Eligible refunds are processed within 14 working days."
    ]
  },
  {
    title: "5. Changes and Modifications",
    items: [
      "Changes are subject to availability and may incur extra charges.",
      "Requests must be made at least 10 days prior to departure.",
      "Vantage Journeys may substitute hotels or services of equal value when needed."
    ]
  },
  {
    title: "6. Travel Documents and Visas",
    items: [
      "Clients must have valid passports and necessary visas.",
      "Visa assistance is provided but approval cannot be guaranteed.",
      "Failure to obtain a visa does not entitle the traveler to a refund."
    ]
  },
  {
    title: "7. Compliance with International Laws",
    items: [
      "Travelers must follow immigration, customs, and local laws of destination countries.",
      "Ignorance of the law is not an acceptable defense.",
      "Vantage Journeys is not liable for penalties resulting from non-compliance."
    ]
  },
  {
    title: "8. Prohibited Substances and Items",
    items: [
      "Banned or illegal substances may lead to arrest or deportation.",
      "Certain prescription medications may be restricted in some countries.",
      "Travelers must declare items like drones, large currency amounts, or restricted foods."
    ]
  },
  {
    title: "9. Traveler Conduct",
    items: [
      "Respect for local customs, culture, and laws is required at all times.",
      "Appropriate dress codes and decorum must be maintained in sacred places.",
      "Unruly or offensive behavior may result in removal from the tour without refund."
    ]
  },
  {
    title: "10. Health, Safety, and Insurance",
    items: [
      "Travelers must be medically fit to travel and follow destination health protocols.",
      "Travel insurance covering health, cancellations, and belongings is strongly recommended.",
      "Vantage Journeys is not liable for medical issues, damages, or personal losses."
    ]
  },
  {
    title: "11. Flights and Airlines",
    items: [
      "Vantage Journeys acts only as an intermediary between clients and airlines.",
      "Flight delays, cancellations, or schedule changes are handled by the airline.",
      "Clients must reconfirm flights 72 hours before departure."
    ]
  },
  {
    title: "12. Responsibility and Liability",
    items: [
      "We are not responsible for errors, delays, or issues caused by third-party suppliers.",
      "Force majeure events (weather, political unrest, etc.) are beyond our control.",
      "Liability is limited to the amount paid for specific services."
    ]
  },
  {
    title: "13. Use of Images and Testimonials",
    items: [
      "Photos and videos taken during tours may be used for promotional content.",
      "Testimonials may appear on our website unless you request otherwise.",
      "Personal data is kept confidential and not shared without permission."
    ]
  },
  {
    title: "14. Website and Content Use",
    items: [
      "All website content belongs to Vantage Journeys.",
      "Content may not be reproduced without written approval.",
      "We may update website content and policies without prior notice."
    ]
  },
  {
    title: "15. Governing Law and Jurisdiction",
    items: [
      "These terms are governed by the laws of Pakistan.",
      "All disputes will be resolved in Karachi courts.",
      "Clients agree to attempt mediation before pursuing legal action."
    ]
  }
];

export default function TermsAndConditions() {
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
                alt="Terms and conditions header"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-r from-black/55 via-black/30 to-black/10" />
              <div className="absolute inset-0 flex items-end p-6 md:p-8">
                <div>
                  <p className="text-xs md:text-sm tracking-[0.18em] uppercase text-white/85 font-medium">
                    Legal & Policies
                  </p>
                  <h2 className="mt-1 text-2xl md:text-4xl font-bold text-white">
                    Terms & Conditions
                  </h2>
                </div>
              </div>
            </div>

            <div className="bg-[#F8FAFC] flex flex-col items-center py-12 px-4 md:px-10 relative font-sans text-slate-800">
              {/* Info Ribbon */}
              <div className="w-full max-w-[1400px] bg-[#5C5AE8] relative overflow-hidden shadow-sm mb-12 rounded-sm">
                <div className="absolute left-0 top-0 bottom-0 w-2 bg-[#FF8A00]" />
                <div className="py-5 px-6 text-center">
                  <h2 className="text-[#FF8A00] font-bold text-xl md:text-2xl mb-2 tracking-wide">
                    Terms & Conditions – Vantage Journeys
                  </h2>
                  <p className="text-white text-sm md:text-base font-medium">
                    These Terms and Conditions govern the use of services offered by Vantage Journeys, an international tour company based in Pakistan. By booking a tour or using our website, you agree to the terms outlined below.
                  </p>
                </div>
              </div>

              <div className="w-full max-w-[1400px]">
                <div className="space-y-8 bg-white p-6 md:p-10 rounded-2xl border border-slate-200 shadow-sm">
                  {termsData.map((section, index) => (
                    <div key={index} className="space-y-3">
                      <h3 className="text-lg md:text-xl font-bold text-[#5C5AE8] border-b border-slate-100 pb-2">
                        {section.title}
                      </h3>
                      <ul className="list-disc pl-5 space-y-2 text-slate-600 text-sm md:text-base leading-relaxed">
                        {section.items.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                  
                  <div className="mt-10 pt-8 border-t border-slate-200 text-center">
                    <p className="text-slate-600 text-sm md:text-base mb-4">
                      For any questions, contact us at <a href="mailto:info@vantagejourneys.com" className="text-[#5C5AE8] hover:underline font-semibold">info@vantagejourneys.com</a>.
                    </p>
                    <p className="text-[#FF8A00] font-medium text-lg">
                      From your first step to your dream destination, Vantage Journeys is by your side.
                    </p>
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
