import { memo } from 'react';
import { useTheme } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames/classNames';
import ThemeIcon from 'shared/assets/icons/theme-light.svg';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import cls from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = memo((props: ThemeSwitcherProps) => {
  const { className } = props;
  const { toggleTheme } = useTheme();

  return (
    <Button
      theme={ThemeButton.CLEAR}
      onClick={toggleTheme}
      className={classNames('', {}, [className])}
    >
      <ThemeIcon className={cls.themeSvg} />
    </Button>
  );
});
