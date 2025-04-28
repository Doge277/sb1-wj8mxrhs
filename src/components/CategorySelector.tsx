import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';

interface CategorySelectorProps {
  currentCategory: string;
  setCurrentCategory: (category: string) => void;
}

const CategorySelector: React.FC<CategorySelectorProps> = ({ 
  currentCategory, 
  setCurrentCategory 
}) => {
  const { theme } = useTheme();
  const { t } = useLanguage();
  
  const categories = [
    { id: 'all', name: t('allTopics') },
    { id: 'algebra', name: t('algebra') },
    { id: 'geometry', name: t('geometry') },
    { id: 'calculus', name: t('calculus') },
    { id: 'statistics', name: t('statistics') }
  ];
  
  return (
    <div className="flex flex-wrap gap-2">
      {categories.map(category => (
        <button
          key={category.id}
          onClick={() => setCurrentCategory(category.id)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
            currentCategory === category.id
              ? 'bg-indigo-600 text-white'
              : theme === 'dark'
                ? 'bg-gray-700 text-gray-200 hover:bg-gray-600'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          {category.name}
        </button>
      ))}
    </div>
  );
};

export default CategorySelector;