// Body.jsx
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import HeroSection from './HeroSection';

const Body = () => {
  return (
   <div className="flex flex-col min-h-full">
    
  {/* Main content grows to fill available space and scrolls if needed */}
  <main className="flex-1 max-h-[80vh] overflow-auto p-4 sm:p-6 md:p-8 bg-gray-50">
  {/* Navbar stays on top */}
  <HeroSection className="w-full" />
  <Navbar className="w-full" />

  <Outlet />



  {/* Footer sticks to bottom if content is short */}
  <Footer className="w-full " />
  </main>
</div>

  );
};

export default Body;
