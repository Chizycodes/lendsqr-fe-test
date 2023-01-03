import React, { FC } from 'react';

interface Props {}

const MoreDropDown: FC<Props> = () => {
	return (
		<div className="options-dropdown">
			<ul>
				<li>
					<img src="/images/icons/eye-icon.svg" alt="eye icon" /> <span>View Details</span>
				</li>
				<li>
					<img src="/images/icons/user-x-icon.svg" alt="eye icon" /> <span>Blacklist User</span>
				</li>
				<li>
					<img src="/images/icons/user-check-icon.svg" alt="eye icon" /> <span>Activate User</span>
				</li>
			</ul>
		</div>
	);
};

export default MoreDropDown;
