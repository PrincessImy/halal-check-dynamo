
import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, XCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

interface HalalResultProps {
  isHalal: boolean;
  explanation: string;
}

const HalalResult: React.FC<HalalResultProps> = ({ isHalal, explanation }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "rounded-lg p-6 shadow-md w-full max-w-lg",
        isHalal ? "bg-halalui-green-light/20" : "bg-halalui-beige-dark/50"
      )}
    >
      <div className="flex items-center justify-center mb-4">
        {isHalal ? (
          <>
            <CheckCircle className="h-12 w-12 text-halalui-green mr-3" />
            <h2 className="text-2xl font-bold text-halalui-green">Halal ✅</h2>
          </>
        ) : (
          <>
            <XCircle className="h-12 w-12 text-red-500 mr-3" />
            <h2 className="text-2xl font-bold text-amber-600">Non Halal ❌</h2>
          </>
        )}
      </div>
      
      <div className="mt-4 border-t pt-4 border-gray-200">
        <h3 className="font-semibold text-lg text-halalui-text mb-2">Explication :</h3>
        <p className="text-gray-700">{explanation}</p>
      </div>
    </motion.div>
  );
};

export default HalalResult;
