
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import { Loader2 } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface HalalCheckFormProps {
  onSubmit: (ingredients: string) => void;
  isLoading: boolean;
}

const HalalCheckForm: React.FC<HalalCheckFormProps> = ({ onSubmit, isLoading }) => {
  const [ingredients, setIngredients] = useState('');
  const [category, setCategory] = useState('');
  const { toast } = useToast();

  const categories = [
    { value: "boissons", label: "Boissons" },
    { value: "snacks", label: "Snacks et Confiseries" },
    { value: "plats", label: "Plats préparés" },
    { value: "produits_laitiers", label: "Produits laitiers" },
    { value: "viandes", label: "Viandes et Poissons" },
    { value: "autre", label: "Autre" },
  ];

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
        <label htmlFor="category" className="text-lg font-medium text-halalui-text">
          Catégorie du produit
        </label>
        <Select value={category} onValueChange={setCategory}>
          <SelectTrigger className="w-full bg-white border-halalui-beige-dark focus:border-halalui-green">
            <SelectValue placeholder="Sélectionnez une catégorie (boissons, snacks, etc.)" />
          </SelectTrigger>
          <SelectContent className="bg-white border-halalui-beige">
            {categories.map((category) => (
              <SelectItem key={category.value} value={category.value}>
                {category.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      
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
        className="w-full bg-halalui-green hover:bg-halalui-green-light text-white py-2 px-4 rounded-md transition-colors duration-300 shadow-md"
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
