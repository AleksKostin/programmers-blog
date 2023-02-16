import { render, screen } from '@testing-library/react';
import { Button } from 'shared/ui/Button/Button';
import { ThemeButton } from './Button';

describe('button component', () => {
  test('Have the text', () => {
    render(<Button>TEST</Button>);
    expect(screen.getByText('TEST')).toBeInTheDocument();
  });

  test('Have the class', () => {
    render(<Button theme={ThemeButton.CLEAR}>TEST</Button>);
    expect(screen.getByText('TEST')).toHaveClass('clear');
    screen.debug();
  });
});
