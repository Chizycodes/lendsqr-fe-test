import React from 'react';
import { Route, Routes } from 'react-router-dom';
import DashboardLayout from './layout/DashboardLayout';
import Login from './pages/Login';
import UserDetail from './pages/users/UserDetail';
import Users from './pages/users/Users';

function App() {
	return (
		<div>
			<Routes>
				<Route path="/" element={<Login />} />
				<Route path="/login" element={<Login />} />

				<Route path="/dashboard/*" element={<DashboardLayout />}>
					<Route index element={<Users />} />
					<Route index path="users" element={<Users />} />
					<Route path="users/:id" element={<UserDetail />} />
				</Route>

				<Route path="*" element={<h1>PAGE NOT FOUND</h1>} />
			</Routes>
		</div>
	);
}

export default App;
