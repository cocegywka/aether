import * as React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Nav } from './Nav';
import { Footer } from './Footer';
import { InquiryModal } from './InquiryModal';

export function Layout() {
  const [isInquiryOpen, setIsInquiryOpen] = React.useState(false);
  const location = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen flex-col">
      <Nav onStartProject={() => setIsInquiryOpen(true)} />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <InquiryModal isOpen={isInquiryOpen} onClose={() => setIsInquiryOpen(false)} />
    </div>
  );
}
