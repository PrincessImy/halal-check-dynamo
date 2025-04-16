
import React from 'react';
import { motion } from 'framer-motion';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';
import { Globe } from 'lucide-react';
import { cn } from '@/lib/utils';

const HalalHeader: React.FC = () => {
  const [currentLanguage, setCurrentLanguage] = React.useState('FR');

  const languages = [
    { code: 'FR', name: 'Français' },
    { code: 'EN', name: 'English' },
    { code: 'AR', name: 'العربية' }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative text-center mb-8"
    >
      {/* Language Selector */}
      <div className="absolute top-0 right-0">
        <DropdownMenu>
          <DropdownMenuTrigger className="flex items-center gap-1 px-2 py-1 text-sm rounded-md hover:bg-halalui-beige transition-colors duration-300">
            <Globe size={16} />
            <span>{currentLanguage}</span>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="bg-white border border-halalui-beige">
            {languages.map((lang) => (
              <DropdownMenuItem
                key={lang.code}
                className={cn(
                  "cursor-pointer",
                  currentLanguage === lang.code && "font-medium bg-halalui-beige/30"
                )}
                onClick={() => setCurrentLanguage(lang.code)}
              >
                {lang.name}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

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
