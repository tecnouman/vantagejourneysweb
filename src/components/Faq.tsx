import { useState } from 'react';
import { ChevronDown, ChevronUp, ArrowUp } from 'lucide-react';

const faqs = [
  {
    question: "How do I book a trip?",
    answer: "Our packages typically include accommodations, guided tours, airport transfers, and select meals. You can book a trip by contacting our support team or using the booking forms available on our website."
  },
  {
    question: "What is the cancellation policy?",
    answer: "Cancellations made 30 days prior to departure receive a full refund. Cancellations made within 15-30 days will incur a 50% fee. Please contact us for specific details regarding your package."
  },
  {
    question: "Are flights included in the package price?",
    answer: "Flights are generally not included in the standard package price unless specified, allowing you the flexibility to choose your own departure city and airline. We can assist with flight bookings upon request."
  },
  {
    question: "Can I customize my itinerary?",
    answer: "Yes, we offer fully customizable itineraries to match your travel preferences and schedule. Speak to our travel agents to tailor the perfect trip for you."
  },
  {
    question: "Do you offer group discounts?",
    answer: "Yes, special rates and group discounts are available for larger groups. Please contact our support team with your group size and destination for a quote."
  },
  {
    question: "Is travel insurance included in the package?",
    answer: "Travel insurance is not typically included but we highly recommend adding it. We can assist you with purchasing comprehensive coverage to ensure peace of mind."
  },
  {
    question: "How do I make changes to my booking?",
    answer: "You can make changes to your booking by contacting our customer support team at least 48 hours before your scheduled departure. Changes are subject to availability and potential fees."
  },
  {
    question: "What's included in my travel package?",
    answer: "Our typical travel package includes hotel accommodations, daily breakfast, guided tours of key attractions, and airport transfers. Specific inclusions depend on the selected destination."
  }
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="mx-auto w-full scroll-mt-28 mb-20">
      <div className="border border-gray-200 bg-white shadow-[0_20px_40px_-28px_rgba(17,24,39,0.35)]">
        {/* Header Section */}
        <div className="relative h-[180px] sm:h-[220px] md:h-[260px]">
          <img
            src="/images/breadcrumb-bg.jpg"
            alt="FAQ section header"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-r from-black/55 via-black/30 to-black/10" />
          <div className="absolute inset-0 flex items-end p-6 md:p-8">
            <div>
              <p className="text-xs md:text-sm tracking-[0.18em] uppercase text-white/85 font-medium">
                Information Hub
              </p>
              <h2 className="mt-1 text-2xl md:text-4xl font-bold text-white">
                Frequently Asked Questions
              </h2>
            </div>
          </div>
        </div>

        <div className="bg-[#F8FAFC] flex flex-col items-center py-12 px-4 relative font-sans text-slate-800">
          {/* Info Ribbon */}
          <div className="w-full max-w-[1400px] bg-[#5C5AE8] relative overflow-hidden shadow-sm mb-12 rounded-sm">
            <div className="absolute left-0 top-0 bottom-0 w-2 bg-[#FF8A00]" />
            <div className="py-5 px-6 text-center">
              <h2 className="text-[#FF8A00] font-bold text-xl mb-1 tracking-wide">
                Got Questions? We've Got Answers!
              </h2>
              <p className="text-white text-sm font-medium">
                Find answers to commonly asked questions about booking, packages, and policies below.
              </p>
            </div>
          </div>

          <div className="w-full max-w-[1400px]">
            {/* FAQ Accordion */}
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div 
                  key={index} 
                  className={`bg-white border rounded-xl overflow-hidden transition-all duration-300 ${
                    openIndex === index 
                      ? 'border-[#5C5AE8] shadow-[0_8px_30px_rgb(0,0,0,0.08)]' 
                      : 'border-slate-200 shadow-sm hover:border-[#5C5AE8]/40'
                  }`}
                >
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full px-6 py-5 flex items-center justify-between focus:outline-none cursor-pointer"
                  >
                    <span className={`text-left font-semibold text-base md:text-lg transition-colors ${
                      openIndex === index ? 'text-[#5C5AE8]' : 'text-slate-800'
                    }`}>
                      {faq.question}
                    </span>
                    <div className={`p-1 rounded-full transition-colors ${
                      openIndex === index ? 'bg-[#5C5AE8]/10' : 'bg-slate-100'
                    }`}>
                      {openIndex === index ? (
                        <ChevronUp className="w-5 h-5 text-[#5C5AE8]" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-slate-500" />
                      )}
                    </div>
                  </button>
                  
                  <div 
                    className={`transition-all duration-300 ease-in-out overflow-hidden ${
                      openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="px-6 pb-5 text-slate-600 text-sm leading-relaxed border-t border-slate-100 mt-2 pt-4">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              ))}
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
  );
}
