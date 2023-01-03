import { FC, useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import UserDetailsHeader from '../../components/users/UserDetailsHeader';
import UserDetailsMain from '../../components/users/UserDetailsMain';
import '../../styles/user-details.scss';
import Loader from '../../components/general/Loader';

interface Props {}

const UserDetail: FC<Props> = () => {
	const [loading, setLoading] = useState<Boolean>(true);
	const [user, setUser] = useState([]);
	const { id } = useParams();

	const fetchUser = async () => {
		setLoading(true);
		await axios
			.get(`${process.env.REACT_APP_API_URL}/users/${id}`)
			.then((response) => {
				setUser(response.data);
				setLoading(false);
			})
			.catch((error) => {
				const err = error.response.data;
				console.log(err);
				setLoading(false);
			});
	};

	useEffect(() => {
		fetchUser();
	}, []);
	return (
		<section className="user-details">
			<Link to="/dashboard/users" className="back">
				<img src="/images/icons/back-icon.svg" alt="back" /> <span>Back to Users</span>
			</Link>
			<div className="header-btns">
				<h1>User Details</h1>
				<div className="">
					<button type="button">BLACKLIST USER</button>
					<button type="button">ACTIVATE USER</button>
				</div>
			</div>
			{loading ? (
				<Loader />
			) : (
				<div>
					<UserDetailsHeader user={user} />
					<UserDetailsMain user={user} />
				</div>
			)}
		</section>
	);
};

export default UserDetail;
