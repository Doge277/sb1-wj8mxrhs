import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';

interface ProgressBarProps {
  progress: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => {
  const { theme } = useTheme();
  const { t } = useLanguage();
  
  const formattedProgress = Math.round(progress * 10) / 10;
  
  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-1">
        <span className="text-sm font-medium">{t('learningProgress')}</span>
        <span className={`text-sm font-medium ${
          theme === 'dark' ? 'text-indigo-300' : 'text-indigo-600'
        }`}>
          {formattedProgress}%
        </span>
      </div>
      <div className={`w-full h-2.5 rounded-full ${
        theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'
      }`}>
        <div 
          className="h-2.5 rounded-full bg-gradient-to-r from-indigo-500 to-indigo-600"
          style={{ width: `${progress}%`, transition: 'width 0.5s ease-in-out' }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;