import { FC, useState } from 'react';
import TopNav from '../components/dashboard/TopNav';
import '../styles/dashboard/dashboard.css';

interface Props {}

const DashboardLayout: FC<Props> = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	return (
		<div className="dashboard-layout">
			<TopNav setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} />
		</div>
	);
};

export default DashboardLayout;
