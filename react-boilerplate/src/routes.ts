import AuthLayout from 'layout/Auth';
import CommonLayout from 'layout/Common';
import Login from 'views/auth/Login';
import SignUp from 'views/auth/Signup';
import Dashboard from 'views/Common/Dashboard';

const routes = [
	{
		layout: AuthLayout,
		path: '/auth',
		children: [
			{
				component: Login,
				path: 'login',
			},
			{
				component: SignUp,
				path: 'signup',
			},
		],
	},
	{
		layout: CommonLayout,
		path: '',
		children: [
			{
				component: Dashboard,
				path: '/',
			},
		],
	},
];

export default routes;
