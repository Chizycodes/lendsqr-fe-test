import React, { FC } from 'react';

interface Props {
	users: any;
}

const UsersTable: FC<Props> = ({ users }) => {
	return <div className="users-table"></div>;
};

export default UsersTable;
