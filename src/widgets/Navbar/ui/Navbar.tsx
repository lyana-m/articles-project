import React, { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button';
import { Modal } from 'shared/ui/Modal';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

const Navbar = ({ className }: NavbarProps) => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const { t } = useTranslation();

  const handleLoginModalOpen = useCallback(() => {
    setIsLoginModalOpen(true);
  }, []);

  const handleLoginModalClose = useCallback(() => {
    setIsLoginModalOpen(false);
  }, []);

  return (
    <>
      <div className={classNames(cls.Navbar, {}, [className])}>
        <Button onClick={handleLoginModalOpen} className={cls.login} theme="clearInverted">
        {t('Войти')}
        </Button>
      </div>
      <Modal isOpen={isLoginModalOpen} onClose={handleLoginModalClose}>
        MODAL
      </Modal>
    </>
  );
};

export default Navbar;
