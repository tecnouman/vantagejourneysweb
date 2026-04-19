import { Calendar, ArrowRight, ArrowUp } from 'lucide-react';

export default function HotelBooking() {
  return (
    <section id="hotel-booking" className="mx-auto w-full scroll-mt-28">
      <div className="border border-gray-200 bg-white shadow-[0_20px_40px_-28px_rgba(17,24,39,0.35)]">
        <div className="relative h-[180px] sm:h-[220px] md:h-[260px]">
          <img
            src="/images/breadcrumb-bg.jpg"
            alt="Hotel booking section header"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-r from-black/55 via-black/30 to-black/10" />
          <div className="absolute inset-0 flex items-end p-6 md:p-8">
            <div>
              <p className="text-xs md:text-sm tracking-[0.18em] uppercase text-white/85 font-medium">
                Vantage Hotel Booking
              </p>
              <h2 className="mt-1 text-2xl md:text-4xl font-bold text-white">
                Plan Your Stay, Reserve with Ease
              </h2>
            </div>
          </div>
        </div>

        <div className="bg-[#F8FAFC] flex flex-col items-center py-12 px-4 relative font-sans text-slate-800">
          <div className="w-full max-w-[1400px] bg-[#5C5AE8] relative overflow-hidden shadow-sm mb-10 rounded-sm">
            <div className="absolute left-0 top-0 bottom-0 w-2 bg-[#FF8A00]" />
            <div className="py-5 px-6 text-center">
              <h2 className="text-[#FF8A00] font-bold text-xl mb-1 tracking-wide">
                Book Your Hotel In Minutes!
              </h2>
              <p className="text-white text-sm font-medium">
                Choose your room, and start your journey today. Adventure awaits - let&apos;s check in together!
              </p>
            </div>
          </div>

          <div className="text-center mb-10">
            <h1 className="text-[#5C5AE8] text-3xl font-extrabold mb-3">
              Hotel Booking Form
            </h1>
            <p className="text-slate-500 text-sm">
              Fill in your details below to book your hotel quickly and easily.
            </p>
          </div>

          <div className="w-full max-w-[1400px] bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-8 md:p-12 mb-10">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6">
                <div>
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full border border-slate-200 rounded-lg px-4 py-3.5 text-sm outline-none transition-all focus:border-[#5C5AE8] focus:ring-1 focus:ring-[#5C5AE8] placeholder:text-slate-400"
                  />
                </div>

                <div>
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full border border-slate-200 rounded-lg px-4 py-3.5 text-sm outline-none transition-all focus:border-[#5C5AE8] focus:ring-1 focus:ring-[#5C5AE8] placeholder:text-slate-400"
                  />
                </div>

                <div>
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full border border-slate-200 rounded-lg px-4 py-3.5 text-sm outline-none transition-all focus:border-[#5C5AE8] focus:ring-1 focus:ring-[#5C5AE8] placeholder:text-slate-400"
                  />
                </div>

                <div>
                  <input
                    type="text"
                    placeholder="Destination City"
                    className="w-full border border-slate-200 rounded-lg px-4 py-3.5 text-sm outline-none transition-all focus:border-[#5C5AE8] focus:ring-1 focus:ring-[#5C5AE8] placeholder:text-slate-400"
                  />
                </div>

                <div>
                  <input
                    type="text"
                    placeholder="Hotel Location"
                    className="w-full border border-slate-200 rounded-lg px-4 py-3.5 text-sm outline-none transition-all focus:border-[#5C5AE8] focus:ring-1 focus:ring-[#5C5AE8] placeholder:text-slate-400"
                  />
                </div>

                <div className="relative">
                  <input
                    type="text"
                    placeholder="Check-in Date"
                    className="w-full border border-slate-200 rounded-lg px-4 py-3.5 text-sm outline-none transition-all focus:border-[#5C5AE8] focus:ring-1 focus:ring-[#5C5AE8] placeholder:text-slate-700 font-medium pr-10"
                  />
                  <Calendar className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4 cursor-pointer" />
                </div>

                <div className="relative">
                  <input
                    type="text"
                    placeholder="Check-out Date"
                    className="w-full border border-slate-200 rounded-lg px-4 py-3.5 text-sm outline-none transition-all focus:border-[#5C5AE8] focus:ring-1 focus:ring-[#5C5AE8] placeholder:text-slate-700 font-medium pr-10"
                  />
                  <Calendar className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4 cursor-pointer" />
                </div>

                <div>
                  <input
                    type="number"
                    placeholder="Number of Guests"
                    className="w-full border border-slate-200 rounded-lg px-4 py-3.5 text-sm outline-none transition-all focus:border-[#5C5AE8] focus:ring-1 focus:ring-[#5C5AE8] placeholder:text-slate-400"
                  />
                </div>
              </div>

              <div className="pt-2">
                <textarea
                  placeholder="Additional Notes / Requirements..."
                  rows={6}
                  className="w-full border border-slate-200 rounded-lg px-4 py-4 text-sm outline-none transition-all focus:border-[#5C5AE8] focus:ring-1 focus:ring-[#5C5AE8] placeholder:text-slate-400 resize-y"
                />
              </div>

              <div className="pt-4">
                <button
                  type="button"
                  className="group flex items-center justify-center gap-3 bg-[#5C5AE8] hover:bg-[#ff5a36] text-white font-semibold py-3.5 px-8 rounded-full shadow-[0_8px_20px_rgba(92,90,232,0.3)] hover:shadow-[0_8px_25px_rgba(92,90,232,0.4)] transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
                >
                  <span className="text-[15px]">Book Hotel</span>
                  <div className="bg-white rounded-full p-1.5 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1">
                    <ArrowRight className="w-3.5 h-3.5 text-[#5C5AE8]" strokeWidth={3} />
                  </div>
                </button>
              </div>
            </form>
          </div>

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
