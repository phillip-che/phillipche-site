import { motion, AnimatePresence } from 'framer-motion';
import { usePageTitle } from '../hooks/usePageTitle';
import { FadeInSection } from '../utils/FadeInSection';
import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect, useState } from "react";

const Contact = () => {
  usePageTitle('Contact');
  const [selectedEvent, setSelectedEvent] = useState<string | null>(null);

  const cardHoverVariants = {
    initial: { scale: 1, y: 0 },
    hover: { 
      scale: 1.02, 
      y: -2,
      transition: {
        duration: 0.2,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  };

  const iconHoverVariants = {
    initial: { scale: 1, rotate: 0 },
    hover: { 
      scale: 1.1, 
      rotate: 5,
      transition: {
        duration: 0.2,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.4, 0, 0.2, 1]
      }
    },
    exit: { 
      opacity: 0, 
      y: -20,
      transition: {
        duration: 0.3,
        ease: [0.4, 0, 1, 1]
      }
    }
  };

  const calendarVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 30 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1],
        delay: 0.1
      }
    },
    exit: { 
      opacity: 0, 
      scale: 0.95, 
      y: -30,
      transition: {
        duration: 0.3,
        ease: [0.4, 0, 1, 1]
      }
    }
  };


  const eventTypes = [
    {
      id: "phillip-che/15-minutes-chat-with-me",
      title: "15 Min Chat",
      description: "Quick chat",
      duration: "15 min"
    },
    {
      id: "phillip-che/30-minutes-chat-with-me", 
      title: "30 Min Chat",
      description: "Standard meeting",
      duration: "30 min"
    },
    {
      id: "phillip-che/60-minutes-chat-with-me",
      title: "60 Min Chat", 
      description: "In-depth conversation",
      duration: "60 min"
    }
  ];

  useEffect(() => {
    (async function () {
      const cal = await getCalApi();
      cal("ui", {
        "styles": {
          "branding": { "brandColor": "#000000" }
        }
      });
    })();
  }, [selectedEvent]);

  return (
    <div>
      <FadeInSection>
        <motion.h1 className="text-3xl font-bold">
          Contact
        </motion.h1>
        <motion.p className="text-sm sm:text-base leading-relaxed mb-6">
          Let's connect.
        </motion.p>
      </FadeInSection>

      <FadeInSection delay={0.2}>
        <div className="space-y-4">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Connect with me through any of these platforms.
          </p>
          
          <div className="grid grid-cols-2 gap-3">
            <motion.a
              href="mailto:phillipche1@gmail.com"
              className="flex items-center space-x-3 p-3 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-all group"
              variants={cardHoverVariants}
              initial="initial"
              whileHover="hover"
              whileTap={{ scale: 0.98 }}
            >
              <motion.div 
                className="flex-shrink-0"
                variants={iconHoverVariants}
              >
                <svg className="w-4 h-4 text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                  <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                </svg>
              </motion.div>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium text-gray-900 dark:text-white">Email</p>
                <p className="text-xs text-gray-500 dark:text-gray-400 truncate">phillipche1@gmail.com</p>
              </div>
            </motion.a>

            <motion.a
              href="https://www.instagram.com/philllip.che/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 p-3 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-all group"
              variants={cardHoverVariants}
              initial="initial"
              whileHover="hover"
              whileTap={{ scale: 0.98 }}
            >
              <motion.div 
                className="flex-shrink-0"
                variants={iconHoverVariants}
              >
                <svg className="w-4 h-4 text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </motion.div>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium text-gray-900 dark:text-white">Instagram</p>
                <p className="text-xs text-gray-500 dark:text-gray-400 truncate">@philllip.che</p>
              </div>
            </motion.a>

            <motion.a
              href="https://linkedin.com/in/phillipche"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 p-3 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-all group"
              variants={cardHoverVariants}
              initial="initial"
              whileHover="hover"
              whileTap={{ scale: 0.98 }}
            >
              <motion.div 
                className="flex-shrink-0"
                variants={iconHoverVariants}
              >
                <svg className="w-4 h-4 text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </motion.div>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium text-gray-900 dark:text-white">LinkedIn</p>
                <p className="text-xs text-gray-500 dark:text-gray-400 truncate">in/phillipche</p>
              </div>
            </motion.a>

            <motion.a
              href="https://discord.gg/mnp8Gf2mP2"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 p-3 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-all group"
              variants={cardHoverVariants}
              initial="initial"
              whileHover="hover"
              whileTap={{ scale: 0.98 }}
            >
              <motion.div 
                className="flex-shrink-0"
                variants={iconHoverVariants}
              >
                <svg className="w-4 h-4 text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.317 4.492c-1.53-.69-3.17-1.2-4.885-1.49a.075.075 0 0 0-.079.036c-.21.369-.444.85-.608 1.23a18.566 18.566 0 0 0-5.487 0 12.36 12.36 0 0 0-.617-1.23A.077.077 0 0 0 8.562 3c-1.714.29-3.354.8-4.885 1.491a.07.07 0 0 0-.032.027C.533 9.093-.32 13.555.099 17.961a.08.08 0 0 0 .031.055 20.03 20.03 0 0 0 5.993 2.98.078.078 0 0 0 .084-.026 13.83 13.83 0 0 0 1.226-1.963.074.074 0 0 0-.041-.104 13.175 13.175 0 0 1-1.872-.878.075.075 0 0 1-.008-.125c.126-.093.252-.19.372-.287a.075.075 0 0 1 .078-.01c3.927 1.764 8.18 1.764 12.061 0a.075.075 0 0 1 .079.009c.12.098.245.195.372.288a.075.075 0 0 1-.006.125c-.598.344-1.22.635-1.873.877a.075.075 0 0 0-.041.105c.36.687.772 1.341 1.225 1.962a.077.077 0 0 0 .084.028 19.963 19.963 0 0 0 6.002-2.981.076.076 0 0 0 .032-.054c.5-5.094-.838-9.52-3.549-13.442a.06.06 0 0 0-.031-.028zM8.02 15.278c-1.182 0-2.157-1.069-2.157-2.38 0-1.312.956-2.38 2.157-2.38 1.21 0 2.176 1.077 2.157 2.38 0 1.312-.956 2.38-2.157 2.38zm7.975 0c-1.183 0-2.157-1.069-2.157-2.38 0-1.312.955-2.38 2.157-2.38 1.21 0 2.176 1.077 2.157 2.38 0 1.312-.946 2.38-2.157 2.38z"/>
                </svg>
              </motion.div>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium text-gray-900 dark:text-white">Discord</p>
                <p className="text-xs text-gray-500 dark:text-gray-400 truncate">Join Server</p>
              </div>
            </motion.a>
          </div>
        </div>
      </FadeInSection>

      <FadeInSection delay={0.4}>
        <div className="mt-8 space-y-6">
          <div>
            <h2 className="text-lg font-medium mb-2">Book a Call</h2>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Schedule a call with me if you need a more in-depth conversation about anything you want!
            </p>
          </div>
          
          <AnimatePresence mode="wait">
            {!selectedEvent ? (
              <motion.div 
                key="event-selection"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="grid grid-cols-1 md:grid-cols-3 gap-4"
              >
                {eventTypes.map((event, index) => (
                  <motion.button
                    key={event.id}
                    onClick={() => setSelectedEvent(event.id)}
                    className="p-4 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-all text-left group h-full flex flex-col"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ 
                      opacity: 1, 
                      y: 0,
                      transition: {
                        duration: 0.4,
                        delay: index * 0.1,
                        ease: [0.4, 0, 0.2, 1]
                      }
                    }}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-medium">{event.title}</h3>
                      <span className="text-xs text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">
                        {event.duration}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 flex-grow">
                      {event.description}
                    </p>
                    <div className="flex items-center text-xs text-gray-500 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors mt-auto">
                      <span>Select this option</span>
                      <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </motion.button>
                ))}
              </motion.div>
            ) : (
              <motion.div 
                key="calendar-view"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="space-y-4"
              >
                <motion.button
                  onClick={() => setSelectedEvent(null)}
                  className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors flex items-center space-x-1"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ 
                    opacity: 1, 
                    x: 0,
                    transition: {
                      duration: 0.3,
                      delay: 0.2,
                      ease: [0.4, 0, 0.2, 1]
                    }
                  }}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  <span>Back to events</span>
                </motion.button>
                
                <motion.div 
                  variants={calendarVariants}
                  initial="hidden"
                  animate="visible"
                  className="cal-embed-container rounded-xl" 
                  style={{ height: "700px", overflow: "auto" }}
                >
                  <Cal
                    key={selectedEvent}
                    calLink={selectedEvent}
                    style={{
                      width: "100%", 
                      height: "100%", 
                      border: "none"
                    }}
                    config={{
                      "theme": "auto"
                    }}
                  />
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </FadeInSection>
    </div>
  );
};

export default Contact;