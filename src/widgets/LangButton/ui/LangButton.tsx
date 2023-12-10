import React from 'react';
import { useTranslation } from 'react-i18next';
import cn from 'classnames';
import { Button } from '@/shared/ui/Button';

interface LangButtonProps {
  className?: string;
}

const LangButton = ({ className }: LangButtonProps) => {
  const { t, i18n } = useTranslation();

  const currentLang = i18n.language;

  const toggleLanguage = () => {
    i18n.changeLanguage(currentLang === 'en' ? 'ru' : 'en');
  };

  return (
    <Button theme="clear" className={cn('', className)} onClick={toggleLanguage}>
      {t('Язык')}
    </Button>
  );
};

export default LangButton;
