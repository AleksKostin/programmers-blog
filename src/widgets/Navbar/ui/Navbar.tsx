/* eslint-disable max-len */
/* eslint-disable i18next/no-literal-string */
import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { Modal } from 'shared/ui/Modal/Modal';
import { Portal } from 'shared/ui/Portal/Portal';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();

  const [isAuthModal, setAuthModal] = useState(false);

  const onToggleModal = useCallback(() => {
    setAuthModal((prev) => !prev);
  }, []);

  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <Button
        type="button"
        className={cls.links}
        onClick={onToggleModal}
        theme={ThemeButton.CLEAR_INVERTED}
      >
        {t('signIn')}
      </Button>
      <Portal element={document.querySelector('.app')}>
        <Modal isOpen={isAuthModal} onClose={onToggleModal}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus, delectus. Explicabo, harum nobis unde rem nulla quis mollitia labore eaque autem voluptatibus quam, veritatis sunt quo fugit excepturi. Dicta, consequatur.
        </Modal>
      </Portal>
    </div>
  );
};
