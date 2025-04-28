import React, { useState, useEffect } from 'react';
import CategorySelector from './CategorySelector';
import Flashcard from './Flashcard';
import { flashcardData } from '../data/flashcardData';
import SearchBar from './SearchBar';
import ProgressBar from './ProgressBar';
import { Shuffle, Star } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';
import Confetti from 'react-confetti';

// Принимаем проп onGoHome
const FlashcardApp: React.FC<{ onGoHome: () => void }> = ({ onGoHome }) => {
  const { theme } = useTheme();
  const { t, language } = useLanguage();

  const [currentCategory, setCurrentCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [currentCardIndex, setCurrentCardIndex] = useState<number>(0);
  const [studiedCards, setStudiedCards] = useState<Set<number>>(new Set());
  const [showConfetti, setShowConfetti] = useState(false);
  const [windowSize, setWindowSize] = useState({ width: window.innerWidth, height: window.innerHeight });
  const [shuffledCards, setShuffledCards] = useState(flashcardData);

  // Отслеживаем изменение размера окна для конфетти
  const handleResize = () => {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Фильтрация карточек по категории и поиску
  const filteredCards = flashcardData.filter(card => 
    (currentCategory === 'all' || card.category === currentCategory) &&
    (searchQuery === '' || 
      card.question[language].toLowerCase().includes(searchQuery.toLowerCase()) ||
      card.answer[language].toLowerCase().includes(searchQuery.toLowerCase()))
  );

  // Обновляем перемешанные карточки, если изменился фильтр
  useEffect(() => {
    setShuffledCards(filteredCards);
    setCurrentCardIndex(0);
  }, [filteredCards]);

  const totalCards = shuffledCards.length;
  const studiedCount = Array.from(studiedCards).filter(id => shuffledCards.some(card => card.id === id)).length;
  const progress = totalCards > 0 ? (studiedCount / totalCards) * 100 : 0;

  useEffect(() => {
    if (progress === 100) {
      setShowConfetti(true);
      const timer = setTimeout(() => setShowConfetti(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [progress]);

  // Перемешивание карточек
  const shuffleCards = () => {
    if (shuffledCards.length === 0) return;
    const shuffled = [...shuffledCards].sort(() => Math.random() - 0.5);
    setShuffledCards(shuffled);
    setCurrentCardIndex(0);
  };

  const handleNextCard = () => {
    if (totalCards === 0) return;
    setStudiedCards(prev => new Set(prev.add(shuffledCards[currentCardIndex].id)));
    setCurrentCardIndex(prevIndex => (prevIndex < totalCards - 1 ? prevIndex + 1 : 0));
  };

  const handlePrevCard = () => {
    if (totalCards === 0) return;
    const currentCardId = shuffledCards[currentCardIndex].id;
    setStudiedCards(prev => {
      const newSet = new Set(prev);
      newSet.delete(currentCardId);
      return newSet;
    });
    setCurrentCardIndex(prevIndex => (prevIndex > 0 ? prevIndex - 1 : totalCards - 1));
  };

  const handleReset = () => {
    setStudiedCards(new Set());
    setCurrentCardIndex(0);
  };

  const handleCategoryChange = (category: string) => {
    setCurrentCategory(category);
    setCurrentCardIndex(0);
    setStudiedCards(new Set());
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setCurrentCardIndex(0);
  };

  return (
    <div className="flex flex-col space-y-8">
      {showConfetti && (
        <Confetti width={windowSize.width} height={windowSize.height} recycle={false} numberOfPieces={200} />
      )}

      <div className="text-center">
        <h1 className="text-3xl font-bold mb-2">{t('title')}</h1>
        <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} max-w-2xl mx-auto`}>
          {t('subtitle')}
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-4 justify-between">
        <CategorySelector currentCategory={currentCategory} setCurrentCategory={handleCategoryChange} />
        <SearchBar searchQuery={searchQuery} setSearchQuery={handleSearch} />
      </div>

      <div className="flex items-center justify-between mb-2">
        <h2 className="text-xl font-semibold">
          {currentCategory === 'all' ? t('allTopics') : t(currentCategory)}
        </h2>
        <button
          onClick={shuffleCards}
          className="flex items-center gap-1 px-3 py-1 rounded-md text-sm bg-indigo-100 text-indigo-700 hover:bg-indigo-200 dark:bg-indigo-900 dark:text-indigo-200 dark:hover:bg-indigo-800 transition-colors"
          aria-label={t('shuffle')}
        >
          <Shuffle size={16} />
          {t('shuffle')}
        </button>
      </div>

      <ProgressBar progress={progress} />

      <div className="flex justify-center my-8">
        {progress === 100 ? (
          <div className={`p-8 rounded-xl text-center ${theme === 'dark' ? 'bg-indigo-900' : 'bg-indigo-50'}`}>
            <Star className="w-16 h-16 text-yellow-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">{t('completionMessage')}</h3>
            <p className="mb-6">{t('congratulations')}</p>
          </div>
        ) : totalCards > 0 ? (
          <Flashcard
            card={shuffledCards[currentCardIndex]}
            onNextCard={handleNextCard}
            onPrevCard={handlePrevCard}
            onReset={handleReset}
            currentIndex={currentCardIndex}
            totalCards={shuffledCards.length}
          />
        ) : (
          <div className={`p-10 rounded-lg text-center ${theme === 'dark' ? 'bg-gray-800' : 'bg-indigo-50'}`}>
            <p className="text-xl">{t('noCardsFound')}</p>
            <p className="mt-2">{t('tryDifferent')}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default FlashcardApp
