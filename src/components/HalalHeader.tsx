
import React from 'react';
import { motion } from 'framer-motion';

const HalalHeader: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-center mb-8"
    >
      <h1 className="text-3xl md:text-4xl font-bold text-halalui-text">
        Vérification <span className="text-halalui-green">Halal</span>
      </h1>
      <p className="mt-3 text-gray-600 max-w-md mx-auto">
        Entrez les ingrédients ou la description d'un produit pour vérifier s'il est halal ou non
      </p>
    </motion.div>
  );
};

export default HalalHeader;
