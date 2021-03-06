import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { IntlProvider } from 'react-intl';
import translations from 'localization/data';
import HomePage from './HomePage';

describe('Test home page component', () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <IntlProvider locale="en" messages={translations.en.translation}>
          <HomePage />
        </IntlProvider>
      </BrowserRouter>
    );
  });

  it('should render heading', () => {
    expect(
      screen.getByRole('heading', { name: 'Trello clone' })
    ).toBeInTheDocument();
  });

  it('should render "Get started" link', () => {
    expect(
      screen.getByRole('link', { name: 'Get started' })
    ).toBeInTheDocument();
  });
});
