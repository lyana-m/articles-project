import { useContext, useEffect } from 'react';
import { ThemeContext, Themes, LOCAL_STORAGE_THEME_KEY } from './ThemeContext';

interface UseThemeResult {
  theme: Themes;
  toggleTheme: () => void;
}

export const useTheme = (): UseThemeResult => {
  const { theme = Themes.LIGHT, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    let newTheme: Themes;
    switch (theme) {
      case Themes.DARK:
        newTheme = Themes.LIGHT;
        break;
      case Themes.LIGHT:
        newTheme = Themes.ORANGE;
        break;
      case Themes.ORANGE:
        newTheme = Themes.DARK;
        break;
      default:
        newTheme = Themes.LIGHT;
    }
    setTheme?.(newTheme);
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
  };

  useEffect(() => {
    document.body.classList.add(theme);

    return () => {
      document.body.classList.remove(theme);
    };
  }, [theme]);

  return { theme, toggleTheme };
};
