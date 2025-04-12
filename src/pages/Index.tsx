
import React, { useState } from 'react';
import { Toaster } from '@/components/ui/toaster';
import HalalHeader from '@/components/HalalHeader';
import HalalCheckForm from '@/components/HalalCheckForm';
import HalalResult from '@/components/HalalResult';
import { motion } from 'framer-motion';

const Index = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<{ isHalal: boolean; explanation: string } | null>(null);

  // Cette fonction simule l'analyse des ingrédients
  // Dans un cas réel, cette fonction ferait un appel à une API
  const checkIfHalal = (ingredients: string) => {
    setIsLoading(true);
    
    // Simulation d'un délai d'analyse (serait remplacé par un vrai appel API)
    setTimeout(() => {
      // Logique basique de simulation
      const lowercaseIngredients = ingredients.toLowerCase();
      
      // Liste de mots non-halal pour la démonstration
      const nonHalalKeywords = ['alcool', 'porc', 'vin', 'gélatine de porc', 'lard'];
      
      // Vérifie si un ingrédient non-halal est présent
      const hasNonHalal = nonHalalKeywords.some(keyword => 
        lowercaseIngredients.includes(keyword)
      );
      
      if (hasNonHalal) {
        setResult({ 
          isHalal: false, 
          explanation: "Ce produit contient des ingrédients non-halal comme de l'alcool, du porc ou des dérivés qui ne sont pas conformes aux exigences alimentaires islamiques." 
        });
      } else {
        setResult({ 
          isHalal: true, 
          explanation: "Après analyse, ce produit ne semble pas contenir d'ingrédients interdits selon les règles alimentaires islamiques. Tous les composants identifiés sont considérés comme halal." 
        });
      }
      
      setIsLoading(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-halalui-beige/30 py-8 md:py-12">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="container max-w-4xl mx-auto px-4"
      >
        <HalalHeader />
        
        <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
          <div className="flex flex-col items-center space-y-8">
            <HalalCheckForm onSubmit={checkIfHalal} isLoading={isLoading} />
            
            {result && !isLoading && (
              <HalalResult isHalal={result.isHalal} explanation={result.explanation} />
            )}
          </div>
        </div>
        
        <footer className="mt-12 text-center text-sm text-gray-500">
          <p>© 2025 HalalCheck - App créée pour un projet de fin d'études</p>
        </footer>
      </motion.div>
      <Toaster />
    </div>
  );
};

export default Index;
