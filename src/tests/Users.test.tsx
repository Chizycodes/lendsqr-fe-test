import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import Users from '../pages/users/Users';

const server = setupServer(
	rest.get(`${process.env.REACT_APP_API_URL}/users`, (req, res, ctx) => {
		return res(ctx.json({ orgName: 'helloworld' }));
	})
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('Users list component', () => {
	it('should display users stats and table after fetching users data from api', async () => {
		render(<Users />);

		const usersStats = screen.getByTestId('users-stats');
		expect(usersStats).toBeInTheDocument();

		waitFor(() => {
			const table = screen.getByTestId('user-table');
			expect(table).toBeInTheDocument();
		});
	});
});
