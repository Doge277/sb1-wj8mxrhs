import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { useTheme } from '../context/ThemeContext';

// Интерфейс для пропсов компонента Layout
interface LayoutProps {
  children: React.ReactNode;
  onPageChange: (page: 'home' | 'about' | 'cards') => void;
  currentPage: string;
}

// Компонент макета приложения
const Layout: React.FC<LayoutProps> = ({ children, onPageChange, currentPage }) => {
  const { theme } = useTheme();
  
  return (
    <div className={`min-h-screen flex flex-col ${
      theme === 'dark' 
        ? 'bg-gray-900 text-gray-100' 
        : 'bg-gray-50 text-gray-900'
    }`}>
      <Navbar onPageChange={onPageChange} currentPage={currentPage} />
      <main className="flex-grow container mx-auto px-4 py-8">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;