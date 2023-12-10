import { screen, fireEvent } from '@testing-library/react';
import Sidebar from './Sidebar';
import { renderComponent } from '@/shared/lib/tests/renderComponent';

describe('Sidebar', () => {
  it('should render', () => {
    renderComponent(<Sidebar />);

    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });

  it('should collapse', () => {
    renderComponent(<Sidebar />);

    expect(screen.getByTestId('sidebar')).not.toHaveClass('collapsed');

    fireEvent.click(screen.getByRole('button', { name: '<' }));

    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
  });
});
