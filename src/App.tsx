import { Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import TicketingPage from './TicketingPage';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/ticketing" element={<TicketingPage />} />
    </Routes>
  );
}
