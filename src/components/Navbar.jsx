import { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const location = useLocation();
  const [projectsHovered, setProjectsHovered] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownRef = useRef(null);
  const mobileMenuRef = useRef(null);
  
  // Social media profiles
  const socialProfiles = {
    twitter: "https://twitter.com/IsHernan10",
    github: "https://github.com/IsaacH00",
    linkedin: "https://linkedin.com/in/isaac-cruz-h03/",
    figma: "https://figma.com/@isaach03"
  };

  // Current projects - add more as I create them
  const projects = [
    {
      id: 1,
      title: "Portfolio Website",
      path: "/projects/portfolio-website",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 2 7 12 12 22 7 12 2"/>
          <polyline points="2 17 12 22 22 17"/>
          <polyline points="2 12 12 17 22 12"/>
        </svg>
      )
    }
    // Add more projects here as I create them
    // { id: 2, title: "Future Project", path: "/projects/future-project" }
  ];

  // Navigation links for reuse
  const navLinks = [
    { path: "/about", label: "About" },
    { path: "/projects", label: "Projects", hasDropdown: true },
    { path: "/skills", label: "Skills/Certificates" },
    { path: "/contact", label: "Contact" }
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setProjectsHovered(false);
      }
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
        setMobileMenuOpen(false);
      }
    };
    
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);
  
  return (
    <motion.nav 
      className="top-0 bg-light-gray/95 backdrop-blur-sm py-4 px-6 md:px-8 flex items-center justify-between relative z-50 shadow-sm"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Logo with hover effect */}
      <Link 
        to="/" 
        className="text-3xl text-dark-gray font-bold relative group overflow-hidden"
        style={{ fontFamily: 'DM Mono' }}
      >
        <span className="relative z-10 transition-colors duration-300 group-hover:text-[#708090]">&lt;IH/&gt;</span>
        <motion.div
          className="absolute bottom-0 left-0 w-full h-1 bg-[#708090]/20 rounded-full"
          initial={{ scaleX: 0, originX: 0 }}
          whileHover={{ scaleX: 1 }}
          transition={{ duration: 0.3 }}
        />
      </Link>
      
      {/* Navigation Pages - Desktop */}
      <div className="hidden md:flex space-x-8">
        {navLinks.map((link) => 
          link.hasDropdown ? (
            <div 
              key={link.path}
              className="relative"
              ref={dropdownRef}
              onMouseEnter={() => setProjectsHovered(true)}
              onMouseLeave={() => setProjectsHovered(false)}
            >
              <Link 
                to={link.path} 
                className="text-lg font-medium relative group flex items-center"
                style={{ fontFamily: 'Bellota Text' }}
              >
                <span className={`${location.pathname.startsWith(link.path) ? 'text-[#708090]' : 'text-dark-gray'} group-hover:text-[#708090] transition-colors duration-300 flex items-center`}>
                  {link.label}
                  {/* Subtle arrow indicator */}
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="16" 
                    height="16" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                    className="ml-1 transform transition-transform duration-300"
                    style={{ transform: projectsHovered ? 'rotate(180deg)' : 'rotate(0deg)' }}
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </span>
                <motion.span 
                  className="absolute -bottom-1 left-0 h-0.5 bg-[#708090] rounded-full w-full origin-left"
                  initial={{ scaleX: location.pathname.startsWith(link.path) ? 1 : 0 }}
                  animate={{ scaleX: location.pathname.startsWith(link.path) ? 1 : 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </Link>
              
              {/* Dropdown Menu */}
              <AnimatePresence>
                {projectsHovered && (
                  <motion.div 
                    className="absolute top-full left-0 mt-2 backdrop-blur-md bg-white/90 shadow-lg rounded-xl overflow-hidden w-72 py-3"
                    initial={{ opacity: 0, y: -5, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -5, scale: 0.98 }}
                    transition={{ 
                      duration: 0.2,
                      ease: "easeOut" 
                    }}
                    style={{
                      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)"
                    }}
                  >
                    <div className="px-2">
                      {projects.map((project, index) => (
                        <motion.div
                          key={project.id}
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ 
                            opacity: 1, 
                            y: 0,
                            transition: { delay: index * 0.05 } 
                          }}
                          whileHover={{ x: 5 }}
                          transition={{ duration: 0.2 }}
                          className="mb-1 last:mb-0"
                        >
                          <Link 
                            to={project.path} 
                            className="block px-4 py-3 text-dark-gray hover:text-dark-gray rounded-lg transition-all duration-200 hover:bg-[#708090]/10"
                            style={{ fontFamily: 'Bellota Text' }}
                          >
                            <div className="flex items-center">
                              <div className="mr-3 p-2 bg-[#708090]/10 rounded-lg">
                                {project.icon}
                              </div>
                              <span>{project.title}</span>
                            </div>
                          </Link>
                        </motion.div>
                      ))}
                      
                      {projects.length === 0 && (
                        <div className="px-4 py-3 text-gray-500 italic flex items-center" style={{ fontFamily: 'Bellota Text' }}>
                          <div className="mr-3 p-2 bg-gray-100 rounded-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <circle cx="12" cy="12" r="10"></circle>
                              <line x1="12" y1="8" x2="12" y2="12"></line>
                              <line x1="12" y1="16" x2="12.01" y2="16"></line>
                            </svg>
                          </div>
                          No projects yet
                        </div>
                      )}
                    </div>
                    
                    <div className="border-t border-gray-200 mt-2 pt-3 mx-4">
                      <Link 
                        to="/projects" 
                        className="flex items-center justify-between text-sm text-[#708090] hover:text-[#708090]/80 transition-colors duration-300 py-1"
                        style={{ fontFamily: 'Bellota Text' }}
                      >
                        <span>View all projects</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="5" y1="12" x2="19" y2="12"></line>
                          <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ) : (
            <NavLink key={link.path} to={link.path} current={location.pathname}>
              {link.label}
            </NavLink>
          )
        )}
      </div>
      
      {/* Social Links - Desktop */}
      <div className="hidden md:flex space-x-5">
        {Object.entries(socialProfiles).map(([platform, url]) => (
          <SocialIcon 
            key={platform}
            href={url} 
            aria-label={`My ${platform.charAt(0).toUpperCase() + platform.slice(1)} Profile`}
            platform={platform}
          />
        ))}
      </div>
      
      {/* Mobile Menu Button */}
      <div className="flex md:hidden">
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="text-gray-800 focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-7 w-7" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>
      
      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            ref={mobileMenuRef}
            className="absolute top-full left-0 right-0 bg-white shadow-lg z-40 md:hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="py-5 px-6 flex flex-col space-y-4">
              {navLinks.map((link) => (
                <div key={link.path}>
                  <Link 
                    to={link.path}
                    className={`block py-2 text-lg font-medium ${location.pathname.startsWith(link.path) ? 'text-[#708090]' : 'text-gray-800'}`}
                    style={{ fontFamily: 'Bellota Text' }}
                  >
                    {link.label}
                  </Link>
                  
                  {link.hasDropdown && link.path === '/projects' && projects.length > 0 && (
                    <div className="pl-4 mt-2 border-l-2 border-gray-200 space-y-2">
                      {projects.map(project => (
                        <Link 
                          key={project.id}
                          to={project.path}
                          className="block py-2 text-base text-gray-700 hover:text-[#708090]"
                          style={{ fontFamily: 'Bellota Text' }}
                        >
                          {project.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              
              {/* Social Icons in Mobile Menu */}
              <div className="flex space-x-4 pt-4 border-t border-gray-200">
                {Object.entries(socialProfiles).map(([platform, url]) => (
                  <a 
                    key={platform}
                    href={url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-gray-700 hover:text-[#708090]"
                    aria-label={`My ${platform.charAt(0).toUpperCase() + platform.slice(1)} Profile`}
                  >
                    {getSocialIcon(platform)}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

// NavLink component
const NavLink = ({ to, children, current }) => {
  const isActive = current === to;
  
  return (
    <Link 
      to={to} 
      className="text-lg font-medium relative group"
      style={{ fontFamily: 'Bellota Text' }}
    >
      <span className={`${isActive ? 'text-[#708090]' : 'text-dark-gray'} group-hover:text-[#708090] transition-colors duration-300`}>
        {children}
      </span>
      <motion.span 
        className="absolute -bottom-1 left-0 h-0.5 bg-[#708090] rounded-full w-full origin-left"
        initial={{ scaleX: isActive ? 1 : 0 }}
        animate={{ scaleX: isActive ? 1 : 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.3 }}
      />
    </Link>
  );
};

// Social Icon component
const SocialIcon = ({ href, platform, ariaLabel }) => {
  return (
    <motion.a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="text-dark-gray hover:text-[#708090] transition-all duration-300 p-2 hover:bg-gray-100 rounded-full"
      aria-label={ariaLabel}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.2 }}
    >
      {getSocialIcon(platform)}
    </motion.a>
  );
};

// Helper function to get the right social icon
const getSocialIcon = (platform) => {
  switch(platform) {
    case 'twitter':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 6L6 18M6 6l12 12" />
        </svg>
      );
    case 'github':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
        </svg>
      );
    case 'linkedin':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect x="2" y="9" width="4" height="12" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      );
    case 'figma':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z" />
          <path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z" />
          <path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z" />
          <path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z" />
          <path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z" />
        </svg>
      );
    default:
      return null;
  }
};

export default Navbar;