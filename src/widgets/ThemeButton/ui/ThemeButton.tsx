import React from 'react';
import { useTheme } from 'app/providers/ThemeProvider/lib/useTheme';
import Icon from 'shared/assets/icons/theme.svg';
import { Button } from 'shared/ui/Button';
import cls from './ThemeButton.module.scss';

const ThemeButton = () => {
  const { toggleTheme } = useTheme();

  return (
    <Button onClick={toggleTheme}>
      <div className={cls.icon}>
        <Icon />
      </div>
    </Button>
  );
};

export default ThemeButton;
