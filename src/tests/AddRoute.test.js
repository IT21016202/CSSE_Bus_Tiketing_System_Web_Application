import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; 
import AddRoute from '../components/AddRoute';

describe('AddRoute Component', () => {
  it('renders the component without errors', () => {
    render(<AddRoute />);
  });

  it('submits the form with valid data', () => {
    const { getByText, getByPlaceholderText } = render(<AddRoute />);

    fireEvent.change(getByPlaceholderText('Route Number'), { target: { value: 'R123' } });
    fireEvent.change(getByPlaceholderText('Starting Point'), { target: { value: 'Point A' } });
    fireEvent.change(getByPlaceholderText('Destination'), { target: { value: 'Point B' } });

    fireEvent.click(getByText('Register'));

    expect(getByText('Route Added Successfully!')).toBeInTheDocument();
  });
});
