import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';
import Layout from './components/Layout';
import { useState } from 'react';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import FlashcardApp from './components/FlashcardApp';

// Основной компонент приложения
function App() {
  // Состояние для отслеживания текущей страницы
  const [currentPage, setCurrentPage] = useState<'home' | 'about' | 'cards'>('home');

  return (
    <ThemeProvider>
      <LanguageProvider>
        <Layout onPageChange={setCurrentPage} currentPage={currentPage}>
          {/* Условный рендеринг компонентов в зависимости от текущей страницы */}
          {currentPage === 'home' && <HomePage onStartLearning={() => setCurrentPage('cards')} />}
          {currentPage === 'about' && <AboutPage />}
        </Layout>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
