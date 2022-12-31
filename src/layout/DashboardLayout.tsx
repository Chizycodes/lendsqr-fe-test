import { FC, useState } from 'react';
import SideBar from '../components/dashboard/SideBar';
import TopNav from '../components/dashboard/TopNav';
import '../styles/dashboard/dashboard.css';

interface Props {
	children?: React.ReactNode;
}

const DashboardLayout: FC<Props> = ({ children }) => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	return (
		<div className="dashboard-layout">
			<TopNav setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} />
			<SideBar setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} />

			<div className="dashboard-main">
				<div>{children}</div>
			</div>
		</div>
	);
};

export default DashboardLayout;
