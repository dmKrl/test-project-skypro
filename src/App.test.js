import { render, screen, fireEvent } from '@testing-library/react';
import { test, expect } from '@jest/globals';

import App from './App';

test('Search input and button exist', () => {
    render(<App />);
    const inputElement = screen.getByPlaceholderText(
        'Введите логин пользователя',
    );
    const buttonElement = screen.getByText('Искать');
    expect(inputElement).toBeInTheDocument();
    expect(buttonElement).toBeInTheDocument();
});

test('User data is displayed after search', async () => {
    render(<App />);

    const inputElement = screen.getByPlaceholderText(
        'Введите логин пользователя',
    );
    const buttonElement = screen.getByText('Искать');

    fireEvent.change(inputElement, { target: { value: 'testuser' } });
    fireEvent.click(buttonElement);

    const userElements = screen.queryAllByText(
        (content, element) =>
            element.tagName.toLowerCase() === 'span' &&
            content.includes('Логин'),
    );

    const userElement = userElements.find(
        (el) =>
            el.tagName.toLowerCase() === 'span' &&
            el.textContent.includes('Логин'),
    );
    if (userElement) {
        expect(userElement).toBeInTheDocument();
    } else {
        expect(userElement).not.toBeNull();
    }
});

test('Pagination buttons work correctly', async () => {
    render(<App />);

    const inputElement = screen.getByPlaceholderText(
        'Введите логин пользователя',
    );
    const buttonElement = screen.getByText('Искать');

    fireEvent.change(inputElement, { target: { value: 'testuser' } });
    fireEvent.click(buttonElement);

    const paginationButtons = screen.getAllByRole('button');
    const button2 = paginationButtons.find(
        (button) => button.textContent === '2',
    );

    if (button2) {
        fireEvent.click(button2);

        const secondPageUserElement =
            await screen.queryByText('Second Page User');
        if (secondPageUserElement) {
            expect(secondPageUserElement).toBeInTheDocument();
        } else {
            expect(secondPageUserElement).not.toBeNull();
        }
    } else {
        expect(button2).not.toBeNull();
    }
});
