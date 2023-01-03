import '../../styles/users.scss';
import { useState, useEffect } from 'react';
import axios from 'axios';
import UsersStats from '../../components/users/UsersStats';
import UsersTable from '../../components/users/UsersTable';
import ReactPaginate from 'react-paginate';
import Loader from '../../components/general/Loader';

const Users = () => {
	const [loading, setLoading] = useState<Boolean>(true);
	const [users, setUsers] = useState([]);
	const [currentItems, setCurrentItems] = useState([]);
	const [pageCount, setPageCount] = useState(0);
	const [itemOffset, setItemOffset] = useState(0);
	const itemsPerPage = 9;

	// Invoke when user click to request another page.
	const handlePageClick = (event: any) => {
		const newOffset = (event.selected * itemsPerPage) % users.length;
		setItemOffset(newOffset);
	};

	const fetchUsers = async () => {
		setLoading(true);
		await axios
			.get(`${process.env.REACT_APP_API_URL}/users`)
			.then((response) => {
				setUsers(response.data);
				setLoading(false);
			})
			.catch((error) => {
				const err = error.response.data;
				console.log(err);
				setLoading(false);
			});
	};

	useEffect(() => {
		fetchUsers();
	}, []);

	useEffect(() => {
		const endOffset = itemOffset + itemsPerPage;
		setCurrentItems(users?.slice(itemOffset, endOffset));
		setPageCount(Math.ceil(users?.length / itemsPerPage));
	}, [itemOffset, itemsPerPage, users]);

	return (
		<section className="users">
			<h1>Users</h1>
			<div>
				<UsersStats />

				{loading ? (
					<div>
						<Loader />
					</div>
				) : (
					<>
						<UsersTable users={currentItems} loading={loading} />
						<div className="users-paginate">
							<div className="user-page-info">
								<p>
									Showing{' '}
									<span>
										{itemOffset + itemsPerPage} <img src="/images/icons/down-arrow.svg" alt="down arrow" />
									</span>{' '}
									out of {users.length}
								</p>
							</div>
							<ReactPaginate
								nextLabel=">"
								onPageChange={handlePageClick}
								pageRangeDisplayed={3}
								marginPagesDisplayed={2}
								pageCount={pageCount}
								previousLabel="<"
								pageClassName="page-item"
								pageLinkClassName="page-link"
								previousClassName="arrow"
								nextClassName="arrow"
								breakLabel="..."
								containerClassName="pagination"
								activeClassName="active"
								// renderOnZeroPageCount={null}
							/>
						</div>
					</>
				)}
			</div>
		</section>
	);
};

export default Users;
