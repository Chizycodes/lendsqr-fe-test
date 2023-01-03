import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Login from '../pages/Login';
import { BrowserRouter } from 'react-router-dom';

it('should have an email and password field, and a submit button', () => {
	render(
		<BrowserRouter>
			<Login />
		</BrowserRouter>
	);

	const emailField = screen.getByPlaceholderText(/email/i);
	const passwordField = screen.getByPlaceholderText(/password/i);
	const submitButton = screen.getByRole('button');

	expect(emailField).toBeInTheDocument();
	expect(passwordField).toBeInTheDocument();
	expect(submitButton).toBeInTheDocument();
});

it("should allow a user to submit their email and password", () => {
    render(
        <BrowserRouter>
            <Login />
        </BrowserRouter>
    );

    const emailField = screen.getByPlaceholderText(/email/i);
    const passwordField = screen.getByPlaceholderText(/password/i);
    const submitButton = screen.getByRole('button');

    userEvent.type(emailField, "okwudirejoy@gmail.com");
    userEvent.type(passwordField, "password");
    userEvent.click(submitButton);
})
