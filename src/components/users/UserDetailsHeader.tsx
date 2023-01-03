import React, { FC } from 'react';
import { Link } from 'react-router-dom';

const userNavItems: String[] = ['General Details', 'Documents', 'Bank Details', 'Loans', 'Savings', 'App and System'];

interface Props {
    user: any;
}

const UserDetailsHeader: FC<Props> = ({user}) => {
	return (
		<div className="user-header">
			<div className="user-header-info">
				<div>
					<div className="user-avatar">
						<img src={user?.profile?.avatar || '/images/user-avatar.svg'} alt="avatar" />
					</div>
					<div>
						<p>{`${user?.profile?.firstName} ${user?.profile?.lastName}`}</p>
						<p>{user?.profile?.bvn}</p>
					</div>
				</div>

				<div className="user-tier">
					<p>User’s Tier</p>
					<div className="star-rating">
						<img src="/images/icons/star-filled.svg" alt="star" />
						<img src="/images/icons/star-outline.svg" alt="star" />
						<img src="/images/icons/star-outline.svg" alt="star" />
					</div>
				</div>

				<div>
					<p>₦{user?.accountBalance}</p>
					<p>{user?.accountNumber}/Providus Bank</p>
				</div>
			</div>
			<div className="user-header-nav">
				{userNavItems.map((item, index) => {
					return (
						<Link key={index} to="#">
							<div>{item}</div>
						</Link>
					);
				})}
			</div>
		</div>
	);
};

export default UserDetailsHeader;
