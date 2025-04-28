import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Check, RefreshCw } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';
import { FlashcardType } from '../types/types';

interface FlashcardProps {
  card: FlashcardType;
  onNextCard: () => void;
  onPrevCard: () => void;
  onReset: () => void;
  currentIndex: number;
  totalCards: number;
}

const Flashcard: React.FC<FlashcardProps> = ({ 
  card, 
  onNextCard, 
  onPrevCard,
  onReset,
  currentIndex,
  totalCards
}) => {
  const { theme } = useTheme();
  const { t, language } = useLanguage();
  const [isFlipped, setIsFlipped] = useState(false);

  const cardStyles = {
    light: {
      front: 'bg-white border border-indigo-100',
      back: 'bg-indigo-50',
      button: 'bg-indigo-100 hover:bg-indigo-200 text-indigo-800'
    },
    dark: {
      front: 'bg-gray-800',
      back: 'bg-indigo-900',
      button: 'bg-gray-700 hover:bg-gray-600 text-white'
    }
  };
  
  return (
    <div className="w-full max-w-xl">
      <div className="relative" style={{ perspective: '1000px' }}>
        <div 
          className="w-full transition-transform duration-700"
          style={{ 
            transformStyle: 'preserve-3d',
            transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
            minHeight: '24rem'
          }}
        >
          <div 
            className={`absolute w-full h-full p-8 rounded-xl shadow-lg cursor-pointer ${
              theme === 'dark' ? cardStyles.dark.front : cardStyles.light.front
            }`}
            style={{ backfaceVisibility: 'hidden' }}
            onClick={() => setIsFlipped(true)}
          >
            <div className="absolute top-4 left-4 px-2 py-1 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200">
              {t(card.category)}
            </div>
            <div className="flex items-center justify-center h-full">
              <div className="text-center">
                <h3 className="text-xl font-bold mb-4">{t('question')}</h3>
                <p className="text-lg">{card.question[language]}</p>
              </div>
            </div>
            <div className="absolute bottom-4 right-4 text-xs opacity-70">
              {t('tapToFlip')}
            </div>
          </div>
          
          <div 
            className={`absolute w-full h-full p-8 rounded-xl shadow-lg cursor-pointer ${
              theme === 'dark' ? cardStyles.dark.back : cardStyles.light.back
            }`}
            style={{ 
              backfaceVisibility: 'hidden',
              transform: 'rotateY(180deg)'
            }}
            onClick={() => setIsFlipped(false)}
          >
            <div className="absolute top-4 left-4 px-2 py-1 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800 dark:bg-indigo-700 dark:text-indigo-100">
              {t(card.category)}
            </div>
            <div className="flex items-center justify-center h-full">
              <div className="text-center">
                <h3 className="text-xl font-bold mb-4">{t('answer')}</h3>
                <p className="text-lg">{card.answer[language]}</p>
              </div>
            </div>
            <div className="absolute bottom-4 right-4 text-xs opacity-70">
              {t('tapToFlipBack')}
            </div>
          </div>
        </div>
      </div>
      
      <div className="flex items-center justify-between mt-6">
        <button
          onClick={onPrevCard}
          className={`flex items-center gap-1 px-4 py-2 rounded-md ${
            theme === 'dark' ? cardStyles.dark.button : cardStyles.light.button
          }`}
        >
          <ChevronLeft size={16} />
          {t('previous')}
        </button>
        
        <div className="text-sm">
          {t('cardCount').replace('{current}', String(currentIndex + 1)).replace('{total}', String(totalCards))}
        </div>
        
        <button
          onClick={onNextCard}
          className="flex items-center gap-1 px-4 py-2 rounded-md bg-indigo-600 hover:bg-indigo-700 text-white"
        >
          {t('next')}
          <ChevronRight size={16} />
        </button>
      </div>
      
      <div className="flex justify-center gap-4 mt-4">
        <button
          onClick={() => {
            setIsFlipped(false);
            onReset();
          }}
          className={`flex items-center gap-1 px-3 py-1 rounded-md text-sm ${
            theme === 'dark' ? cardStyles.dark.button : cardStyles.light.button
          }`}
        >
          <RefreshCw size={14} />
          {t('reset')}
        </button>
        
        <button
          onClick={onNextCard}
          className="flex items-center gap-1 px-3 py-1 rounded-md text-sm bg-green-600 hover:bg-green-700 text-white"
        >
          <Check size={14} />
          {t('markAsLearned')}
        </button>
      </div>
    </div>
  );
};

export default Flashcard;