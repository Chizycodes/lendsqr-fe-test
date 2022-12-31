import { FC } from 'react';

interface Props {
	setIsMenuOpen: (value: boolean) => void;
	isMenuOpen: boolean;
}

const SideBar: FC<Props> = ({ setIsMenuOpen, isMenuOpen }) => {
	return (
		<div className={`side-nav ${isMenuOpen && 'nav-active'}`}>
			<div className="side-nav-header">
				<img src="/images/logo.svg" alt="logo" className="logo" />
			</div>
			<div className="side-nav-menu">
				
			</div>
		</div>
	);
};

export default SideBar;
