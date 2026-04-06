import TopBar from './components/TopBar';
import NavBar from './components/NavBar';
import Ticketing from './components/Ticketing';
import Footer from './components/Footer';
import headerLogo from './assets/header-logo.png';

export default function TicketingPage() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <TopBar />
      <NavBar logoSrc={headerLogo} />
      <main>
        <Ticketing />
      </main>
      <Footer />
    </div>
  );
}
