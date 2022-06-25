import React from 'react';
import { screen } from '@testing-library/react';
import Login from '../pages/Login';
import renderWithRouter from './renderWithRouter';
// import userEvent from '@testing-library/user-event';

describe('Testa o componente Login', () => {
  it('Testa se os campos de input estão na tela"', () => {
    renderWithRouter(<Login />);
    const emailInput = screen.getByRole('input', { name: /email/i });
    console.log(emailInput);
    expect(emailInput).toBeInTheDocument();
  });
});
