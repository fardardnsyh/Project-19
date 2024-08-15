import '@testing-library/jest-dom';

import { act, fireEvent, render, screen } from '@testing-library/react';
import React from 'react';

import { CreateAccountForm } from './form';

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve({ countries: [{ label: 'Country 1', value: '1' }] }),
  })
) as jest.Mock<Promise<Response>>;

describe('CreateAccountForm', () => {
  beforeEach(async () => {
    await act(async () => {
      render(<CreateAccountForm />);
    });
  });

  it('renders the form fields', async () => {
    const firstNameInput = screen.getByPlaceholderText('Your first name');
    const lastNameInput = screen.getByPlaceholderText('Your last name');
    const emailInput = screen.getByPlaceholderText('Your email address');
    const locationSelect = screen.getByPlaceholderText('Select your country');
    const linkedInInput = screen.getByPlaceholderText('Your LinkedIn profile');
    const passwordInput = screen.getByPlaceholderText('Your password');
    const continueButton = screen.getByText('Continue');

    expect(firstNameInput).toBeInTheDocument();
    expect(lastNameInput).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(locationSelect).toBeInTheDocument();
    expect(linkedInInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(continueButton).toBeInTheDocument();
  });

  it('submits the form with valid data', async () => {
    const firstNameInput = screen.getByPlaceholderText('Your first name');
    const lastNameInput = screen.getByPlaceholderText('Your last name');
    const emailInput = screen.getByPlaceholderText('Your email address');
    const locationSelect = screen.getByPlaceholderText('Select your country');
    const linkedInInput = screen.getByPlaceholderText('Your LinkedIn profile');
    const passwordInput = screen.getByPlaceholderText('Your password');
    const continueButton = screen.getByText('Continue');

    fireEvent.change(firstNameInput, { target: { value: 'John' } });
    fireEvent.change(lastNameInput, { target: { value: 'Doe' } });
    fireEvent.change(emailInput, { target: { value: 'john@example.com' } });
    fireEvent.change(locationSelect, { target: { value: '1' } });
    fireEvent.change(linkedInInput, {
      target: { value: 'https://www.linkedin.com/johndoe' },
    });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });

    fireEvent.click(continueButton);
  });
});
