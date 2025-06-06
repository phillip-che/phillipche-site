import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ThemeProvider } from './context/ThemeContext';
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Gear from './pages/Gear';
import Contact from './pages/Contact';
// import Gallery from './pages/Gallery';
import ScrollToTop from './utils/ScrollToTop';
import { Layout } from './components/Layout';

const pageVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  enter: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.61, 1, 0.88, 1],
    },
  },
  exit: {
    opacity: 0,
    y: 20,
    transition: {
      duration: 0.4,
      ease: [0.61, 1, 0.88, 1],
    },
  },
};

const App = () => {
  const location = useLocation();
  const [showFooter, setShowFooter] = useState(false);

  useEffect(() => {
    // Reset footer visibility on route change
    setShowFooter(false);
    
    // Delay footer rendering
    const timer = setTimeout(() => {
      setShowFooter(true);
    }, 1000); // Adjust timing as needed

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <ThemeProvider>
      <Layout>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <div className="container-width section">
              <AnimatePresence mode="wait">
                <motion.div
                  key={location.pathname}
                  initial="initial"
                  animate="enter"
                  exit="exit"
                  variants={pageVariants}
                  onAnimationComplete={() => setShowFooter(true)}
                >
                  <Routes location={location}>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/gear" element={<Gear />} />
                    <Route path="/contact" element={<Contact />} />
                    {/* <Route path="/gallery" element={<Gallery />} /> */}
                  </Routes>
                </motion.div>
              </AnimatePresence>
            </div>
          </main>
          <AnimatePresence>
            {showFooter && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                <Footer />
              </motion.div>
            )}
          </AnimatePresence>
          <ScrollToTop />
        </div>
      </Layout>
    </ThemeProvider>
  );
};

export default App;