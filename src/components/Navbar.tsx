import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { useState, useEffect } from 'react';
import { theme } from '../styles/theme';

const Navbar = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(location.pathname);
  const currentTheme = isDarkMode ? theme.dark : theme.light;

  useEffect(() => {
    setActiveTab(location.pathname);
  }, [location]);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/gear', label: 'Gear' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <header 
      className="w-full backdrop-blur-sm"
    >
      <nav className="container-width py-4">
        <div className="flex items-center justify-between">
          {/* Added Logo/Icon */}
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src="https://raw.githubusercontent.com/phillip-che/phillipche-site/refs/heads/main/src/assets/icon/transparent.png" 
              alt="Phillip Che" 
              className="w-8 h-8"
            />
          </Link>

          <div className="flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-3 py-2 text-sm rounded-lg transition-colors relative ${
                  activeTab === item.path
                    ? 'text-gray-900 dark:text-white'
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                {item.label}
                {activeTab === item.path && (
                  <motion.div
                    className="absolute inset-0 rounded-lg -z-10"
                    style={{ backgroundColor: currentTheme.nav.bubble }}
                    layoutId="bubble"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </Link>
            ))}
          </div>
          <motion.button
              onClick={toggleTheme}
              className="p-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors rounded-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {isDarkMode ? (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                </svg>
              )}
            </motion.button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar; 