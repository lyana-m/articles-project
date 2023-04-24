import { render } from '@testing-library/react';
import { type DeepPartial } from '@reduxjs/toolkit';
import type { ReactNode } from 'react';
import { MemoryRouter } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import { StoreProvider } from 'app/providers/StoreProvider';
import { type StoreSchema } from 'app/providers/StoreProvider/config/StoreSchema';
import i18n from 'shared/config/i18n/i18nForTests';

interface RenderComponentOptions {
  route?: string;
  initialState?: DeepPartial<StoreSchema>;
}

export const renderComponent = (component: ReactNode, options: RenderComponentOptions = {}) => {
  const { route = '/', initialState } = options;

  return render(
    <StoreProvider initialState={initialState}>
      <MemoryRouter initialEntries={[route]}>
        <I18nextProvider i18n={i18n}>{component}</I18nextProvider>
      </MemoryRouter>
    </StoreProvider>
  );
};
