import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Card } from './Card'; // Adjust the path as needed
import { Users } from '../../constants/users';

describe('Card Component', () => {
    it('renders card with message and users', () => {
        const testMessage = 'Test Message';
        const testStatusMessage = 'Test Status Message';

        render(<Card msg={testMessage} status={testStatusMessage}/>);

        // Check if the card contains the message and users
        expect(screen.getByText(testMessage)).toBeInTheDocument();
        expect(screen.getByText(testStatusMessage)).toBeInTheDocument();
        expect(screen.getByText(Users.current)).toBeInTheDocument();
        expect(screen.getByText(Users.contact)).toBeInTheDocument();
    });
});
