import { FC } from 'react';
import TopNav from '../components/dashboard/TopNav';
import "../styles/dashboard/dashboard.css"

interface Props {}

const DashboardLayout: FC<Props> = () => {
	return (
		<div className='dashboard-layout'>
			<TopNav/>
		</div>
	)
};

export default DashboardLayout;
