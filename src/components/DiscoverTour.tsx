import { CheckCircle2, Clock, MapPin, XCircle, ChevronDown, ChevronUp, Star, Users, ArrowUp } from 'lucide-react';
import { useState } from 'react';
import TopBar from './TopBar';
import NavBar from './NavBar';
import Footer from './Footer';
import headerLogo from '../assets/header-logo.png';

const faqs = [
  {
    question: "Is this a moderately difficult trekking route?",
    answer: "Annapurna Base Camp is a Grade B or a moderately difficult trekking route. So any fit person can do this trek, even if you do not have any previous experience. You should be aware of what to expect and mentally prepare for it. Then, as long as you will too, you can."
  },
  {
    question: "How long do we walk per day?",
    answer: "On average, you walk about 4 to 6 hours per day. One or two days can be as less as 3hrs and one or two days can be as long as 7hrs."
  },
  {
    question: "What is the highest altitude reached?",
    answer: "The highest altitude reached is 4190m. This is the elevation of Annapurna Base Camp. ABC is the highest we will climb in this trek."
  },
  {
    question: "Can I charge batteries on the route?",
    answer: "Yes, you can charge batteries en route. Charger should be brought. There are hot shower facilities as well. You may have to pay a certain amount for both ($1-$2). Negotiate. Also, a hot water facility could be free at a lower elevation."
  },
  {
    question: "Are there ATMs on the trek route?",
    answer: "No. There are no ATMs on this trek route. You will have to draw enough cash in Pokhara or Kathmandu. There are a number of ATMs in these cities. Everything is paid in Nepali rupees. So money should be exchanged before the start of the trek."
  },
  {
    question: "Is there internet access?",
    answer: "Yes. The Internet can be accessed in most places. Sometimes, there might be some technical problems. The Internet in Nepal is not as fast as you are used to and at times you can just lose connection."
  }
];

export default function DiscoverTour() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <TopBar />
      <NavBar logoSrc={headerLogo} />
      <main>
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] w-full overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1528360983277-13d401cdc186?q=80&w=1920&auto=format&fit=crop"
          alt="Discover Timeless Temples and Gardens"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-end justify-center pb-20">
          <div className="text-center px-4 max-w-5xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg leading-tight">
              Discover Timeless Temples and Gardens
            </h1>
            <div className="flex items-center justify-center gap-6 text-white/90 font-medium mt-6">
               <div className="flex items-center gap-2">
                 <Clock className="w-5 h-5 text-[#ff5a36]" />
                 <span>5 Days / 4 Nights</span>
               </div>
               <div className="flex items-center gap-2">
                 <div className="flex items-center text-yellow-400">
                    <Star className="w-5 h-5 fill-current" />
                    <Star className="w-5 h-5 fill-current" />
                    <Star className="w-5 h-5 fill-current" />
                    <Star className="w-5 h-5 fill-current" />
                    <Star className="w-5 h-5 fill-current" />
                 </div>
                 <span>(4.7/5)</span>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Left Column (Content) */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* Overview */}
            <section id="overview" className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Overview</h2>
              <div className="prose prose-lg text-gray-600 max-w-none space-y-4">
                <p>
                  Travel is the movement of people between relatively distant geographical locations, and can involve travel by foot, bicycle, automobile, train, boat, bus, airplane, or other means, with or without luggage, and can be one way or round trip. Travel can also include relatively short stays between successive movements.
                </p>
                <p>
                  The origin of the word “travel” is most likely lost to history. The term “travel” may originate from the Old French word travail, which means ‘work’. According to the Merriam Webster dictionary, the first known use of the word travel was in the 14th century.
                </p>
                <ul className="list-disc pl-5 space-y-2 mt-4 text-gray-700 font-medium">
                  <li>Trek to the world-famous Everest Base Camp</li>
                  <li>Enjoy the amazing view of the Himalayas from Kala Patthar</li>
                  <li>Travel through the Sherpa villages of Namche, Khumjung, Khunde, and Dingboche</li>
                  <li>Visit Tengboche the biggest and oldest monastery in the region.</li>
                </ul>
                <p className="mt-4">
                  Arrive at Tribhuwan International Airport, Kathmandu, you are welcomed by the team and then you will be transferred to your hotel. This trail goes through Ghorepani Poon Hill. Normally, the trek starts like Pokhara to Nayapul and ends like Phedi to Pokhara. While early travel tended to be slower, more dangerous, and more dominated by trade and migration, cultural and technological advances over many years have tended to mean that travel has become easier and more accessible.
                </p>
              </div>
            </section>

            {/* Inclusions & Exclusions */}
            <section id="cost" className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Cost Includes */}
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-green-50 rounded-full flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-6 h-6 text-green-500" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">The Cost Includes</h3>
                </div>
                <ul className="space-y-4">
                  {[
                    "Pick-up or Drop-off service from and to Airport",
                    "Transportation to and from including local transfers",
                    "Food all along the trip (Breakfast, Lunch, Dinner)",
                    "Accommodations during the trip in quality hotels",
                    "First aid medical kit during tours",
                    "All the required permits and paperwork"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                      <span className="text-gray-600 text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Cost Excludes */}
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-red-50 rounded-full flex items-center justify-center shrink-0">
                    <XCircle className="w-6 h-6 text-red-500" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">The Cost Excludes</h3>
                </div>
                <ul className="space-y-4">
                  {[
                    "International Airfare",
                    "Visa Charges",
                    "Hotel Expenses (In Kathmandu, some packages exclude)",
                    "Your travel and medical insurance",
                    "Personal Expenses (shopping, bar bills, laundry)",
                    "Services not mentioned or not promised",
                    "Emergency extra expenses"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                      <span className="text-gray-600 text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* FAQs */}
            <section id="faqs" className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
               <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center md:text-left">Frequently Asked Questions</h2>
               <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <div 
                      key={index} 
                      className={`border rounded-2xl transition-all duration-300 ${openFaqIndex === index ? 'border-[#5b4cc4] bg-indigo-50/30' : 'border-gray-200 hover:border-gray-300 bg-white'}`}
                    >
                      <button
                        className="w-full flex items-center justify-between p-5 text-left focus:outline-none"
                        onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                      >
                        <span className={`font-semibold pr-4 ${openFaqIndex === index ? 'text-[#5b4cc4]' : 'text-gray-800'}`}>
                          {faq.question}
                        </span>
                        {openFaqIndex === index ? (
                          <ChevronUp className="w-5 h-5 text-[#5b4cc4] shrink-0" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-gray-400 shrink-0" />
                        )}
                      </button>
                      <div 
                        className={`overflow-hidden transition-all duration-300 ${openFaqIndex === index ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'}`}
                      >
                        <div className="p-5 pt-0 text-gray-600 leading-relaxed text-sm">
                          {faq.answer}
                        </div>
                      </div>
                    </div>
                  ))}
               </div>
            </section>
          </div>

          {/* Right Column (Sidebar) */}
          <div className="lg:col-span-1">
            <div className="sticky top-28 space-y-8">
              
              {/* Booking Widget */}
              <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
                <div className="flex items-end gap-2 mb-6 border-b border-gray-100 pb-6">
                  <span className="text-4xl font-bold text-[#5b4cc4]">$1,050</span>
                  <span className="text-gray-500 font-medium mb-1">/ per person</span>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3 text-gray-600">
                    <Clock className="w-5 h-5 text-[#ff5a36]" />
                    <span className="font-medium text-sm">Duration: 5 Days / 4 Nights</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <Users className="w-5 h-5 text-[#ff5a36]" />
                    <span className="font-medium text-sm">Group Size: 2 - 12 People</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <MapPin className="w-5 h-5 text-[#ff5a36]" />
                    <span className="font-medium text-sm">Location: Kathmandu, Nepal</span>
                  </div>
                </div>

                <button className="w-full bg-[#5b4cc4] hover:bg-[#ff5a36] text-white font-bold py-4 px-6 rounded-2xl transition-colors duration-300 shadow-lg shadow-indigo-200">
                  Book Now
                </button>
                <div className="mt-4 text-center">
                  <a href="#enquiry" className="text-sm font-semibold text-[#5b4cc4] hover:underline">Or send an enquiry</a>
                </div>
              </div>

              {/* Need Help Widget */}
              <div className="bg-[#5b4cc4] text-white p-8 rounded-3xl shadow-lg relative overflow-hidden">
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-4">Need Help Booking?</h3>
                  <p className="text-indigo-100 text-sm mb-6 leading-relaxed">
                    Call our customer services team on the number below to speak to one of our advisors who will help you with all of your holiday needs.
                  </p>
                  <a href="tel:+923009248148" className="flex items-center gap-3 text-xl font-bold hover:text-[#ff5a36] transition-colors">
                    +92 300 9248148
                  </a>
                </div>
                {/* Decorative background shapes */}
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-black/10 rounded-full blur-2xl"></div>
              </div>

            </div>
          </div>

        </div>
      </div>

       {/* Scroll Top */}
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
