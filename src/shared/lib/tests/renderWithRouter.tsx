import { render } from '@testing-library/react';
import type { ReactNode } from 'react';
import { BrowserRouter } from 'react-router-dom';

export const renderWithRouter = (component: ReactNode) => render(<BrowserRouter>{component}</BrowserRouter>);
