// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

// This version uses the direct image of your pie chart design
// Use this if the SVG version has rendering issues
const PieChart = () => {
  return (
    <motion.div 
      className="w-full h-full flex justify-center items-center"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <img 
        src="/images/pie-chart.png" 
        alt="Skills distribution: Coder, Designer, Database" 
        className="w-800 h-800 max-w-md"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = "https://via.placeholder.com/400x400?text=Skills+Chart";
        }}
      />
    </motion.div>
  );
};

export default PieChart;