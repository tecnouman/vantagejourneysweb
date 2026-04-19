import Header from './Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import DestinationsSection from './components/DestinationsSection';
import FeaturedPlaces from './components/FeaturedPlaces';
import FindTrip from './components/FindTrip';
import FlightPartners from './components/FlightPartners';
import Footer from './components/Footer';
import HotDeals from './components/HotDeals';
import InstagramFeed from './components/InstagramFeed';
import RibbonMarquee from './components/RibbonMarquee';
import TeamSection from './components/TeamSection';
import Testimonials from './components/Testimonials';
import TravelPosts from './components/TravelPosts';
import DirectorMessage from './components/DirectorMessage';

const directors = [
  {
    title: 'Board Of Director',
    message:
      'Arsalan Ghouri is the visionary Director of Vantage Journeys, bringing years of expertise in premium travel management and strategic business development. He specializes in designing innovative travel solutions, fostering strong global partnerships... Arsalan Ghouri continues to lead Vantage Journeys with professionalism, innovation, and a forward-looking approach.',
    name: 'Arsalan Ghouri',
    role: 'Director',
    imageUrl:'/images/arsalan.png',
  },
  {
    title: 'Board Of Director',
    message:
      'Manahil is the visionary Director of Vantage Journeys, bringing years of expertise in premium travel management and strategic business development. He specializes in designing innovative travel solutions, fostering strong global partnerships... Arsalan Ghouri continues to lead Vantage Journeys with professionalism, innovation, and a forward-looking approach.',
    name: 'Manahil',
    role: 'Director',
    imageUrl:'/images/mrs_arsalan.png',
  },
];

export default function HomePage() {
  return (
    <section>
      <Header />
      <HeroSection />
      <FindTrip />
      <DestinationsSection />
      <AboutSection />
      <FlightPartners />
      <FeaturedPlaces />      
      <HotDeals />
      <Testimonials />
      <RibbonMarquee />
      <TeamSection />
      <TravelPosts />
      <InstagramFeed />
      <DirectorMessage directors={directors} />
      <Footer />
    </section>
  );
}
