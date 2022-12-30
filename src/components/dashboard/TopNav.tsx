import { FC } from 'react';
import '../../styles/dashboard/dashboard.css';
import { Link } from 'react-router-dom';

interface Props {}

const TopNav: FC<Props> = () => {
	return (
		<div className="top-nav">
			<div>
				<div className='top-nav-main'>
					<img src="/images/logo.svg" alt="logo" className="logo" />
					<div className="search-input">
						<input type="search" placeholder="Search for anything" />
						<button>
							<img src="/images/icons/search-icon.svg" alt="search" />
						</button>
					</div>
                    <div className='top-nav-right'>
                        <Link to="#">Docs</Link>
                        <img src="/images/icons/bell-icon.svg" alt="notify" />
                        <div className='top-nav-profile'>
                            <img src="/images/avatar.svg" alt="avatar" />
                            <p>Adedeji</p>
                            <img src="/images/icons/dropdown-icon.svg" alt="Avatar" />
                        </div>
                    </div>
				</div>
			</div>
		</div>
	);
};

export default TopNav;
