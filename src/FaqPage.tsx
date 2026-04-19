import TopBar from './components/TopBar';
import NavBar from './components/NavBar';
import Faq from './components/Faq';
import Footer from './components/Footer';
import headerLogo from './assets/header-logo.png';

export default function FaqPage() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <TopBar />
      <NavBar logoSrc={headerLogo} />
      <main>
        <Faq />
      </main>
      <Footer />
    </div>
  );
}
