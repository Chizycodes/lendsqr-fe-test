import { FC } from 'react';

interface Props {
	user: any;
}

const UserDetailsMain: FC<Props> = ({ user }) => {
	return (
		<div className="user-details-main">
			<div className="user-info-card">
				<h2>Personal Information</h2>
				<div className="user-info-main">
					<div>
						<p>FULL NAME</p>
						<p>{`${user?.profile?.firstName} ${user?.profile?.lastName}`}</p>
					</div>
					<div>
						<p>Phone Number</p>
						<p>{user?.profile?.phoneNumber}</p>
					</div>
					<div>
						<p>Email Address</p>
						<p>{user?.email}</p>
					</div>
					<div>
						<p>Bvn</p>
						<p>{user?.profile?.bvn}</p>
					</div>
					<div>
						<p>Gender</p>
						<p>{user?.profile?.gender}</p>
					</div>
					<div>
						<p>Marital status</p>
						<p>Single</p>
					</div>
					<div>
						<p>Children</p>
						<p>None</p>
					</div>
					<div>
						<p>Type of residence</p>
						<p>Parent’s Apartment</p>
					</div>
				</div>
			</div>

			<div className="user-info-card">
				<h2>Education and Employment</h2>
				<div className="user-info-main">
					<div>
						<p>level of education</p>
						<p>{user?.education?.level}</p>
					</div>
					<div>
						<p>employment status</p>
						<p>{user?.education?.employmentStatus}</p>
					</div>
					<div>
						<p>sector of employment</p>
						<p>{user?.education?.sector}</p>
					</div>
					<div>
						<p>Duration of employment</p>
						<p>{user?.education?.duration}</p>
					</div>
					<div>
						<p>office email</p>
						<p>{user?.education?.officeEmail}</p>
					</div>
					<div>
						<p>Monthly income</p>
						<p>{`₦${user?.education?.monthlyIncome[0]} to ₦${user?.education?.monthlyIncome[1]}`}</p>
					</div>
					<div>
						<p>loan repayment</p>
						<p>{user?.education?.loanRepayment}</p>
					</div>
				</div>
			</div>

			<div className="user-info-card">
				<h2>Socials</h2>
				<div className="user-info-main">
					<div>
						<p>Twitter</p>
						<p>{user?.socials?.twitter}</p>
					</div>
					<div>
						<p>Facebook</p>
						<p>{user?.socials?.facebook}</p>
					</div>
					<div>
						<p>Instagram</p>
						<p>{user?.socials?.instagram}</p>
					</div>
				</div>
			</div>

			<div className="user-info-card">
				<h2>Guarantor</h2>
				<div className="user-info-main">
					<div>
						<p>full Name</p>
						<p>{`${user?.guarantor?.firstName} ${user?.guarantor?.lastName}`}</p>
					</div>
					<div>
						<p>Phone Number</p>
						<p>{user?.guarantor?.phoneNumber}</p>
					</div>
					<div>
						<p>Address</p>
						<p>{user?.guarantor?.address}</p>
					</div>
					<div>
						<p>Relationship</p>
						<p>Sister</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default UserDetailsMain;
