import React, { FC } from 'react';
import { UserModel } from '../../utils/models';
import moment from 'moment';

interface Props {
	users: UserModel[];
}

const tableHeaders = ['Organization', 'Username', 'Email', 'Phone number', 'Date joined', 'Status', ''];

const UsersTable: FC<Props> = ({ users }) => {
	return (
		<div className="users-table">
			<table>
				<thead>
					<tr>
						{tableHeaders.map((header, index) => {
							return (
								<th key={index}>
									<div>
										<span>{header}</span>
										{header && <img src="/images/icons/filter-icon.svg" alt="filter-icon" />}
									</div>
								</th>
							);
						})}
					</tr>
				</thead>
				<tbody>
					{users.map((user: any, index: number) => {
						return (
							<tr key={index}>
								<td>{user?.orgName}</td>
								<td>{user?.userName}</td>
								<td>{user?.email}</td>
								<td>{user?.phoneNumber}</td>
								<td>{moment(user?.createdAt).format('MMM D, YYYY h:mm a')}</td>
								<td>{user?.status}</td>
								<td>
									<img src="/images/icons/more-icon.svg" alt="more" />
								</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
};

export default UsersTable;
