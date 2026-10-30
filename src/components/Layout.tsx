import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { ScrollToTop } from './ScrollToTop';
import { WhatsAppFloat } from './WhatsAppFloat';

export function Layout() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main id="main" className="overflow-x-clip">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
