import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Counter from './Counter';
import { renderComponent } from '@/shared/lib/tests/renderComponent';

describe('Counter', () => {
  it('should render counter', () => {
    const initialState = { counter: { value: 10 } };
    renderComponent(<Counter />, { initialState });

    expect(screen.getByText(10)).toBeInTheDocument();
  });

  it('should increment counter', () => {
    const initialState = { counter: { value: 10 } };
    renderComponent(<Counter />, { initialState });

    userEvent.click(screen.getByRole('button', { name: '+' }));

    expect(screen.getByText(11)).toBeInTheDocument();
  });

  it('should decrement counter', () => {
    const initialState = { counter: { value: 10 } };
    renderComponent(<Counter />, { initialState });

    userEvent.click(screen.getByRole('button', { name: '-' }));

    expect(screen.getByText(9)).toBeInTheDocument();
  });
});
