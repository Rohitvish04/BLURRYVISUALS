import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import ProjectDetails from './pages/ProjectDetails';
import LenisProvider from './components/ui/LenisProvider';
import FilmGrain from './components/ui/FilmGrain';
import CustomCursor from './components/ui/CustomCursor';
import PageLoader from './components/ui/PageLoader';

export default function App() {
  return (
    <Router>
      <LenisProvider>
        {/* Cinematic Preloader Gate */}
        <PageLoader />

        {/* Global Celluloid Grain Noise Overlay */}
        <FilmGrain />

        {/* Global Mouse Glow & Shape Tracker */}
        <CustomCursor />
        
        {/* Global Page Structure */}
        <div className="relative min-h-screen bg-[#FFFFFF] flex flex-col justify-between select-none">
          <Navbar />
          
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/project/:id" element={<ProjectDetails />} />
            </Routes>
          </main>
          
          <Footer />
        </div>
      </LenisProvider>
    </Router>
  );
}
