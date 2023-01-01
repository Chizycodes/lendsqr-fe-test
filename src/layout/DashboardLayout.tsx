import { FC, useState } from 'react';
import { Outlet } from 'react-router-dom';
import SideBar from '../components/dashboard/SideBar';
import TopNav from '../components/dashboard/TopNav';
import '../styles/dashboard/dashboard.css';

interface Props {}

const DashboardLayout: FC<Props> = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	return (
		<div className="dashboard-layout">
			<TopNav setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} />
			<div className='dashboard-container'>
				<SideBar setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} />

				<div className="dashboard-main">
					<div>
						<Outlet />
					</div>
				</div>
			</div>
		</div>
	);
};

export default DashboardLayout;
