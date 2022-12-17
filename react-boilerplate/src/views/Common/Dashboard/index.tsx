import { useDispatch, useSelector } from 'react-redux';
import { increment, incrementByAmount } from 'redux/counterSlice';
import { RootState } from 'redux/store';

const Dashboard = () => {
	const dispatch = useDispatch();

	const { value } = useSelector((state: RootState) => state.counter);

	return (
		<div>
			<h1>{value}</h1>
			<button type='button' onClick={() => dispatch(increment())}>
				Add
			</button>
			<button type='button' onClick={() => dispatch(incrementByAmount(6))}>
				Add Amount
			</button>
		</div>
	);
};

export default Dashboard;
