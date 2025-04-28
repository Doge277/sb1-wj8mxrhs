// Интерфейс для мультиязычного текста
interface MultilingualText {
  en: string;
  ru: string;
}

// Интерфейс для карточки с вопросами
export interface FlashcardType {
  id: number;
  category: string;
  question: MultilingualText;
  answer: MultilingualText;
}