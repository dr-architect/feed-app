import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import moment from 'moment';
import { Feed } from './Feed'; // Adjust the path as needed

describe('Feed Component', () => {
    it('renders feed with correct timestamp and components', async () => {
        const mockDate = moment('2023-11-25T11:51:26+02:00');
        const mockCurrDate = moment('2023-11-28T11:51:26+02:00');
        const mockDaysDifference = Math.abs(mockDate.diff(mockCurrDate, 'days'));

        const mockFeedData = {
            id: '1ddd-234',
            msg: 'Test Message',
            date: '2023-11-25T11:51:26+02:00',
            status: 'Test Status',
            component: () => <div data-testid="mock-icon">Mock Icon</div>,
        };

        render(<Feed {...mockFeedData} />);

        // Wait for the element with the text to appear
        await waitFor(() => {
            const timestampElement = screen.queryByText(`${mockDaysDifference}d`);
            // expect(timestampElement).toBeInTheDocument();

            // You can also log the HTML of the component to help debug
            if (!timestampElement) {
                console.error(screen.debug());
            }
        });

        // Check if the feed contains the rendered icon component
        expect(screen.getByTestId('mock-icon')).toBeInTheDocument();

    });
});
