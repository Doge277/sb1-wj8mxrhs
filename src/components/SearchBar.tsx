import React from 'react';
import { Search } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';

interface SearchBarProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ searchQuery, setSearchQuery }) => {
  const { theme } = useTheme();
  const { t } = useLanguage();
  
  return (
    <div className={`relative rounded-md shadow-sm ${
      theme === 'dark' ? 'bg-gray-700' : 'bg-white'
    }`}>
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <Search size={18} className={theme === 'dark' ? 'text-gray-400' : 'text-gray-500'} />
      </div>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className={`block w-full pl-10 pr-3 py-2 rounded-md text-sm ${
          theme === 'dark' 
            ? 'bg-gray-700 text-white placeholder-gray-400 border-gray-600 focus:ring-indigo-500 focus:border-indigo-500' 
            : 'bg-white text-gray-900 placeholder-gray-500 border-gray-300 focus:ring-indigo-500 focus:border-indigo-500'
        }`}
        placeholder={t('searchPlaceholder')}
      />
    </div>
  );
};

export default SearchBar;