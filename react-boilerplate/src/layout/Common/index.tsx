import { Outlet } from 'react-router-dom';

const CommonLayout = () => (
	<>
		<div>User</div>
		<Outlet />
	</>
);

export default CommonLayout;
