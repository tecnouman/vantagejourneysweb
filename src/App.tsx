import { Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import TicketingPage from './TicketingPage';
import HotelBookingPage from './HotelBookingPage';
import VisaApplicationPage from './VisaApplicationPage';
import FaqPage from './FaqPage';
import TermsAndConditions from './TermsAndConditions';
import PrivacyPolicy from './components/PrivacyPolicy';
import GuiderDetails from './components/GuiderDetails';
import ContactUs from './components/ContactUs';
import AboutUs from './components/About Us';
import DestinationPlace from './components/DestinationPlace';
import Destinations from './components/Destinations';
import DiscoverTour from './components/DiscoverTour';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/ticketing" element={<TicketingPage />} />
      <Route path="/hotel-booking" element={<HotelBookingPage />} />
      <Route path="/visa-application" element={<VisaApplicationPage />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/contact-us" element={<ContactUs />} />
      <Route path="/guider-details" element={<GuiderDetails />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
      <Route path="/faq" element={<FaqPage />} />
      <Route path="/destinations/japan" element={<DestinationPlace />} />
      <Route path="/destinations" element={<Destinations />} />
      <Route path="/trip/discover-timeless-temples-and-gardens" element={<DiscoverTour />} />
    </Routes>
  );
}
