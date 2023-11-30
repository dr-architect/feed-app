import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { IconsList } from './IconsList';
import {FeedTypes} from "../../constants/feedTypes";

describe('IconsList Component', () => {
    it('renders IconsList and calls handleIcon on Icon click', () => {
        const mockHandleIcon = jest.fn();
        const mockIcons = [
            { id: 1, type: FeedTypes.message, text: 'test text', component: jest.fn() },
            { id: 2, type: FeedTypes.message, text: 'test text',component: jest.fn() },
        ];

        render(<IconsList icons={mockIcons} activeIcon={2} handleIcon={mockHandleIcon} />);

        // Simulate a click on the first Icon
        fireEvent.click(screen.getByTestId('icon-1'));

        // Check if handleIcon was called with the correct arguments for the first icon
        expect(mockHandleIcon).toHaveBeenCalledWith(1);

        // Simulate a click on the second Icon
        fireEvent.click(screen.getByTestId('icon-2'));

        // Check if handleIcon was called with the correct arguments for the second icon
        expect(mockHandleIcon).toHaveBeenCalledWith(2);
    });
});
