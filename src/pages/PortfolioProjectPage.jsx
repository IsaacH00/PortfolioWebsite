/* eslint-disable no-unused-vars */
import { useState } from 'react';
 
import { motion, AnimatePresence } from 'framer-motion';

const PortfolioProjectPage = () => {
  const [activeTab, setActiveTab] = useState('overview');
  
  // Tools used in the project
  const tools = [
    { 
      name: "React", 
      description: "Frontend JavaScript library for building user interfaces",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8 text-blue-500">
          <path d="M12 14.25C13.2426 14.25 14.25 13.2426 14.25 12C14.25 10.7574 13.2426 9.75 12 9.75C10.7574 9.75 9.75 10.7574 9.75 12C9.75 13.2426 10.7574 14.25 12 14.25Z" fill="currentColor" />
          <path fillRule="evenodd" clipRule="evenodd" d="M12 3.75C7.5 3.75 3.75 7.5 3.75 12C3.75 16.5 7.5 20.25 12 20.25C16.5 20.25 20.25 16.5 20.25 12C20.25 7.5 16.5 3.75 12 3.75ZM6.25 12C6.25 14.8995 8.1005 17.379 10.75 18.4773C10.7516 18.4765 10.7532 18.4758 10.7549 18.475C8.6079 15.7734 8.6079 8.22656 10.7549 5.52502C8.1005 6.62304 6.25 9.10052 6.25 12ZM13.25 18.4773C15.8995 17.379 17.75 14.8995 17.75 12C17.75 9.10052 15.8995 6.62304 13.2451 5.52502C15.3921 8.22656 15.3921 15.7734 13.2451 18.475L13.25 18.4773Z" fill="currentColor" />
        </svg>
      )
    },
    { 
      name: "Tailwind CSS", 
      description: "Utility-first CSS framework for rapid UI development",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8 text-cyan-500">
          <path fillRule="evenodd" clipRule="evenodd" d="M12 6.036c-2.667 0-4.333 1.325-5 3.976 1-1.325 2.167-1.822 3.5-1.491.761.189 1.305.738 1.906 1.345C13.387 10.855 14.522 12 17 12c2.667 0 4.333-1.325 5-3.976-1 1.325-2.167 1.822-3.5 1.491-.761-.189-1.305-.738-1.906-1.345C15.613 7.181 14.478 6.036 12 6.036zM7 12c-2.667 0-4.333 1.325-5 3.976 1-1.325 2.167-1.822 3.5-1.491.761.189 1.305.738 1.906 1.345C8.387 16.819 9.522 17.964 12 17.964c2.667 0 4.333-1.325 5-3.976-1 1.325-2.167 1.822-3.5 1.491-.761-.189-1.305-.738-1.906-1.345C10.613 13.145 9.478 12 7 12z" fill="currentColor" />
        </svg>
      )
    },
    { 
      name: "Framer Motion", 
      description: "Animation library for React",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8 text-purple-500">
          <path d="M12 22.5C17.5228 22.5 22 18.0228 22 12.5C22 6.97715 17.5228 2.5 12 2.5C6.47715 2.5 2 6.97715 2 12.5C2 18.0228 6.47715 22.5 12 22.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M7 14.5L12 9.5L17 14.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    { 
      name: "Vite", 
      description: "Next generation frontend tooling for faster development",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8 text-yellow-500">
          <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="currentColor" />
          <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    { 
      name: "Figma", 
      description: "Design and prototyping tool",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8 text-pink-500">
          <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z" fill="currentColor" />
          <path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z" fill="currentColor" />
          <path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z" fill="currentColor" />
          <path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z" fill="currentColor" />
          <path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z" fill="currentColor" />
        </svg>
      )
    },
  ];

  // Resources used
  const resources = [
    { 
      name: "Google Fonts", 
      description: "For DM Mono and Bellota Text fonts",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8 text-red-500">
          <path d="M20.9994 12C20.9994 16.9706 16.9699 21 11.9994 21C7.02876 21 2.99939 16.9706 2.99939 12C2.99939 7.02944 7.02876 3 11.9994 3C16.9699 3 20.9994 7.02944 20.9994 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M8.99939 12H14.9994" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12.9994 9L15.9994 12L12.9994 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    { 
      name: "React Router", 
      description: "For page navigation and routing",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8 text-blue-600">
          <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    { 
      name: "GitHub", 
      description: "Version control and code repository",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8 text-gray-700">
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
  ];

  // Project metrics
  const metrics = [
    { value: "90%", label: "Lighthouse Score", color: "bg-green-100 text-green-800" },
    { value: "1.2s", label: "Load Time", color: "bg-blue-100 text-blue-800" },
    { value: "25+", label: "UI Components", color: "bg-purple-100 text-purple-800" },
    { value: "100%", label: "Responsive", color: "bg-yellow-100 text-yellow-800" }
  ];
  
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };
  
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const scaleUp = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.5 }
    }
  };

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'design', label: 'Design' },
    { id: 'development', label: 'Development' },
    { id: 'tools', label: 'Tools & Resources' },
    { id: 'lessons', label: 'Lessons' }
  ];

  return (
    <motion.div 
      className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-gray-100"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Hero Section with Decorative Elements */}
        <div className="relative mb-16">
          {/* Decorative circles */}
          <div className="absolute top-0 left-0 w-32 h-32 bg-blue-500/5 rounded-full -translate-x-1/2 -translate-y-1/3"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-500/5 rounded-full translate-x-1/3 translate-y-1/4"></div>
          
          <div className="relative z-10">
            {/* Project Badge */}
            <motion.div 
              className="mx-auto w-fit mb-8"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block px-4 py-1 rounded-full bg-blue-50 text-blue-600 text-sm font-medium" style={{ fontFamily: 'DM Mono' }}>
                Front-End Development
              </span>
            </motion.div>
            
            {/* Project Header */}
            <motion.h1 
              className="text-4xl sm:text-5xl text-center font-bold text-gray-800 mb-4" 
              style={{ fontFamily: 'DM Mono' }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Portfolio Website Project
            </motion.h1>
            
            {/* Project Subheading */}
            <motion.p 
              className="text-xl sm:text-2xl text-center text-gray-600 mb-10 max-w-3xl mx-auto" 
              style={{ fontFamily: 'Bellota Text' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              A deep dive into the design and development of my personal portfolio
            </motion.p>
            
            {/* Project Metrics */}
            <motion.div 
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto"
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              {metrics.map((metric, index) => (
                <motion.div 
                  key={index}
                  variants={fadeInUp}
                  className="bg-white rounded-xl shadow-sm p-4 text-center border border-gray-100"
                >
                  <span className={`inline-block px-2 py-1 rounded-md text-xs font-medium mb-2 ${metric.color}`}>
                    {metric.label}
                  </span>
                  <p className="text-2xl font-bold text-gray-800" style={{ fontFamily: 'DM Mono' }}>
                    {metric.value}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
        
        {/* Content Navigation Tabs */}
        <div className="mb-10">
          <nav className="flex flex-wrap justify-center mb-8 gap-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                  activeTab === tab.id 
                    ? 'bg-blue-600 text-white shadow-md' 
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
                style={{ fontFamily: 'DM Mono' }}
              >
                {tab.label}
              </button>
            ))}
          </nav>
          
          {/* Main content area with tab content */}
          <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                {activeTab === 'overview' && (
                  <div className="space-y-8">
                    <h2 className="text-3xl font-bold text-gray-800 mb-6" style={{ fontFamily: 'DM Mono' }}>
                      Project Overview
                    </h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                      <div className="col-span-2">
                        <p className="text-lg leading-relaxed text-gray-700 mb-4" style={{ fontFamily: 'Bellota Text' }}>
                          This portfolio website was designed to showcase my skills as a front-end developer and designer.The design emphasizes simplicity, modern aesthetics, and engaging user interactions. The reason for this website started as a final project for CS50x from Harvard University, but it has since evolved into a personal project that I continue to enhance and maintain.
                        </p>
                        <p className="text-lg leading-relaxed text-gray-700" style={{ fontFamily: 'Bellota Text' }}>
                          I started by creating wireframes and mockups in Figma for the whole of the first week, focusing on a clean layout that would highlight my work. After finalizing the design, I first implemented it using HTML, CSS, and JS. But due to many issues with structuring and layout I was facing, I switched to using React and Tailwind CSS, with Framer Motion for animations. Which took me about 4 weeks to learn and implement.
                        </p>
                      </div>
                      
                      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 flex flex-col justify-center">
                        <div className="text-center">
                          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                            </svg>
                          </div>
                          <h3 className="text-xl font-semibold mb-2 text-gray-800" style={{ fontFamily: 'DM Mono' }}>Project Goal</h3>
                          <p className="text-gray-600" style={{ fontFamily: 'Bellota Text' }}>
                            Create a modern, accessible, and performant portfolio that effectively showcases my skills and projects
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                      <h3 className="text-xl font-semibold mb-4 text-gray-800" style={{ fontFamily: 'DM Mono' }}>Key Features</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        <div className="flex items-start space-x-3">
                          <div className="mt-1 bg-green-100 p-1 rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-800" style={{ fontFamily: 'DM Mono' }}>Clean Design</h4>
                            <p className="text-sm text-gray-600" style={{ fontFamily: 'Bellota Text' }}>Minimalist approach with strategic whitespace</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start space-x-3">
                          <div className="mt-1 bg-green-100 p-1 rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-800" style={{ fontFamily: 'DM Mono' }}>Responsive</h4>
                            <p className="text-sm text-gray-600" style={{ fontFamily: 'Bellota Text' }}>Adapts seamlessly to all device sizes</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start space-x-3">
                          <div className="mt-1 bg-green-100 p-1 rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-800" style={{ fontFamily: 'DM Mono' }}>Animated</h4>
                            <p className="text-sm text-gray-600" style={{ fontFamily: 'Bellota Text' }}>Subtle animations enhance experience</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start space-x-3">
                          <div className="mt-1 bg-green-100 p-1 rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-800" style={{ fontFamily: 'DM Mono' }}>Accessible</h4>
                            <p className="text-sm text-gray-600" style={{ fontFamily: 'Bellota Text' }}>Designed with accessibility in mind, following known guidelines</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start space-x-3">
                          <div className="mt-1 bg-green-100 p-1 rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-800" style={{ fontFamily: 'DM Mono' }}>Fast</h4>
                            <p className="text-sm text-gray-600" style={{ fontFamily: 'Bellota Text' }}>Performance optimized for quick loading</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start space-x-3">
                          <div className="mt-1 bg-green-100 p-1 rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-800" style={{ fontFamily: 'DM Mono' }}>Component-based</h4>
                            <p className="text-sm text-gray-600" style={{ fontFamily: 'Bellota Text' }}>Built with a structured and flexible design, making it easy to update and maintain</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                
                {activeTab === 'design' && (
                  <div className="space-y-8">
                    <h2 className="text-3xl font-bold text-gray-800 mb-6" style={{ fontFamily: 'DM Mono' }}>
                      Design Process
                    </h2>
                    
                    <p className="text-lg leading-relaxed text-gray-700" style={{ fontFamily: 'Bellota Text' }}>
                      The design process began with a clear vision even in the first weeks of CS50x:  create a portfolio that reflects both my technical skills and design ideas. I wanted a clean, minimalist, monochromatic design that would let my work speak for itself, while still incorporating subtle animations and interactions to enhance user experience.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
                      <motion.div 
                        className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 hover:shadow-md transition-shadow"
                        whileHover={{ y: -5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                          </svg>
                        </div>
                        <h3 className="text-lg font-medium mb-2 text-gray-800" style={{ fontFamily: 'DM Mono' }}>Color Scheme</h3>
                        <p className="text-gray-600" style={{ fontFamily: 'Bellota Text' }}>Monochromatic palette with strategic accent colors for visual hierarchy</p>
                      </motion.div>
                      
                      <motion.div 
                        className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 hover:shadow-md transition-shadow"
                        whileHover={{ y: -5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                        </div>
                        <h3 className="text-lg font-medium mb-2 text-gray-800" style={{ fontFamily: 'DM Mono' }}>Typography</h3>
                        <p className="text-gray-600" style={{ fontFamily: 'Bellota Text' }}>DM Mono for headings and Bellota Text for body content creating a technical yet approachable feel</p>
                      </motion.div>
                      
                      <motion.div 
                        className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 hover:shadow-md transition-shadow"
                        whileHover={{ y: -5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                          </svg>
                        </div>
                        <h3 className="text-lg font-medium mb-2 text-gray-800" style={{ fontFamily: 'DM Mono' }}>Layout</h3>
                        <p className="text-gray-600" style={{ fontFamily: 'Bellota Text' }}>Strategic use of white space to create visual hierarchy with a grid-based responsive layout</p>
                      </motion.div>
                    </div>
                    
                    <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-6 border border-blue-200">
                      <h3 className="text-xl font-medium mb-4 text-gray-800 flex items-center" style={{ fontFamily: 'DM Mono' }}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                        Design Philosophy
                      </h3>
                      <p className="text-gray-700" style={{ fontFamily: 'Bellota Text' }}>
                        The final design balances simplicity with personality, and personal taste, creating a modern portfolio that effectively communicates my skills and approach to design and development. Every element has a purpose, with careful attention to accessibility, user experience, and performance, while also staying simple, and true to my personal style.
                      </p>
                    </div>
                  </div>
                )}
                
                {activeTab === 'development' && (
                  <div className="space-y-8">
                    <h2 className="text-3xl font-bold text-gray-800 mb-6" style={{ fontFamily: 'DM Mono' }}>
                      Development Process
                    </h2>
                    
                    <p className="text-lg leading-relaxed text-gray-700" style={{ fontFamily: 'Bellota Text' }}>
                    Translating the design into code came with both challenges and opportunities. I initially followed CS50’s approach, using HTML, CSS, and JavaScript as the foundation. However, as the process became more complex, I had to adapt and make adjustments along the way. I chose React for its component-based architecture, which allowed me to build reusable UI elements. Tailwind CSS provided the utility classes needed for rapid styling without sacrificing customization. It took many weeks of sleepless nights of learning and adapting to new tools and libraries, but in the end, it was all worth it.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                      <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                        <div className="flex items-start">
                          <div className="flex-shrink-0 mr-4">
                            <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                              </svg>
                            </div>
                          </div>
                          <div>
                            <h3 className="text-lg font-medium mb-2 text-gray-800" style={{ fontFamily: 'DM Mono' }}>Component Architecture</h3>
                            <p className="text-gray-600" style={{ fontFamily: 'Bellota Text' }}>
                            I created a library of reusable components by grouping them into basic elements like buttons and inputs, combined elements like cards and navigation items, and larger sections like forms and page sections.
                            </p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                        <div className="flex items-start">
                          <div className="flex-shrink-0 mr-4">
                            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                              </svg>
                            </div>
                          </div>
                          <div>
                            <h3 className="text-lg font-medium mb-2 text-gray-800" style={{ fontFamily: 'DM Mono' }}>Responsive Design</h3>
                            <p className="text-gray-600" style={{ fontFamily: 'Bellota Text' }}>
                              Rather than creating separate designs for mobile and desktop, I used a mobile-first approach with Tailwind's responsive utility classes to ensure the site looks great on all devices.
                            </p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                        <div className="flex items-start">
                          <div className="flex-shrink-0 mr-4">
                            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                              </svg>
                            </div>
                          </div>
                          <div>
                            <h3 className="text-lg font-medium mb-2 text-gray-800" style={{ fontFamily: 'DM Mono' }}>Animations</h3>
                            <p className="text-gray-600" style={{ fontFamily: 'Bellota Text' }}>
                              Framer Motion allowed me to create fluid, physics-based animations that respond to user interactions. I kept animations subtle to enhance rather than distract from the content.
                            </p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                        <div className="flex items-start">
                          <div className="flex-shrink-0 mr-4">
                            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                              </svg>
                            </div>
                          </div>
                          <div>
                            <h3 className="text-lg font-medium mb-2 text-gray-800" style={{ fontFamily: 'DM Mono' }}>Performance</h3>
                            <p className="text-gray-600" style={{ fontFamily: 'Bellota Text' }}>
                            I optimized the website by loading only the necessary code and images when needed to ensure fast loading times and smooth interactions even on slower connections.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
                      <h3 className="text-xl font-medium mb-4 text-gray-800" style={{ fontFamily: 'DM Mono' }}>
                        Development Timeline
                      </h3>
                      <div className="space-y-4">
                        <div className="flex">
                          <div className="flex-shrink-0 w-24 font-medium text-blue-800" style={{ fontFamily: 'DM Mono' }}>Week 1</div>
                          <div className="ml-4 text-gray-700" style={{ fontFamily: 'Bellota Text' }}>Project setup, component architecture planning, and design on Figma with prior ideas already stuck in my mind from previous weeks during CS5O</div>
                        </div>
                        <div className="flex">
                          <div className="flex-shrink-0 w-24 font-medium text-blue-800" style={{ fontFamily: 'DM Mono' }}>Week 2</div>
                          <div className="ml-4 text-gray-700" style={{ fontFamily: 'Bellota Text' }}>Core components development and responsive layout implementation with HTML, CSS, and JavaScript</div>
                        </div>
                        <div className="flex">
                          <div className="flex-shrink-0 w-24 font-medium text-blue-800" style={{ fontFamily: 'DM Mono' }}>Week 3</div>
                          <div className="ml-4 text-gray-700" style={{ fontFamily: 'Bellota Text' }}>Switch to React, TailwindCSS and other libraries due to project scale and complexity increasing</div>
                        </div>
                        <div className="flex">
                          <div className="flex-shrink-0 w-24 font-medium text-blue-800" style={{ fontFamily: 'DM Mono' }}>Week 4</div>
                          <div className="ml-4 text-gray-700" style={{ fontFamily: 'Bellota Text' }}>Learning new languages and integrating content took many sleepless nights, trial and error, and a deep dive into understanding concepts and tools.</div>
                        </div>
                        <div className="flex">
                          <div className="flex-shrink-0 w-24 font-medium text-blue-800" style={{ fontFamily: 'DM Mono' }}>Week 5</div>
                          <div className="ml-4 text-gray-700" style={{ fontFamily: 'Bellota Text' }}>Implementing interactive features, refining UI components, and debugging issues to ensure smooth functionality across different devices and browsers</div>
                        </div>
                        <div className="flex">
                          <div className="flex-shrink-0 w-24 font-medium text-blue-800" style={{ fontFamily: 'DM Mono' }}>Week 6</div>
                          <div className="ml-4 text-gray-700" style={{ fontFamily: 'Bellota Text' }}>Performance optimization, browser testing, lots of debugging with several changes, and deployment</div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                
                {activeTab === 'tools' && (
                  <div className="space-y-8">
                    <h2 className="text-3xl font-bold text-gray-800 mb-6" style={{ fontFamily: 'DM Mono' }}>
                      Tools & Resources
                    </h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {/* Tools */}
                      <div>
                        <h3 className="text-xl mb-6 font-medium text-gray-800" style={{ fontFamily: 'DM Mono' }}>Development Tools</h3>
                        <div className="space-y-4">
                          {tools.map((tool, index) => (
                            <motion.div 
                              key={index}
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.3, delay: index * 0.1 }}
                              viewport={{ once: true }}
                              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 border border-gray-100 hover:border-blue-200"
                            >
                              <div className="flex items-start">
                                <div className="flex-shrink-0 mr-4">
                                  {tool.icon}
                                </div>
                                <div>
                                  <h4 className="font-medium text-gray-800 mb-1" style={{ fontFamily: 'DM Mono' }}>{tool.name}</h4>
                                  <p className="text-gray-600" style={{ fontFamily: 'Bellota Text' }}>{tool.description}</p>
                                </div>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                      
                      {/* Resources */}
                      <div>
                        <h3 className="text-xl mb-6 font-medium text-gray-800" style={{ fontFamily: 'DM Mono' }}>Resources</h3>
                        <div className="space-y-4">
                          {resources.map((resource, index) => (
                            <motion.div 
                              key={index}
                              initial={{ opacity: 0, x: 20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.3, delay: index * 0.1 }}
                              viewport={{ once: true }}
                              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 border border-gray-100 hover:border-blue-200"
                            >
                              <div className="flex items-start">
                                <div className="flex-shrink-0 mr-4">
                                  {resource.icon}
                                </div>
                                <div>
                                  <h4 className="font-medium text-gray-800 mb-1" style={{ fontFamily: 'DM Mono' }}>{resource.name}</h4>
                                  <p className="text-gray-600" style={{ fontFamily: 'Bellota Text' }}>{resource.description}</p>
                                </div>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                
                {activeTab === 'lessons' && (
                  <div className="space-y-8">
                    <h2 className="text-3xl font-bold text-gray-800 mb-6" style={{ fontFamily: 'DM Mono' }}>
                      Challenges & Lessons Learned
                    </h2>
                    
                    <p className="text-lg leading-relaxed text-gray-700" style={{ fontFamily: 'Bellota Text' }}>
                      Building this portfolio presented several challenges that became valuable learning opportunities. Each obstacle pushed me to deepen my understanding of both design and development principles. I enjoyed every moment of this experience. Even when I felt confused and lost at times, I never thought of giving up because this is something I love. The lessons I’ve learned will stay with me and shape my future projects
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                      <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
                        <h3 className="text-xl mb-4 font-medium text-gray-800 flex items-center" style={{ fontFamily: 'DM Mono' }}>
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                          </svg>
                          Key Challenges
                        </h3>
                        <ul className="space-y-3 text-gray-700" style={{ fontFamily: 'Bellota Text' }}>
                          <li className="flex items-start">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-orange-500 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                            </svg>
                            Translating Figma designs into responsive coding components
                          </li>
                          <li className="flex items-start">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-orange-500 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                            </svg>
                            Implementing animations that enhance rather than disrupt user experience
                          </li>
                          <li className="flex items-start">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-orange-500 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                            </svg>
                            Balancing visual appeal with performance optimization
                          </li>
                          <li className="flex items-start">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-orange-500 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                            </svg>
                            Ensuring cross-browser compatibility
                          </li>
                        </ul>
                      </div>
                      
                      <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
                        <h3 className="text-xl mb-4 font-medium text-gray-800 flex items-center" style={{ fontFamily: 'DM Mono' }}>
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          Lessons Learned
                        </h3>
                        <ul className="space-y-3 text-gray-700" style={{ fontFamily: 'Bellota Text' }}>
                          <li className="flex items-start">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-green-500 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                              <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
                            </svg>
                            The importance of planning component structure before coding
                          </li>
                          <li className="flex items-start">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-green-500 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                              <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
                            </svg>
                            How to effectively use Tailwind CSS for responsive design
                          </li>
                          <li className="flex items-start">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-green-500 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                              <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
                            </svg>
                            Animation performance considerations in React applications
                          </li>
                          <li className="flex items-start">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-green-500 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                              <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
                            </svg>
                            The value of iterative testing, debugging and refinement
                          </li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-6 border border-purple-100">
                      <h3 className="text-xl font-medium mb-4 text-gray-800" style={{ fontFamily: 'DM Mono' }}>Key Takeaway</h3>
                      <p className="text-gray-700" style={{ fontFamily: 'Bellota Text' }}>
                        The most valuable lesson from this project was learning that effective web design lies at the intersection of aesthetics, function, and performance. A beautiful site that loads slowly or doesn't work well across devices fails its primary purpose. Balancing these concerns requires careful planning, testing, and refinement. Everyone will have its own unique design style, mine was heavily influenced by Apple's design language and my personal preference for minimalism. However, the principles of usability and performance are universal.  
                      </p>
                    </div>
                    
                    <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-100">
                      <h3 className="text-xl font-medium mb-4 text-gray-800" style={{ fontFamily: 'DM Mono' }}>Conclusion</h3>
                      <p className="text-gray-700 mb-4" style={{ fontFamily: 'Bellota Text' }}>
                        This portfolio project represents not just a showcase of my skills, but a journey of growth in both design and development. It embodies my approach to web development: clean, simple but thoughtful, and user-focused.
                      </p>
                      <p className="text-gray-700 mb-4" style={{ fontFamily: 'Bellota Text' }}>
                        The process of creating this portfolio has reinforced my passion for bridging creativity and coding. It has also highlighted the importance of attention to detail, from typography choices to animation timing.
                      </p>
                      <p className="text-gray-700" style={{ fontFamily: 'Bellota Text' }}>
                        As I continue to grow as a developer and designer, this portfolio will evolve alongside my skills. I look forward to adding new projects and refining the existing design and functionality based on feedback and emerging styles.
                      </p>
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioProjectPage;