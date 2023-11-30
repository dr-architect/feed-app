import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { FeedsContextProvider } from '../../contexts/feed-context-provider';
import { ActionItem } from './ActionItem';

const MockedComponent: React.FC = () => {
    return (
        <FeedsContextProvider>
            <ActionItem id={'testID'} />
        </FeedsContextProvider>
    );
};

describe('ActionItem Component', () => {
    it('renders ActionItem and calls handleDeleteItem on ActionDropDown click', () => {
        render(<MockedComponent />);

        // Check if ActionDropDown component is rendered
        const actionDropDownComponent = screen.getByTestId('action-drop-down');
        expect(actionDropDownComponent).toBeInTheDocument();

        // Simulate a click on the ActionDropDown component
        fireEvent.click(actionDropDownComponent);

        // Check if the FeedItem with id 1 is removed from the feeds
        expect(screen.queryByText('Hello 1')).not.toBeInTheDocument();
    });
});
