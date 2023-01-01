import React, { FC } from 'react';
import { Link } from 'react-router-dom';

const userNavItems: String[] = ['General Details', 'Documents', 'Bank Details', 'Loans', 'Savings', 'App and System'];

interface Props {}

const UserDetailsHeader: FC<Props> = () => {
	return (
		<div className="user-header">
			<div className="user-header-info">
				<div>
					<div className="user-avatar">
						<img src="/images/user-avatar.svg" alt="avatar" />
					</div>
					<div>
						<p>Grace Effiom</p>
						<p>LSQFf587g90</p>
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
					<p>₦200,000.00</p>
					<p>9912345678/Providus Bank</p>
				</div>
			</div>
			<div className="user-header-nav">
				{userNavItems.map((item, index) => {
					return (
						<Link to="#">
							<div>{item}</div>
						</Link>
					);
				})}
			</div>
		</div>
	);
};

export default UserDetailsHeader;
