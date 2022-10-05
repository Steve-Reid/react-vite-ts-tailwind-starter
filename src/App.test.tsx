import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';

import { App, WrappedApp } from './App';

describe('App', () => {
  it('should render title, React Vite Starter', () => {
    render(<WrappedApp />);

    expect(
      screen.getByRole('heading', {
        level: 1,
      })
    ).toHaveTextContent('React Vite Starter');
  });

  it('should render heading, Home Page', () => {
    render(<WrappedApp />);

    expect(
      screen.getByRole('heading', {
        level: 2,
      })
    ).toHaveTextContent('Home Page');
  });
});

describe('WrappedApp', () => {
  it('should render not found if invalid path', () => {
    render(
      <MemoryRouter initialEntries={['/wrong-path']}>
        <App />
      </MemoryRouter>
    );

    expect(
      screen.getByRole('heading', {
        level: 2,
      })
    ).toHaveTextContent('Not Found!?!');
  });
});
