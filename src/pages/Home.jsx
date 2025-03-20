// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import ProjectCard from '../components/ProjectCard';

const Home = () => {
  const featuredProjects = [
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
      comingSoon: true,
    },
    {
      id: 3,
      title: 'Future Creation',
      comingSoon: true,
    }
  ];

  // Animation for project cards
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  // Scroll indicator animation
  // eslint-disable-next-line no-unused-vars
  const scrollVariants = {
    animate: {
      y: [0, 10, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <Hero />
      
      {/* Featured Projects */}
      <div className="pb-24 px-8 bg-light-gray">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div 
            className="mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-3 text-gray-800" style={{ fontFamily: 'DM Mono' }}>
              Featured Projects
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto" style={{ fontFamily: 'Bellota Text' }}>
              Explore some of my recent work. Each project represents my passion for clean design 
              and efficient code. More projects coming soon!
            </p>
          </motion.div>
          
          {/* Project Cards */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {featuredProjects.map((project) => (
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
        </div>
      </div>
      
      {/* Contact Section */}
      <div className="py-16 px-8 bg-gray-50">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-4 text-gray-800" style={{ fontFamily: 'DM Mono' }}>
              Let's Work Together
            </h2>
            <p className="text-gray-600 mb-8" style={{ fontFamily: 'Bellota Text' }}>
              Have a project in mind or want to chat about a collaboration? I'd love to hear from you!
            </p>
            <Link 
              to="/contact" 
              className="inline-block px-8 py-3 bg-gray-800 hover:bg-gray-900 text-white rounded-lg shadow-md transition-colors duration-300"
              style={{ fontFamily: 'DM Mono' }}
            >
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Home;