/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion';
import SkillCard from '../components/SkillCard';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.05
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

const Skills = () => {
  const skills = [
    { id: 1, name: 'HTML', icon: '/images/skills/html5.svg', category: 'languages' },
    { id: 2, name: 'CSS', icon: '/images/skills/css3.svg', category: 'languages' },
    { id: 3, name: 'JavaScript', icon: '/images/skills/javascript.svg', category: 'languages' },
    { id: 4, name: 'TailwindCSS', icon: '/images/skills/tailwindcss.svg', category: 'languages' },
    { id: 5, name: 'React', icon: '/images/skills/react.svg', category: 'languages' },
    { id: 6, name: 'Python', icon: '/images/skills/python.svg', category: 'languages' },
    { id: 7, name: 'MySQL', icon: '/images/skills/mysql.svg', category: 'database' },
    { id: 8, name: 'R', icon: '/images/skills/r-lang.svg', category: 'data' },
    { id: 9, name: 'Git', icon: '/images/skills/git.svg', category: 'tools' },
    { id: 10, name: 'Tableau', icon: '/images/skills/tableau.svg', category: 'data' },
    { id: 11, name: 'Excel', icon: '/images/skills/excel.svg', category: 'tools' },
    { id: 12, name: 'Sheets', icon: '/images/skills/sheets.svg', category: 'tools' },
    { id: 13, name: 'Teams', icon: '/images/skills/teams.svg', category: 'tools' },
    { id: 14, name: 'Figma', icon: '/images/skills/figma.svg', category: 'design' },
    { id: 15, name: 'Canva', icon: '/images/skills/canva.svg', category: 'design' }
  ];
  
  const certificates = [
    { 
      id: 1, 
      title: 'CS50: Introduction to Computer Science', 
      issuer: 'Harvard University', 
      date: 'Coming soon', 
      image: '/images/certificates/certificate-placeholder.jpg',
      description: 'A comprehensive introduction to the intellectual enterprises of computer science and programming.'
    },
    { 
      id: 2, 
      title: 'Google Data Analytics Professional Certificate', 
      issuer: 'Google', 
      date: 'Coming soon', 
      image: '/images/certificates/certificate-placeholder.jpg',
      description: 'A rigorous, hands-on program that covers the entire scope of the data analysis process.'
    },
    { 
      id: 2, 
      title: 'Excel Skills for Business', 
      issuer: 'Macquarie University', 
      date: 'Coming soon', 
      image: '/images/certificates/certificate-placeholder.jpg',
      description: 'A comprehensive course designed to enhance your Excel skills for business applications.'
    },
  ];

  // Group skills by category
  const skillCategories = {
    languages: 'Programming Languages',
    database: 'Database',
    data: 'Data Analysis',
    tools: 'Tools',
    design: 'Design'
  };

  return (
    <motion.div 
      className="relative py-16 px-8 bg-light-gray min-h-screen overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full opacity-30 -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gray-100 rounded-full opacity-40 translate-y-1/3 -translate-x-1/4"></div>
      <div className="absolute top-1/3 left-10 w-16 h-16 bg-green-100 rounded-full opacity-20"></div>
      <div className="absolute bottom-1/4 right-10 w-24 h-24 bg-gray-200 rounded-full opacity-20"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Skills & Certificates Header */}
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
            <span className="relative z-10">&lt;Skills/Certificates/&gt;</span>
            <div className="absolute -bottom-2 left-0 right-0 h-3 bg-green-100 opacity-40 -z-10 transform -rotate-1"></div>
          </motion.h1>
          
          <motion.p 
            className="text-xl mb-2 text-gray-700 max-w-3xl mx-auto" 
            style={{ fontFamily: 'Bellota Text' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            The Tools, Technologies & Certifications That Power My Work.
          </motion.p>
        </motion.div>
        
        {/* Skills Section */}
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 mb-4">
            <div className="flex items-center mb-8">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-800" style={{ fontFamily: 'DM Mono' }}>Technical Skills</h2>
            </div>
            
            {/* Skill cards grouped by category */}
            <div className="space-y-8">
              {Object.entries(skillCategories).map(([category, title]) => {
                const categorySkills = skills.filter(skill => skill.category === category);
                if (categorySkills.length === 0) return null;
                
                return (
                  <div key={category}>
                    <h3 className="text-lg font-medium text-gray-700 mb-4 border-b pb-2" style={{ fontFamily: 'DM Mono' }}>{title}</h3>
                    <motion.div 
                      className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-6"
                      variants={containerVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.1 }}
                    >
                      {categorySkills.map(skill => (
                        <SkillCard 
                          key={skill.id} 
                          name={skill.name} 
                          icon={skill.icon}
                        />
                      ))}
                    </motion.div>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>
        
        {/* Certificates Section */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="flex items-center mb-8">
            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-800" style={{ fontFamily: 'DM Mono' }}>Certificates & Education</h2>
          </div>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="space-y-6"
          >
            {certificates.map(cert => (
              <motion.div 
                key={cert.id} 
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 overflow-hidden"
                variants={itemVariants}
                whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex flex-col md:flex-row">
                  <div className="w-full md:w-1/4 mb-4 md:mb-0">
                    <div className="bg-gray-50 rounded-lg overflow-hidden border border-gray-100">
                      <img 
                        src={cert.image}
                        alt={cert.title}
                        className="object-cover rounded-lg w-full h-auto transition-transform duration-500 hover:scale-105"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = "https://via.placeholder.com/300x200?text=Certificate";
                        }}
                      />
                    </div>
                    
                    <div className="mt-3 flex justify-center">
                      <span className="inline-block px-3 py-1 bg-green-50 text-green-700 rounded-full text-xs">Coming Soon</span>
                    </div>
                  </div>
                  
                  <div className="w-full md:w-3/4 md:pl-6">
                    <h3 className="text-xl font-medium mb-2 text-gray-800" style={{ fontFamily: 'DM Mono' }}>{cert.title}</h3>
                    <p className="text-gray-600 mb-3 flex items-center" style={{ fontFamily: 'Bellota Text' }}>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                      <span className="font-medium">{cert.issuer}</span>
                    </p>
                    <p className="text-gray-600 mb-4 flex items-center" style={{ fontFamily: 'Bellota Text' }}>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {cert.date}
                    </p>
                    <p className="text-gray-700 leading-relaxed" style={{ fontFamily: 'Bellota Text' }}>{cert.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
        
        {/* Additional Skills Section */}
        <motion.div
          className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-8 shadow-sm border border-gray-200"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <h2 className="text-2xl font-bold mb-6 text-gray-800" style={{ fontFamily: 'DM Mono' }}>Always Learning</h2>
          
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-2/3 pr-0 md:pr-8">
              <p className="text-gray-700 mb-4 leading-relaxed" style={{ fontFamily: 'Bellota Text' }}>
                I believe in continuous growth and am constantly expanding my skill set. Currently, I'm focused on deepening my knowledge in:
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                <div className="flex items-start">
                  <div className="mt-1 bg-blue-100 p-1 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h4 className="font-medium text-gray-800" style={{ fontFamily: 'DM Mono' }}>Advanced React Patterns</h4>
                    <p className="text-sm text-gray-600" style={{ fontFamily: 'Bellota Text' }}>Building efficient and scalable applications</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mt-1 bg-blue-100 p-1 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h4 className="font-medium text-gray-800" style={{ fontFamily: 'DM Mono' }}>Data Visualization</h4>
                    <p className="text-sm text-gray-600" style={{ fontFamily: 'Bellota Text' }}>Creating insightful and interactive dashboards</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mt-1 bg-blue-100 p-1 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h4 className="font-medium text-gray-800" style={{ fontFamily: 'DM Mono' }}>Frontend Development</h4>
                    <p className="text-sm text-gray-600" style={{ fontFamily: 'Bellota Text' }}>Building robust frontend services</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mt-1 bg-blue-100 p-1 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h4 className="font-medium text-gray-800" style={{ fontFamily: 'DM Mono' }}>UX Research</h4>
                    <p className="text-sm text-gray-600" style={{ fontFamily: 'Bellota Text' }}>Creating more user-centered designs</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="w-full md:w-1/3 mt-6 md:mt-0 flex justify-center items-center">
              <div className="w-48 h-48 bg-white rounded-full shadow-md flex items-center justify-center overflow-hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Skills;