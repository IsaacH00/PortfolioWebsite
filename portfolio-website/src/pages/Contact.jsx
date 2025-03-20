import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

// Animation 
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4 }
  }
};

const Contact = () => {
  // Social media profiles
  const socialProfiles = {
    twitter: "https://twitter.com/IsHernan10",
    github: "https://github.com/IsaacH00",
    linkedin: "https://linkedin.com/in/isaac-cruz-h03/",
    figma: "https://figma.com/@isaach03"
  };

  return (
    <motion.div 
      className="py-12 px-8 bg-light-gray"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Contact Header */}
        <motion.h1 
          className="text-4xl text-center mb-4" 
          style={{ fontFamily: 'DM Mono' }}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          &lt;Contact/&gt;
        </motion.h1>
        
        <motion.p 
          className="text-xl text-center mb-10" 
          style={{ fontFamily: 'Bellota Text' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Get in touch with me via social media or email.
        </motion.p>
        
        <motion.div 
          className="max-w-2xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Social Media Links */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={containerVariants}
          >
            <SocialLink 
              href={socialProfiles.twitter}
              name="Twitter"
              description="Follow me for updates and connect"
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-700">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              }
            />
            
            <SocialLink 
              href={socialProfiles.linkedin}
              name="LinkedIn"
              description="Connect professionally"
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-700">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              }
            />
            
            <SocialLink 
              href={socialProfiles.github}
              name="GitHub"
              description="Check out my code"
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-700">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                </svg>
              }
            />
            
            <SocialLink 
              href={socialProfiles.figma}
              name="Figma"
              description="See my design work"
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-700">
                  <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z" />
                  <path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z" />
                  <path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z" />
                  <path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z" />
                  <path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z" />
                </svg>
              }
            />
          </motion.div>
          
          {/* Direct Contact */}
          <motion.div 
            className="mt-12 text-center"
            variants={itemVariants}
          >
            <motion.div 
              className="p-6 bg-white rounded-lg shadow-sm"
              whileHover={{ 
                y: -5, 
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                borderColor: "#708090",
                borderWidth: "2px"
              }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-xl mb-4" style={{ fontFamily: 'DM Mono' }}>Prefer Email?</h2>
              <p className="mb-4" style={{ fontFamily: 'Bellota Text' }}>
                Feel free to reach out directly to my inbox:
              </p>
              <motion.a 
                href="mailto:isaachcruz03@gmail.com" 
                className="text-lg text-[#708090] font-medium relative inline-block"
                style={{ fontFamily: 'Bellota Text' }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                isaachcruz03@gmail.com
                <motion.span 
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-[#708090]"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

// Social Link Component with animation
const SocialLink = ({ href, name, description, icon }) => {
  return (
    <motion.a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="flex items-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
      variants={itemVariants}
      whileHover={{ 
        y: -5, 
        boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
        borderColor: "#F0F8FF", // AliceBlue
        borderWidth: "2px"
      }}
      whileTap={{ scale: 0.98 }}
    >
      {icon}
      <div className="ml-4">
        <h3 className="font-semibold" style={{ fontFamily: 'DM Mono' }}>{name}</h3>
        <p className="text-gray-600 text-sm" style={{ fontFamily: 'Bellota Text' }}>{description}</p>
      </div>
    </motion.a>
  );
};

export default Contact;