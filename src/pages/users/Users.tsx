import '../../styles/users/users.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import UsersStats from '../../components/users/UsersStats';
import UsersTable from '../../components/users/UsersTable';

const Users = () => {
	const [loading, setLoading] = useState(false);
	const [users, setUsers] = useState([]);

	const fetchUsers = async () => {
		setLoading(true);
		await axios
			.get('https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users')
			.then((response) => {
				console.log(response.data, 'data');
				setUsers(response.data);
				setLoading(false);
			})
			.catch((error) => {
				const err = error.response.data;
				console.log(err);
				setLoading(false);
			});
	};

	useEffect(() => {
		fetchUsers();
	}, []);

	return (
		<section className="users">
			<h1>Users</h1>
			<div>
				<UsersStats />
				<UsersTable users={users} />
			</div>
		</section>
	);
};

export default Users;
