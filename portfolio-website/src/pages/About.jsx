import { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import PieChart from '../components/PieChart';

const About = () => {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownloadCV = () => {
    setIsDownloading(true);
    
    // Create link
    const link = document.createElement('a');
    link.href = '/isaac-hernandez-cv.pdf';
    link.download = 'Isaac-Hernandez-CV.pdf';
    document.body.appendChild(link);
    
    // Wait a moment for better UX
    setTimeout(() => {
      link.click();
      document.body.removeChild(link);
      
      // Reset downloading after a brief delay
      setTimeout(() => {
        setIsDownloading(false);
      }, 1000);
    }, 500);
  };

  return (
    <motion.div 
      className="relative py-16 px-8 bg-light-gray overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full opacity-30 -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gray-100 rounded-full opacity-40 translate-y-1/3 -translate-x-1/4"></div>
      <div className="absolute top-1/3 left-10 w-16 h-16 bg-blue-100 rounded-full opacity-20"></div>
      <div className="absolute bottom-1/4 right-10 w-24 h-24 bg-gray-200 rounded-full opacity-20"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* About Me Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.h1 
            className="text-4xl sm:text-5xl mb-4 inline-block relative" 
            style={{ fontFamily: 'DM Mono' }}
          >
            <span className="relative z-10">&lt;About Me/&gt;</span>
            <div className="absolute -bottom-2 left-0 right-0 h-3 bg-blue-100 opacity-40 -z-10 transform -rotate-1"></div>
          </motion.h1>

          <motion.p 
            className="text-xl sm:text-2xl mb-2 text-gray-700 max-w-3xl mx-auto" 
            style={{ fontFamily: 'Bellota Text' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            I'm a Computer Programming student focusing on Web Design, Coding, and Data Analysis.
          </motion.p>
        </motion.div>
        
        {/* About Content & Image */}
        <motion.div 
          className="flex flex-col md:flex-row items-start justify-between mt-8 bg-white rounded-2xl shadow-sm p-8 border border-gray-100"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {/* Text Content */}
          <motion.div 
            className="w-full md:w-3/5 pr-0 md:pr-12 mb-8 md:mb-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <motion.p 
              className="mb-4 text-lg leading-relaxed text-gray-700" 
              style={{ fontFamily: 'Bellota Text' }}
            >
              I'm a passionate Computer Programming student with a strong focus on front-end development and data analysis. I thrive on bringing both the technical and visual aspects of my designs to life, transforming ideas into functional and aesthetically compelling experiences.
            </motion.p>
            <motion.p 
              className="mb-6 text-lg leading-relaxed text-gray-700" 
              style={{ fontFamily: 'Bellota Text' }}
            >
              User experience is at the heart of my work—I believe that design should be both beautiful and purposeful, balancing simplicity with innovation. Whether it's crafting seamless interfaces or uncovering insights through data, I'm dedicated to creating impactful solutions that enhance usability and engagement.
            </motion.p>
            
            {/* Location with enhanced styling */}
            <motion.div 
              className="flex items-center mt-6 bg-gray-50 px-4 py-3 rounded-lg border-l-4 border-blue-200"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500 mr-3" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-700" style={{ fontFamily: 'Bellota Text' }}>Los Angeles, California</span>
            </motion.div>
            
            {/* Enhanced CV download button */}
            <motion.button 
              onClick={handleDownloadCV}
              className="mt-8 bg-gray-200 hover:bg-[#708090] hover:text-white text-gray-800 py-3 px-6 rounded-lg transition duration-300 flex items-center justify-center shadow-sm hover:shadow-md"
              style={{ fontFamily: 'DM Mono' }}
              disabled={isDownloading}
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              {isDownloading ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-gray-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Downloading...
                </>
              ) : (
                <>
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                  </svg>
                  Download CV
                </>
              )}
            </motion.button>
          </motion.div>
          
          {/* Image with enhanced frame */}
          <motion.div 
            className="w-full md:w-2/5"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="relative">
              {/* Background decorative elements */}
              <div className="absolute -inset-2 bg-gradient-to-r from-gray-100 to-blue-50 rounded-lg transform -rotate-3 shadow-lg"></div>
              
              {/* Image with subtle border */}
              <div className="relative rounded-lg overflow-hidden border-4 border-white shadow-md">
                <img 
                  src="/images/profile/about-design.png" 
                  alt="Design" 
                  className="w-full h-auto transition-transform duration-500 hover:scale-105"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://via.placeholder.com/500x400";
                  }}
                />
              </div>
              
              {/* Subtle decorative element */}
              <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-gray-200 rounded-full opacity-50 z-[-1]"></div>
            </div>
          </motion.div>
        </motion.div>
        
        {/* Skills Distribution Section */}
        <div className="mt-32 mb-20 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-50/40 to-gray-50/40 rounded-2xl -z-10 transform -rotate-1"></div>
          
          <h2 className="sr-only">Skills Distribution</h2>
          <div className="flex flex-col md:flex-row justify-between items-center py-8">
            {/* Coding Section with enhanced visuals */}
            <motion.div 
              className="w-full md:w-1/4 mb-8 md:mb-0 text-left"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl mb-6 inline-block relative" style={{ fontFamily: 'DM Mono' }}>
                <span>Part Coding.</span>
                <div className="absolute -bottom-1 left-0 w-1/2 h-1 bg-blue-200 rounded"></div>
              </h2>
              <ul className="space-y-3" style={{ fontFamily: 'Bellota Text' }}>
                {[
                  "Front-end development",
                  "HTML/CSS and JS",
                  "Databases",
                  "SQL, Tableau, and R",
                  "Sleepless nights",
                  "Lots of coffee"
                ].map((item, index) => (
                  <motion.li 
                    key={index}
                    className="flex items-center"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                    <span className="text-gray-700">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            
            {/* Pie Chart with enhanced frame */}
            <motion.div 
              className="w-full md:w-2/4 mb-8 md:mb-0 flex justify-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="w-80 h-80 relative bg-white p-4 rounded-full shadow-sm">
                <PieChart />
                <div className="absolute inset-0 rounded-full border-4 border-white pointer-events-none"></div>
              </div>
            </motion.div>
            
            {/* Designer Section */}
            <motion.div 
              className="w-full md:w-1/4 text-right"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl mb-6 inline-block relative" style={{ fontFamily: 'DM Mono' }}>
                <span>Part Designer.</span>
                <div className="absolute -bottom-1 right-0 w-1/2 h-1 bg-purple-200 rounded"></div>
              </h2>
              <ul className="space-y-3" style={{ fontFamily: 'Bellota Text' }}>
                {[
                  "UX design",
                  "UI design",
                  "Simplistic and bold",
                  "Interactions and animations",
                  "Monochromatic (mostly)",
                  "Artistic choices"
                ].map((item, index) => (
                  <motion.li 
                    key={index}
                    className="flex items-center justify-end"
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <span className="text-gray-700">{item}</span>
                    <div className="w-2 h-2 bg-purple-400 rounded-full ml-3"></div>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
        
        {/* Random Facts & Journey */}
        <motion.div 
          className="mt-24 flex flex-col md:flex-row justify-between gap-10"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Random Facts with card styling */}
          <motion.div 
            className="w-full md:w-1/3 mb-12 md:mb-0 bg-white rounded-xl shadow-sm p-6 border border-gray-100"
          >
            <motion.h2 
              className="text-3xl mb-6 relative inline-block" 
              style={{ fontFamily: 'DM Mono' }}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              viewport={{ once: true }}
            >
              <span>Random facts.</span>
              <div className="absolute -bottom-1 left-0 w-full h-1 bg-yellow-200 rounded"></div>
            </motion.h2>
            <motion.div 
              className="flex items-center mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                <img 
                  src="/images/icons/design.png" 
                  alt="Idea" 
                  className="w-12 h-12" 
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://via.placeholder.com/24?text=💡";
                  }}
                />
              </div>
            </motion.div>
            <ul className="space-y-3" style={{ fontFamily: 'Bellota Text' }}>
              {[
                "I love photography",
                "Editing",
                "I love fashion and perfumes",
                "I love to cook (and eat)",
                "I'm into interior design",
                "Music is a hobby of mine",
                "I love sport cars",
                "I drink way too much coffee"
              ].map((fact, index) => (
                <motion.li 
                  key={index}
                  className="flex items-center bg-yellow-50 px-4 py-2 rounded-lg hover:bg-yellow-100 transition-colors duration-300"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 4 }}
                >
                  <span className="text-gray-700">{fact}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          
          {/* Journey with card styling */}
          <motion.div 
            className="w-full md:w-3/5 bg-white rounded-xl shadow-sm p-6 border border-gray-100"
          >
            <motion.h2 
              className="text-3xl mb-6 relative inline-block" 
              style={{ fontFamily: 'DM Mono' }}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              viewport={{ once: true }}
            >
              <span>The Journey.</span>
              <div className="absolute -bottom-1 left-0 w-full h-1 bg-green-200 rounded"></div>
            </motion.h2>
            <motion.div
              className="relative pl-6 border-l-2 border-green-100 space-y-6"
            >
              <motion.div 
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="absolute -left-[28px] top-0 w-4 h-4 bg-green-400 rounded-full border-2 border-white"></div>
                <p className="text-lg leading-relaxed text-gray-700" style={{ fontFamily: 'Bellota Text' }}>
                  I began my journey in programming in December 2024, starting with Harvard University's CS50x course to build a strong foundation in computer science. Since then, I've been continuously learning and growing—spending countless sleepless nights troubleshooting and refining my skills.
                </p>
              </motion.div>
              
              <motion.div 
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="absolute -left-[28px] top-0 w-4 h-4 bg-green-400 rounded-full border-2 border-white"></div>
                <p className="text-lg leading-relaxed text-gray-700" style={{ fontFamily: 'Bellota Text' }}>
                  The challenges along the way have only fueled my passion, and I couldn't be more excited for the future.
                </p>
              </motion.div>
              
              <motion.div 
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="absolute -left-[28px] top-0 w-4 h-4 bg-green-400 rounded-full border-2 border-white"></div>
                <p className="text-lg leading-relaxed text-gray-700" style={{ fontFamily: 'Bellota Text' }}>
                  As I design and develop this website, I'm also expanding my knowledge through Google's Data Analytics Program.
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;