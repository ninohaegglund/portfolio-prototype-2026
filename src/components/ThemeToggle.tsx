import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/hooks/use-theme';

interface Props {
  className?: string;
}

const ThemeToggle = ({ className = '' }: Props) => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      onClick={toggleTheme}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      className={`relative inline-flex items-center justify-center h-9 w-9 rounded-full border border-border/70 bg-card/60 backdrop-blur text-muted-foreground hover:text-foreground hover:bg-card transition-all duration-300 shadow-soft ${className}`}
    >
      <Sun
        size={16}
        className={`absolute transition-all duration-300 ${isDark ? 'opacity-0 -rotate-90 scale-75' : 'opacity-100 rotate-0 scale-100'}`}
      />
      <Moon
        size={16}
        className={`absolute transition-all duration-300 ${isDark ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 rotate-90 scale-75'}`}
      />
    </button>
  );
};

export default ThemeToggle;
