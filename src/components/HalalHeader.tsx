
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

      {/* App Title with Mosque Icon */}
      <div className="flex items-center justify-center mb-2">
        <svg 
          className="w-8 h-8 mr-2 text-halalui-green"
          viewBox="0 0 24 24" 
          fill="currentColor"
        >
          <path d="M12 2L2 8v2h20V8L12 2zm-5 4c0-.55.45-1 1-1s1 .45 1 1-.45 1-1 1-1-.45-1-1zm10 0c0-.55.45-1 1-1s1 .45 1 1-.45 1-1 1-1-.45-1-1zM4 22h16v-8H4v8zm9-6.5c0 .83-.67 1.5-1.5 1.5S10 16.33 10 15.5 10.67 14 11.5 14s1.5.67 1.5 1.5z"/>
        </svg>
        <h1 className="text-3xl md:text-4xl font-bold text-halalui-text">
          Halal <span className="text-halalui-green">AI</span>
        </h1>
      </div>
      <p className="mt-3 text-gray-600 max-w-md mx-auto">
        Entrez les ingrédients ou la description d'un produit pour vérifier s'il est halal ou non
      </p>
    </motion.div>
  );
};

export default HalalHeader;
