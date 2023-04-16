import { render, screen } from '@testing-library/react';
import Button from './Button';

describe('Button', () => {
  it('should render button name', () => {
    render(<Button>Button name</Button>);

    expect(screen.getByText('Button name')).toBeInTheDocument();
  });

  it('should render button with theme', () => {
    render(<Button theme="clear">Button name</Button>);

    expect(screen.getByText('Button name')).toHaveClass('clear');
  });
});
