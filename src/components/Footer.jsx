// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <motion.footer 
      className="border-t border-gray-400 py-6 text-center bg-gray-100"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.5 }}
    >
      <p className="text-gray-800 text-base" style={{ fontFamily: 'Bellota Text' }}>
        &copy; {currentYear} | 
        <span className="mx-2 font-medium">Designed</span> and 
        <motion.a 
          href="#" 
          className="mx-2 relative inline-block font-medium text-[#708090]"
          whileHover={{ scale: 1.05 }}
        >
          <span>coded</span>
          <motion.span 
            className="absolute bottom-0 left-0 w-full h-0.5 bg-[#708090]"
            initial={{ scaleX: 1 }}
            whileHover={{ scaleX: 0 }}
            transition={{ duration: 0.3 }}
          />
        </motion.a> with 
        <motion.span 
          className="mx-1 text-red-500 text-lg"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ 
            duration: 1.5, 
            repeat: Infinity, 
            repeatType: "reverse" 
          }}
        >
          ❤
        </motion.span> by <span className="font-semibold">Isaac Hernandez</span>. All Rights Reserved
      </p>
    </motion.footer>
  );
};

export default Footer;