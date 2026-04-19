import TopBar from './components/TopBar';
import NavBar from './components/NavBar';
import headerLogo from './assets/header-logo.png';

export default function Header() {
  return (
    <div>
      <TopBar />
      <NavBar logoSrc={headerLogo} />
    </div>
  );
}
