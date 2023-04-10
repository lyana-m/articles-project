import React from "react";
import { useTheme } from "app/providers/ThemeProvider/lib/useTheme";
import IconLight from "shared/assets/icons/theme-light.svg";
import IconDark from "shared/assets/icons/theme-dark.svg";
import { Themes } from "app/providers/ThemeProvider";
import { Button } from "shared/ui/Button";

const ThemeButton = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button onClick={toggleTheme}>
      {theme === Themes.LIGHT ? <IconLight /> : <IconDark />}
    </Button>
  );
};

export default ThemeButton;
