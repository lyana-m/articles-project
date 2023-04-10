import React from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { Button } from "shared/ui/Button";
import { ButtonTheme } from "shared/ui/Button/ui/Button";
import cls from './LangButtom.module.scss';

interface LangButtonProps {
  className?: string;
}

const LangButton = ({ className }: LangButtonProps) => {
  const { t, i18n } = useTranslation();

  const currentLang = i18n.language;

  const toggleLanguage = () => {
    i18n.changeLanguage(currentLang === "en" ? "ru" : "en");
  };

  return (
    <Button
      theme={ButtonTheme.CLEAR}
      className={classNames(cls.LangButton, {}, [className])}
      onClick={toggleLanguage}
    >
      {t('Язык')}
    </Button>
  );
};

export default LangButton;
