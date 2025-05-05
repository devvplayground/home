import { useTheme } from './ThemeProvider';
import { Sun, Moon } from 'lucide-react';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-3 rounded-full bg-gray-200 dark:bg-neutral-800 transition-all fixed bottom-8 right-8 z-50" // Added fixed positioning
    >
      {theme === 'dark' ? <Sun className="text-yellow-400" /> : <Moon className="text-blue-600" />}
    </button>
  );
};

export default ThemeToggle;
