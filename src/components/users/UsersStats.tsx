import { FC } from 'react';
import { usersStats } from '../../utils/data';

interface Props {}

const UsersStats: FC<Props> = () => {
	return (
		<div className="users-stats">
			{usersStats.map((item, index) => {
				return (
					<div key={index} className="users-stats-box">
						<img src={item.icon} alt="stat" />
						<p>{item.title}</p>
						<p>{item.count}</p>
					</div>
				);
			})}
		</div>
	);
};

export default UsersStats;
