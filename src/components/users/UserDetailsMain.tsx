import React, { FC } from 'react';
import UserInfoCard from './UserInfoCard';

interface Props {}

const UserDetailsMain: FC<Props> = () => {
	return (
		<div className="user-details-main">
			<UserInfoCard />
		</div>
	);
};

export default UserDetailsMain;
