import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Icon } from './Icon';

describe('Icon Component', () => {
    it('renders Icon and calls handleIcon on click', () => {
        const mockHandleIcon = jest.fn();
        const MockComponent: React.FC = () => <div data-testid="mock-component" />;

        render(<Icon id={1} activeIcon={2} component={MockComponent} handleIcon={mockHandleIcon} />);

        // Check if Icon component is rendered
        const iconComponent = screen.getByTestId('mock-component');
        expect(iconComponent).toBeInTheDocument();

        // Simulate a click on the Icon component
        fireEvent.click(iconComponent);

        // Check if handleIcon was called with the correct arguments
        expect(mockHandleIcon).toHaveBeenCalledWith(1);
    });
});
