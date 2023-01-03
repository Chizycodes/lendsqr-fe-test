import React from 'react';
import { act, fireEvent, render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import Login from '../pages/Login';
import { BrowserRouter } from 'react-router-dom';

describe('Login component', () => {
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

	it('should show error messages when required fields are empty', async () => {
		render(
			<BrowserRouter>
				<Login />
			</BrowserRouter>
		);

		const submitButton = screen.getByRole('button');
		await userEvent.click(submitButton);

		waitFor(() => {
			const emailError = screen.getByText(/please enter your email/i);
			expect(emailError).toBeInTheDocument();
		});
	});

	it('should allow a user to submit their email and password', () => {
		render(
			<BrowserRouter>
				<Login />
			</BrowserRouter>
		);

		const emailField = screen.getByPlaceholderText(/email/i);
		const passwordField = screen.getByPlaceholderText(/password/i);
		const submitButton = screen.getByRole('button');

		userEvent.type(emailField, 'okwudirejoy@gmail.com');
		userEvent.type(passwordField, 'password');
		userEvent.click(submitButton);
	});
});
