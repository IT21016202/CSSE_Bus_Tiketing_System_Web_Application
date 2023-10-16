import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PlanSchedule from './PlanSchedule';

describe('PlanSchedule Component', () => {
  it('renders the component without errors', () => {
    render(<PlanSchedule />);
  });

  it('submits the form with valid data', () => {
    const { getByText, getByPlaceholderText, getByDisplayValue } = render(<PlanSchedule />);

    // Simulate user input
    fireEvent.change(getByPlaceholderText('Timetable ID'), { target: { value: 'T123' } });
    fireEvent.change(getByPlaceholderText('Start Time'), { target: { value: '08:00 AM' } });
    fireEvent.change(getByPlaceholderText('Stop Time'), { target: { value: '10:00 AM' } });

    const selectBusNumber = getByPlaceholderText('--- Select Bus Number ---');
    fireEvent.change(selectBusNumber, { target: { value: 'Bus001' } });

    const selectRouteNumber = getByPlaceholderText('--- Select Route Number ---');
    fireEvent.change(selectRouteNumber, { target: { value: 'R123' } });

    fireEvent.change(getByPlaceholderText('Charge'), { target: { value: '10' } });

    fireEvent.click(getByText('Add Timetable'));

    expect(getByText('Schedule Added Successfully!')).toBeInTheDocument();
  });
});
