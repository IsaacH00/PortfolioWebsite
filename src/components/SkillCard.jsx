// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const SkillCard = ({ name, icon }) => {
  return (
    <motion.div 
      className="flex flex-col items-center"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
    >
      <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 w-full flex justify-center items-center mb-2 h-16 group hover:border-blue-200 hover:shadow-md transition-all duration-300">
        <img 
          src={icon} 
          alt={name} 
          className="h-8 w-8 group-hover:scale-110 transition-transform duration-300"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = `https://via.placeholder.com/40x40?text=${name.charAt(0)}`;
          }}
        />
      </div>
      <span className="text-sm text-center text-gray-700 font-medium" style={{ fontFamily: 'Bellota Text' }}>
        {name}
      </span>
    </motion.div>
  );
};

export default SkillCard;