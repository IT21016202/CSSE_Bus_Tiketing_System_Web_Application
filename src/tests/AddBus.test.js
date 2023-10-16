import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; 
import AddBus from '../components/AddBus'; 

describe('AddBus Component', () => {
  it('renders the component without errors', () => {
    render(<AddBus />);
  });

  it('submits the form with valid data', () => {
    const { getByText, getByPlaceholderText } = render(<AddBus />);

    fireEvent.change(getByPlaceholderText('Registration Number'), { target: { value: 'NA-0000' } });
    fireEvent.change(getByPlaceholderText('Driver Name'), { target: { value: 'Kamal Perera' } });
    fireEvent.change(getByPlaceholderText('Driver Number'), { target: { value: '0744568974' } });
    
    fireEvent.click(getByText('Register'));

    expect(getByText('Bus Added Successfully!')).toBeInTheDocument();
  });
});
