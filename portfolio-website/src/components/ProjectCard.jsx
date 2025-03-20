import { Link } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const ProjectCard = ({ image, title, description, link, comingSoon, tags = [] }) => {
  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.5 }
    },
    hover: {
      y: -10,
      transition: { duration: 0.3, ease: 'easeOut' }
    }
  };

  return (
    <motion.div
      className="h-full"
      variants={cardVariants}
      whileHover="hover"
    >
      {comingSoon ? (
        // Coming Soon Card
        <div className="bg-white rounded-xl h-full shadow-sm border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-md group">
          <div className="h-48 bg-gray-100 flex items-center justify-center overflow-hidden">
            <motion.div
              animate={{ rotate: [0, 2, 0, -2, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              className="text-center p-4"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-gray-200 rounded-full flex items-center justify-center">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-8 w-8 text-gray-500 group-hover:text-gray-700 transition-colors duration-300" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6" 
                  />
                </svg>
              </div>
              <span 
                className="text-gray-400 font-medium text-sm tracking-wider uppercase"
                style={{ fontFamily: 'DM Mono' }}
              >
                Coming Soon
              </span>
            </motion.div>
          </div>
          
          <div className="p-6">
            <h3 
              className="text-xl font-medium mb-2 text-gray-800"
              style={{ fontFamily: 'DM Mono' }}
            >
              {title || "New Project"}
            </h3>
            
            {description && (
              <p 
                className="text-gray-600 mb-4 line-clamp-2"
                style={{ fontFamily: 'Bellota Text' }}
              >
                {description}
              </p>
            )}
            
            {/* Tags */}
            {tags && tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-auto">
                {tags.map((tag, index) => (
                  <span 
                    key={index}
                    className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      ) : (
        // Regular Project Card 
        <Link 
          to={link || "#"} 
          className="block h-full"
          // eslint-disable-next-line no-unused-vars
          onClick={(e) => {
            // Logging for debugging
            console.log("Navigating to:", link);
          }}
        >
          <div className="bg-white rounded-xl h-full shadow-sm border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-md">
            <div className="h-48 bg-gray-100 overflow-hidden relative">
              {image ? (
                <img 
                  src={image} 
                  alt={title} 
                  className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-105"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://via.placeholder.com/400x300?text=Project";
                  }}
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-gray-200">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-12 w-12 text-gray-400" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" 
                    />
                  </svg>
                </div>
              )}
              
              {/* Overlay on hover with view button */}
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="px-4 py-2 bg-white text-gray-800 rounded-md text-sm font-medium">
                  View Project
                </div>
              </div>
            </div>
            
            <div className="p-6">
              <h3 
                className="text-xl font-medium mb-2 text-gray-800"
                style={{ fontFamily: 'DM Mono' }}
              >
                {title || "Untitled Project"}
              </h3>
              
              {description && (
                <p 
                  className="text-gray-600 mb-4 line-clamp-2"
                  style={{ fontFamily: 'Bellota Text' }}
                >
                  {description}
                </p>
              )}
              
              {/* Tags */}
              {tags && tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-auto">
                  {tags.map((tag, index) => (
                    <span 
                      key={index}
                      className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </Link>
      )}
    </motion.div>
  );
};

export default ProjectCard;