import { ArrowUp, Globe2, MessageCircle, BookOpen, Star, CheckCircle2 } from 'lucide-react';
import TopBar from './TopBar';
import NavBar from './NavBar';
import Footer from './Footer';
import headerLogo from '../assets/header-logo.png';

const guiders = [
  {
    name: "Arsalan",
    role: "Professional Travel Guide Duo",  
    image: "/images/arsalan.png", // Using a fallback image
    bio: "We are Arsalan & Manahil, a professional travel guide duo offering worldwide guided tours with a personal touch. With over a decade of experience and a passion for culture, nature, and people, we help travelers explore the world through authentic, enriching, and safe travel experiences. Whether you’re dreaming of the Alps of Switzerland, the beaches of Bali, the history of Rome, or the northern lights in Iceland — we are your reliable companions from start to finish.",
    skills: [
      { name: "Cultural Knowledge", icon: BookOpen, percentage: 95 },
      { name: "Communication Skills", icon: MessageCircle, percentage: 98 },
      { name: "Multilingual Ability", icon: Globe2, percentage: 90 }
    ]
  },
  {
    name: "Shumaila Arif",
    role: "Professional Travel Guide",
    image: "/images/mrs_arsalan.png", // Using a fallback image
    bio: "I am Shumaila Arif, a professional travel guide with over a decade of experience in creating unforgettable journeys across the globe. With a deep passion for culture, nature, and connecting with people, I specialize in offering authentic, enriching, and safe travel experiences that are tailored to your interests. Whether you’re dreaming of the Alps of Switzerland, the beaches of Bali, the historic streets of Rome, or the magical northern lights of Iceland — I’m here to be your trusted travel companion from beginning to end.",
    skills: [
      { name: "Cultural Knowledge", icon: BookOpen, percentage: 98 },
      { name: "Communication Skills", icon: MessageCircle, percentage: 96 },
      { name: "Multilingual Ability", icon: Globe2, percentage: 92 }
    ]
  }
];

export default function GuiderDetails() {
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
                alt="Guider Details header"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-r from-black/60 via-black/30 to-black/10" />
              <div className="absolute inset-0 flex items-end p-6 md:p-8">
                <div>
                  <p className="text-xs md:text-sm tracking-[0.18em] uppercase text-white/85 font-medium flex items-center gap-2">
                    <Star className="w-4 h-4 text-[#FF8A00]" />
                    Meet Our Experts
                  </p>
                  <h2 className="mt-2 text-2xl md:text-4xl font-bold text-white">
                    Guider Details
                  </h2>
                </div>
              </div>
            </div>

            <div className="bg-[#F8FAFC] flex flex-col items-center py-12 px-4 md:px-10 relative font-sans text-slate-800">
              {/* Info Ribbon */}
              <div className="w-full max-w-[1400px] bg-[#5C5AE8] relative overflow-hidden shadow-sm mb-16 rounded-sm">
                <div className="absolute left-0 top-0 bottom-0 w-2 bg-[#FF8A00]" />
                <div className="py-5 px-6 text-center">
                  <h2 className="text-[#FF8A00] font-bold text-xl md:text-2xl mb-2 tracking-wide">
                    Professional Tour Guides – Vantage Journeys
                  </h2>
                  <p className="text-white text-sm md:text-base font-medium max-w-3xl mx-auto">
                    Our experienced and passionate travel guides are dedicated to ensuring your journey is unforgettable. 
                    With deep cultural knowledge and excellent communication, they are your reliable companions worldwide.
                  </p>
                </div>
              </div>

              {/* Guiders Container */}
              <div className="w-full max-w-[1400px] space-y-12">
                {guiders.map((guide, index) => (
                  <div 
                    key={index} 
                    className="flex flex-col md:flex-row bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300"
                  >
                    {/* Left Column - Image (Placeholder for actual photo) */}
                    <div className="w-full md:w-[35%] bg-slate-100 flex flex-col items-center justify-center p-8 border-b md:border-b-0 md:border-r border-slate-200">
                      <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-white shadow-lg overflow-hidden bg-slate-200 mb-6 relative">
                         {/* Fallback avatar icon if image is generic */}
                         <div className="absolute inset-0 flex items-center justify-center bg-[#5C5AE8]/10 text-[#5C5AE8]">
                           <img src={guide.image} />
                         </div>
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold text-[#5C5AE8] text-center mb-1">
                        {guide.name}
                      </h3>
                      <p className="text-[#FF8A00] font-medium text-sm text-center">
                        {guide.role}
                      </p>
                    </div>

                    {/* Right Column - Details */}
                    <div className="w-full md:w-[65%] p-6 md:p-8 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-2 mb-4">
                          <CheckCircle2 className="w-5 h-5 text-[#FF8A00]" />
                          <h4 className="text-lg font-bold text-slate-800">About me</h4>
                        </div>
                        <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-8">
                          {guide.bio}
                        </p>
                      </div>

                      <div>
                        <div className="flex items-center gap-2 mb-5">
                          <Star className="w-5 h-5 text-[#5C5AE8]" />
                          <h4 className="text-lg font-bold text-slate-800">Professional Skills</h4>
                        </div>
                        
                        <div className="space-y-4">
                          {guide.skills.map((skill, sIdx) => {
                            const SkillIcon = skill.icon;
                            return (
                              <div key={sIdx} className="w-full">
                                <div className="flex justify-between items-center mb-1.5">
                                  <div className="flex items-center gap-2">
                                    <SkillIcon className="w-4 h-4 text-[#5C5AE8]" />
                                    <span className="text-sm font-semibold text-slate-700">{skill.name}</span>
                                  </div>
                                  <span className="text-sm font-bold text-[#FF8A00]">{skill.percentage}%</span>
                                </div>
                                <div className="w-full bg-slate-100 rounded-full h-2">
                                  <div 
                                    className="bg-gradient-to-r from-[#5C5AE8] to-[#FF8A00] h-2 rounded-full" 
                                    style={{ width: `${skill.percentage}%` }}
                                  ></div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
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
