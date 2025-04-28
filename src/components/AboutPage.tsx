import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';

const AboutPage: React.FC = () => {
  const { theme } = useTheme();
  const { t } = useLanguage();

  return (
    <div className="max-w-4xl mx-auto py-12">
      <h1 className="text-3xl font-bold text-center text-indigo-600 mb-12">
        {t('aboutTitle')}
      </h1>
      <div className="grid md:grid-cols-3 gap-8">
        <div className={`p-6 rounded-lg shadow-lg ${
          theme === 'dark' ? 'bg-gray-800' : 'bg-indigo-50'
        }`}>
          <h3 className="text-xl font-semibold mb-2">{t('teamMembers.designer.name')}</h3>
          <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} mb-4`}>
            {t('teamMembers.designer.role')}
          </p>
        </div>

        <div className={`p-6 rounded-lg shadow-lg ${
          theme === 'dark' ? 'bg-gray-800' : 'bg-indigo-50'
        }`}>
          <h3 className="text-xl font-semibold mb-2">{t('teamMembers.frontend.name')}</h3>
          <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} mb-4`}>
            {t('teamMembers.frontend.role')}
          </p>
        </div>

        <div className={`p-6 rounded-lg shadow-lg ${
          theme === 'dark' ? 'bg-gray-800' : 'bg-indigo-50'
        }`}>
          <h3 className="text-xl font-semibold mb-2">{t('teamMembers.content.name')}</h3>
          <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} mb-4`}>
            {t('teamMembers.content.role')}
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;