
import React from 'react';
import { useTheme } from '@/contexts/ThemeContext';

const ThemeSelector: React.FC = () => {
  const { theme, setTheme, themes } = useTheme();

  return (
    <div className="flex gap-2">
      {themes.map((t) => (
        <button
          key={t.name}
          onClick={() => setTheme(t.name)}
          className={`w-8 h-8 rounded-full ${t.gradient} transition-all duration-300 ${
            theme === t.name ? 'ring-2 ring-primary scale-110' : 'hover:scale-105'
          }`}
          title={t.label}
        />
      ))}
    </div>
  );
};

export default ThemeSelector;
