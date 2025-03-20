// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';

// Animation variants
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

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Website design and portfolio',
      description: 'A responsive portfolio website built with React and Tailwind CSS',
      image: '/images/projects/default-project.jpeg',
      link: '/projects/portfolio-website',
      tags: ['React', 'Tailwind CSS', 'Framer Motion']
    },
    { 
      id: 2, 
      title: 'Upcoming Project',
      comingSoon: true 
    },
    { 
      id: 3, 
      title: 'Future App',
      comingSoon: true 
    },
    { 
      id: 4, 
      title: 'Design Concept',
      comingSoon: true 
    },
    { 
      id: 5, 
      title: 'Data Visualization',
      comingSoon: true 
    },
    { 
      id: 6, 
      title: 'Interactive Experience',
      comingSoon: true 
    }
  ];

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
      <div className="absolute top-1/3 left-10 w-16 h-16 bg-purple-100 rounded-full opacity-20"></div>
      <div className="absolute bottom-1/4 right-10 w-24 h-24 bg-gray-200 rounded-full opacity-20"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Projects Header with Enhanced Styling */}
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
            <span className="relative z-10">&lt;Projects/&gt;</span>
            <div className="absolute -bottom-2 left-0 right-0 h-3 bg-purple-100 opacity-50 -z-10 transform -rotate-1"></div>
          </motion.h1>

          <motion.p 
            className="text-xl text-gray-700 max-w-2xl mx-auto" 
            style={{ fontFamily: 'Bellota Text' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Check out some of the latest projects I've designed.
          </motion.p>
        </motion.div>
        
        {/* Project Content with Enhanced Card Design */}
        <motion.div 
          className="flex flex-col md:flex-row justify-between items-start gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Text Content in Card */}
          <motion.div 
            className="w-full md:w-1/2 mb-8 md:mb-0"
            variants={itemVariants}
          >
            <motion.div 
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
              variants={itemVariants}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <h2 className="text-2xl mb-4 font-medium text-gray-800" style={{ fontFamily: 'DM Mono' }}>
                My Work
              </h2>
              <motion.p 
                className="text-gray-700 leading-relaxed" 
                style={{ fontFamily: 'Bellota Text' }}
              >
                Welcome to my projects showcase. Here you'll find a collection of my work spanning web development, design, and data visualization. I plan to update this page as needed whenever I develop new projects or have exciting updates to share.
              </motion.p>
              
              <div className="mt-6 flex flex-wrap gap-2">
                <span className="inline-block px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm">Web Development</span>
                <span className="inline-block px-3 py-1 bg-purple-50 text-purple-700 rounded-full text-sm">UI/UX Design</span>
                <span className="inline-block px-3 py-1 bg-green-50 text-green-700 rounded-full text-sm">Data Analysis</span>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Inspiration Box with Enhanced Design */}
          <motion.div 
            className="w-full md:w-1/3"
            variants={itemVariants}
          >
            <motion.div 
              className="bg-gradient-to-br from-gray-100 to-gray-200 p-6 rounded-xl shadow-sm border border-gray-200"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="font-medium text-gray-800" style={{ fontFamily: 'DM Mono' }}>
                  Design Inspiration
                </h3>
              </div>
              
              <p className="text-gray-700 mb-4" style={{ fontFamily: 'Bellota Text' }}>
                Make it simple yet artistic
              </p>
              
              {/* Enhanced project thumbnails */}
              <motion.div 
                className="grid grid-cols-2 gap-3 mt-4"
                variants={containerVariants}
              >
                <motion.div 
                  className="bg-white rounded-lg shadow-sm overflow-hidden group"
                  variants={itemVariants}
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="h-24 overflow-hidden">
                    <motion.img 
                      src="/images/projects/interior-design.jpg" 
                      alt="Interior design" 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "https://via.placeholder.com/150x100?text=Interior";
                      }}
                    />
                  </div>
                  <div className="p-2">
                    <p className="text-xs font-medium text-gray-800" style={{ fontFamily: 'Bellota Text' }}>A modern living renovation</p>
                    <p className="text-xs text-gray-500" style={{ fontFamily: 'Bellota Text' }}>5 minutes ago</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="bg-white rounded-lg shadow-sm overflow-hidden group"
                  variants={itemVariants}
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="h-24 overflow-hidden">
                    <motion.img 
                      src="/images/projects/nature.jpg" 
                      alt="Nature" 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "https://via.placeholder.com/150x100?text=Nature";
                      }}
                    />
                  </div>
                  <div className="p-2">
                    <p className="text-xs font-medium text-gray-800" style={{ fontFamily: 'Bellota Text' }}>Lakes</p>
                    <p className="text-xs text-gray-500" style={{ fontFamily: 'Bellota Text' }}>Favorites</p>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
        
        {/* Project Grid with Enhanced Styling */}
        <motion.div 
          className="mt-16 pt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {/* Section Header */}
          <motion.div 
            className="mb-10 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center justify-center mb-6">
              <div className="h-px w-16 bg-gray-300"></div>
              <h2 className="mx-4 text-2xl font-bold text-gray-800" style={{ fontFamily: 'DM Mono' }}>
                Featured Projects
              </h2>
              <div className="h-px w-16 bg-gray-300"></div>
            </div>
            <p className="text-gray-600 max-w-2xl mx-auto" style={{ fontFamily: 'Bellota Text' }}>
              Browse through my portfolio of work. More projects are in development and will be added soon.
            </p>
          </motion.div>
          
          {/* Project Cards Grid */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {projects.map(project => (
              <ProjectCard 
                key={project.id}
                image={project.image}
                title={project.title}
                description={project.description}
                link={project.link}
                comingSoon={project.comingSoon}
                tags={project.tags}
              />
            ))}
          </motion.div>
        </motion.div>
        
        {/* Call to Action */}
        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-gray-800" style={{ fontFamily: 'DM Mono' }}>
              Have a project in mind?
            </h3>
            <p className="text-gray-600 mb-6" style={{ fontFamily: 'Bellota Text' }}>
              I'm always interested in new challenges and opportunities. Let's discuss how we can work together.
            </p>
            <a 
              href="/contact" 
              className="inline-block px-8 py-3 bg-gray-800 hover:bg-gray-900 text-white rounded-lg shadow-md transition-colors duration-300"
              style={{ fontFamily: 'DM Mono' }}
            >
              Get in Touch
            </a>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Projects;