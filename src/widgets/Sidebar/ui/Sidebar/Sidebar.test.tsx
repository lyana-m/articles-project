import { screen, fireEvent } from '@testing-library/react';
import Sidebar from './Sidebar';
import { renderWithTransition } from 'shared/lib/tests/renderWithTranslation';

describe('Sidebar', () => {
  it('should render', () => {
    renderWithTransition(<Sidebar />);

    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });

  it('should collapse', () => {
    renderWithTransition(<Sidebar />);

    expect(screen.getByTestId('sidebar')).not.toHaveClass('collapsed');

    fireEvent.click(screen.getByRole('button', { name: 'TOGGLE' }));

    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
  });
});
