import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ActionDropDown } from './ActionDropDown'; // Adjust the path as needed

describe('DropDown Component', () => {
    it('renders drop-down and calls handleDeleteItem on click', () => {
        // Mock handleDeleteItem function
        const mockHandleDeleteItem = jest.fn();

        render(<ActionDropDown handleDeleteItem={mockHandleDeleteItem} />);

        // Simulate a click on the "Delete" item
        const deleteItem = screen.getByText('Delete');
        fireEvent.click(deleteItem);

        // Check if handleDeleteItem was called
        expect(mockHandleDeleteItem).toHaveBeenCalledTimes(1);
    });
});
