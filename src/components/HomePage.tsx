import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';

// Компонент домашней страницы
interface HomePageProps {
  onStartLearning: () => void;
}

const HomePage: React.FC<HomePageProps> = ({ onStartLearning }) => {
  const { theme } = useTheme();
  const { t } = useLanguage();

  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center">
      <h1 className="text-4xl font-bold text-indigo-600 mb-6">{t('welcome')}</h1>
      <p className={`text-xl mb-8 max-w-2xl ${
        theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
      }`}>
        {t('welcomeText')}
      </p>
      <button
        onClick={onStartLearning}
        className="px-8 py-3 bg-indigo-600 text-white rounded-lg text-lg font-medium hover:bg-indigo-700 transition-colors"
      >
        {t('startLearning')}
      </button>
    </div>
  );
}

export default HomePage;