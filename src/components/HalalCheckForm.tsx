
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import { Loader2 } from 'lucide-react';

interface HalalCheckFormProps {
  onSubmit: (ingredients: string) => void;
  isLoading: boolean;
}

const HalalCheckForm: React.FC<HalalCheckFormProps> = ({ onSubmit, isLoading }) => {
  const [ingredients, setIngredients] = useState('');
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!ingredients.trim()) {
      toast({
        title: "Champ vide",
        description: "Veuillez entrer les ingrédients ou la description du produit.",
        variant: "destructive",
      });
      return;
    }
    
    onSubmit(ingredients);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-lg">
      <div className="space-y-2">
        <label htmlFor="ingredients" className="text-lg font-medium text-halalui-text">
          Ingrédients ou description du produit
        </label>
        <Textarea
          id="ingredients"
          placeholder="Entrez les ingrédients ou la description du produit..."
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          className="min-h-[120px] bg-white border-halalui-beige-dark focus:border-halalui-green focus:ring-halalui-green-light"
        />
      </div>
      
      <Button 
        type="submit" 
        disabled={isLoading}
        className="w-full bg-halalui-green hover:bg-halalui-green-light text-white py-2 px-4 rounded-md transition-colors duration-300"
      >
        {isLoading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Analyse en cours...
          </>
        ) : (
          "Vérifier si Halal"
        )}
      </Button>
    </form>
  );
};

export default HalalCheckForm;
