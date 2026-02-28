import { motion } from 'framer-motion';
import { useState } from 'react';
import { usePageTitle } from '../hooks/usePageTitle';
import { FadeInSection } from '../utils/FadeInSection';
import { gearCategories } from '../data/gear';

const Gear = () => {
  usePageTitle('Gear');
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  return (
    <div className="pb-20">
      <FadeInSection>
        <motion.h1 className="text-3xl font-bold">
          Gear
        </motion.h1>
        <motion.p className="text-sm sm:text-base leading-relaxed mb-6">
          What I use.
        </motion.p>
      </FadeInSection>

      <div className="space-y-8">
        {gearCategories.map((category, index) => (
          <FadeInSection key={category.category} delay={index * 0.2}>
            <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
              <h2 className="text-lg font-medium">{category.category}</h2>
              <a
                href={category.listUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
              >
                View full list →
              </a>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {category.items.map((item, itemIndex) => (
                <motion.a
                  key={item.name}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card group cursor-pointer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ 
                    opacity: hoveredItem === null || hoveredItem === item.name ? 1 : 0.5,
                    scale: hoveredItem === item.name ? 1.02 : 1,
                  }}
                  transition={{
                    duration: 0.3,
                    delay: index * 0.1 + itemIndex * 0.05
                  }}
                  onHoverStart={() => setHoveredItem(item.name)}
                  onHoverEnd={() => setHoveredItem(null)}
                  style={{
                    transformOrigin: 'center left'
                  }}
                >
                  <div 
                    className="flex items-center p-3 rounded-xl transition-colors" 
                    style={{ 
                      transition: '0.2s ease-in-out'
                    }}
                  >
                    {/* Image - object-contain so full product fits in box */}
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-lg overflow-hidden flex-shrink-0 bg-white flex items-center justify-center">
                      <motion.img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-contain"
                        draggable={false}
                        animate={{
                          scale: hoveredItem === item.name ? 1.1 : 1
                        }}
                        transition={{
                          duration: 0.3
                        }}
                      />
                    </div>

                    {/* Content */}
                    <div className="flex-grow px-3 sm:px-4">
                      <h3 className="font-medium text-sm sm:text-base">{item.name}</h3>
                    </div>

                    {/* Link Icon */}
                    <motion.div 
                      className="text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white transition-colors"
                      animate={{
                        x: hoveredItem === item.name ? 2 : 0
                      }}
                      transition={{
                        duration: 0.2
                      }}
                    >
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className="h-4 w-4 sm:h-5 sm:w-5"
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2} 
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" 
                        />
                      </svg>
                    </motion.div>
                  </div>
                </motion.a>
              ))}
            </div>
          </FadeInSection>
        ))}
      </div>
    </div>
  );
};

export default Gear; 