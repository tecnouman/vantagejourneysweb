import { ArrowUp } from 'lucide-react';
import TopBar from './TopBar';
import NavBar from './NavBar';
import Footer from './Footer';
import headerLogo from '../assets/header-logo.png';

const privacyData = [
  {
    title: "1. Information We Collect",
    items: [
      "Personal Information: Name, phone number, email address, CNIC/passport number, and travel preferences.",
      "Payment Information: Bank transfer receipts or transaction details (no card data is stored by us).",
      "Browsing Data: Pages visited, time spent, clicks, device/browser type, and IP address."
    ]
  },
  {
    title: "2. How We Collect Information",
    items: [
      "Website Forms: Information you submit via contact forms, booking inquiries, or newsletter subscriptions.",
      "Social Media Ads: Data collected via Facebook Pixel and Google Ads when you interact with our advertisements.",
      "Cookies: We use cookies to track website usage and improve performance. You can disable cookies via your browser settings."
    ]
  },
  {
    title: "3. How We Use Your Data",
    items: [
      "To respond to your inquiries and provide requested travel services.",
      "To customize and improve your browsing experience on our site.",
      "For marketing, retargeting, and audience analysis using Facebook and Google tools."
    ]
  },
  {
    title: "4. Data Sharing",
    items: [
      "Your data may be shared only with essential service providers involved in planning and executing your tour:",
      "Hotels, Airlines, Visa Agents, and Transport Companies",
      "Local tour guides or insurance providers, when necessary",
      "All partners are required to use your data strictly for service delivery and are bound to maintain confidentiality."
    ]
  },
  {
    title: "5. No Selling or Misuse of Data",
    items: [
      "Vantage Journeys never sells, rents, or trades your personal data to any third parties.",
      "We do not share your data for advertising purposes with unrelated companies."
    ]
  },
  {
    title: "6. Email and WhatsApp Communication",
    items: [
      "By submitting your contact details, you consent to receive updates, itineraries, or promotional offers.",
      "You can unsubscribe from emails or request to stop WhatsApp messages at any time."
    ]
  },
  {
    title: "7. Data Security",
    items: [
      "We implement industry-standard encryption and secure storage practices to protect your data.",
      "Access to your data is restricted to authorized staff only."
    ]
  },
  {
    title: "8. Your Rights and Choices",
    items: [
      "You may request to view, correct, or delete your personal data by contacting us.",
      "You can opt out of Facebook/Google ad tracking via your browser or ad settings."
    ]
  },
  {
    title: "9. Retention of Data",
    items: [
      "We retain personal data only as long as needed to fulfill the purposes outlined in this policy.",
      "Data related to financial transactions may be stored longer due to legal and accounting requirements."
    ]
  },
  {
    title: "10. Third-Party Websites",
    items: [
      "Our site may contain links to external websites.",
      "We are not responsible for the privacy practices of those sites."
    ]
  },
  {
    title: "11. Updates to This Policy",
    items: [
      "We may update this Privacy Policy from time to time.",
      "Changes will be posted on this page with the updated date."
    ]
  },
  {
    title: "12. Contact Us",
    items: [
      "For questions or concerns about your privacy or this policy, email us at info@vantagejourneys.com.",
      "By using our website and services, you agree to the collection and use of information in accordance with this Privacy Policy."
    ]
  }
];

export default function PrivacyPolicy() {
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
                alt="Privacy Policy header"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-r from-black/55 via-black/30 to-black/10" />
              <div className="absolute inset-0 flex items-end p-6 md:p-8">
                <div>
                  <p className="text-xs md:text-sm tracking-[0.18em] uppercase text-white/85 font-medium">
                    Legal & Policies
                  </p>
                  <h2 className="mt-1 text-2xl md:text-4xl font-bold text-white">
                    Privacy Policy
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
                    Privacy Policy – Vantage Journeys
                  </h2>
                  <p className="text-white text-sm md:text-base font-medium">
                    Vantage Journeys respects your privacy and is committed to protecting the personal information you share with us. This Privacy Policy explains how we collect, use, store, and share your data across our digital platforms and services. By using our website or booking services, you agree to this policy.
                  </p>
                </div>
              </div>

              <div className="w-full max-w-[1400px]">
                <div className="space-y-8 bg-white p-6 md:p-10 rounded-2xl border border-slate-200 shadow-sm">
                  {privacyData.map((section, index) => (
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
