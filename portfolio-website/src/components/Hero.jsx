// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className="relative py-20 px-8 bg-light-gray overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full opacity-40 -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gray-100 rounded-full opacity-50 translate-y-1/3 -translate-x-1/4" />
      <div className="absolute top-1/4 left-1/4 w-12 h-12 bg-blue-100 rounded-full opacity-30" />
      <div className="absolute bottom-1/4 right-1/4 w-20 h-20 bg-gray-200 rounded-full opacity-30" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Main heading */}
        <motion.div
          className="mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 
            className="text-5xl sm:text-6xl text-center mb-2 text-gray-800 font-bold" 
            style={{ fontFamily: 'DM Mono' }}
          >
            Isaac Hernandez
          </h1>
          
          <div className="flex justify-center items-center">
            <div className="h-px w-12 bg-gray-400 mr-4"></div>
            <motion.p 
              className="text-xl sm:text-2xl text-center mb-2 text-gray-700" 
              style={{ fontFamily: 'Bellota Text' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Bridging Creativity & Coding
            </motion.p>
            <div className="h-px w-12 bg-gray-400 ml-4"></div>
          </div>
        </motion.div>
        
        {/* Three column main part */}
        <div className="flex flex-col md:flex-row items-center justify-between mt-12">
          {/* Coder section */}
          <motion.div 
            className="w-full md:w-1/3 px-4 mb-8 md:mb-0 text-right"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ scale: 1.02 }}
          >
            <h2 className="text-5xl mb-4 text-gray-800 relative inline-block" style={{ fontFamily: 'DM Mono' }}>
              Coder
              <span className="text-blue-600">;</span>
              <div className="absolute -bottom-1 left-0 w-full h-1 bg-blue-200 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            </h2>
            <p className="text-m text-gray-700 leading-relaxed" style={{ fontFamily: 'Bellota Text' }}>
              Front end developer and Data Analyst<br />
              aiming to write elegant, and efficient code.
            </p>
            
            {/* Skill tags */}
            <div className="mt-4 flex flex-wrap justify-end gap-2">
              <span className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded-full">React</span>
              <span className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded-full">JavaScript</span>
              <span className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded-full">Python</span>
            </div>
          </motion.div>
          
          {/* Profile image */}
          <motion.div 
            className="w-full md:w-1/3 px-4 mb-8 md:mb-0 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="relative">
              {/* Background shape for visual interest */}
              <div className="absolute -inset-0.5 bg-gray-200 rounded-full transform -rotate-6 shadow-lg"></div>
              
              {/* Profile image with subtle border */}
              <div className="relative rounded-full overflow-hidden border-4 border-white shadow-md">
                <img 
                  src="/images/profile/profile-photo.png" 
                  alt="Isaac Hernandez" 
                  style={{ width: '880px', height: 'auto', maxWidth: '100%' }}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://via.placeholder.com/400x500?text=Profile";
                  }}
                  className="transform transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>
          </motion.div>
          
          {/* Designer section */}
          <motion.div 
            className="w-full md:w-1/3 px-4 text-left"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            whileHover={{ scale: 1.02 }}
          >
            <h2 className="text-5xl mb-4 text-gray-800 relative inline-block" style={{ fontFamily: 'DM Mono' }}>
              Designer
              <div className="absolute -bottom-1 left-0 w-full h-1 bg-purple-200 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            </h2>
            <p className="text-m text-gray-700 leading-relaxed" style={{ fontFamily: 'Bellota Text' }}>
              Student designer, making simple<br />
              yet artistic designs come to life.
            </p>
            
            {/* Added skill tags */}
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="text-xs bg-purple-50 text-purple-700 px-2 py-1 rounded-full">Figma</span>
              <span className="text-xs bg-purple-50 text-purple-700 px-2 py-1 rounded-full">UI/UX</span>
              <span className="text-xs bg-purple-50 text-purple-700 px-2 py-1 rounded-full">Tailwind</span>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Latest work section */}
      <motion.div 
        className="mt-20 pt-10 relative z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1 }}
      >
        <div className="max-w-xl mx-auto text-center">
          <div className="flex items-center justify-center mb-8">
            <div className="h-px w-12 bg-gray-300"></div>
            <h3 className="mx-4 uppercase text-sm tracking-widest text-gray-600 font-medium" style={{ fontFamily: 'DM Mono' }}>
              Some of my latest work
            </h3>
            <div className="h-px w-12 bg-gray-300"></div>
          </div>
          
          {/* Added subtle arrow indicator to guide users down */}
          <motion.div 
            className="flex justify-center mt-2"
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="text-gray-400"
            >
              <path d="M12 5v14M5 12l7 7 7-7"/>
            </svg>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;