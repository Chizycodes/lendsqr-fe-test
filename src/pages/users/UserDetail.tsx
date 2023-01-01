import { FC } from 'react';
import { Link } from 'react-router-dom';
import UserDetailsHeader from '../../components/users/UserDetailsHeader';
import "../../styles/user-details/user-details.css";

interface Props {}
const UserDetail: FC<Props> = () => {
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
			<div>
				<UserDetailsHeader />
			</div>
		</section>
	);
};

export default UserDetail;
