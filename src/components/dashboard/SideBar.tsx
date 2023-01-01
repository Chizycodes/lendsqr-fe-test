import { FC } from 'react';
import { Link } from 'react-router-dom';
import { navItems } from '../../utils/data';
import { useLocation } from 'react-router-dom';

interface Props {
	setIsMenuOpen: (value: boolean) => void;
	isMenuOpen: boolean;
}

const SideBar: FC<Props> = ({ setIsMenuOpen, isMenuOpen }) => {
	const pathname: String = useLocation().pathname;

	return (
		<div className={`side-nav ${isMenuOpen && 'nav-active'}`}>
			<div className="side-nav-header">
				<img src="/images/logo.svg" alt="logo" className="logo" />
			</div>
			<div className="">
				<ul className="side-nav-menu">
					{navItems.map((item, index) => {
						return (
							<div key={item.id}>
								{!item.header ? (
									<Link to={`${item.link}`}>
										<li className={`side-nav-menu-item ${pathname === item.link && 'active'}`}>
											{!item.header && <img src={item.icon} alt={item.title} />}

											<span>{item.title}</span>
											{item.id === 1 && (
												<span>
													<img src="/images/icons/down-arrow.svg" alt="" />
												</span>
											)}
										</li>
									</Link>
								) : (
									<li className="nav-item-header">
										<span>{item.title}</span>
									</li>
								)}
							</div>
						);
					})}
				</ul>
			</div>
		</div>
	);
};

export default SideBar;
