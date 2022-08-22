import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import mayLanhAction from './store/actions/mayLanhAction';
import mayLanhSelector from './store/selectors/mayLanhSelector';

const App = () => {
	const dispatch = useDispatch();
	const trangThai = useSelector(mayLanhSelector.trangThai);
	const nhietDo = useSelector((state) => state.mayLanh.nhietDo);

	return (
		<div>
			<div>Trang thai: {trangThai}</div>
			<div>Nhiet do: {nhietDo}</div>
			<hr />
			<button
				type="button"
				onClick={() => {
					dispatch(mayLanhAction.moMay());
				}}
			>
				Mo
			</button>
			<button
				type="button"
				onClick={() => {
					dispatch(mayLanhAction.tatMay());
				}}
			>
				Tat
			</button>
			<button
				type="button"
				onClick={() => {
					dispatch(mayLanhAction.tang1NhietDo());
				}}
			>
				Tang 1
			</button>
			<button
				type="button"
				onClick={() => {
					dispatch(mayLanhAction.tangNNhietDo(5));
				}}
			>
				Tang 5
			</button>
			<button
				type="button"
				onClick={() => {
					dispatch(mayLanhAction.giam1NhietDo());
				}}
			>
				Giam 1
			</button>
			<button
				type="button"
				onClick={() => {
					dispatch(mayLanhAction.giamNNhietDo(5));
				}}
			>
				Giam 5
			</button>

			<hr />
		</div>
	);
};

export default App;
