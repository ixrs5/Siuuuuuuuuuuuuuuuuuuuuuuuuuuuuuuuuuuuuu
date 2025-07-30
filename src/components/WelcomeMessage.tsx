
import React, { useEffect, useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';

const WelcomeMessage: React.FC = () => {
  const { showWelcomeMessage, setShowWelcomeMessage } = useAuth();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (showWelcomeMessage) {
      // Fade in
      setIsVisible(true);
      
      // Start fade out after 3 seconds
      const timer = setTimeout(() => {
        setIsVisible(false);
        // Remove from DOM after fade out animation
        setTimeout(() => {
          setShowWelcomeMessage(false);
        }, 500);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [showWelcomeMessage, setShowWelcomeMessage]);

  if (!showWelcomeMessage) return null;

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm transition-opacity duration-500 ${
      isVisible ? 'opacity-100' : 'opacity-0'
    }`}>
      <div className={`glass-card p-8 max-w-md mx-4 text-center transition-all duration-500 ${
        isVisible ? 'animate-fade-in scale-100' : 'animate-fade-out scale-95'
      }`}>
        <div className="text-6xl mb-4">🚀</div>
        <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Welcome to RST!
        </h2>
        <p className="text-foreground leading-relaxed">
          If you want to know more about this website, visit the Contact page. 
          If you don't like this site… Get Out! 😂
        </p>
      </div>
    </div>
  );
};

export default WelcomeMessage;
