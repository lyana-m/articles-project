import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const BugButton = () => {
  const [error, setError] = useState(false);

  const { t } = useTranslation();

  const onThrow = () => {
    setError(true);
  };

  useEffect(() => {
    if (error) {
      throw new Error('Internal Error');
    }
  }, [error]);

  return <button onClick={onThrow}>{t('Бросить ошибку')}</button>;
};

export default BugButton;
