import { mayLanhActionTypes } from '../actions/mayLanhAction';

const initialState = {
	trangThai: 'Tat',
	nhietDo: 20
};

const mayLanhReducer = (state = initialState, action = {}) => {
	switch (action.type) {
		case mayLanhActionTypes.MoMay: {
			const newState = { ...state };
			if (newState.trangThai === 'Tat') {
				newState.trangThai = 'Mo';
			}
			return newState;
		}

		case mayLanhActionTypes.TatMay: {
			const newState = { ...state };
			if (newState.trangThai === 'Mo') {
				newState.trangThai = 'Tat';
			}
			return newState;
		}

		case mayLanhActionTypes.Tang1NhietDo: {
			const newState = { ...state };
			if (newState.trangThai === 'Mo') {
				newState.nhietDo += 1;
			}
			return newState;
		}
		case mayLanhActionTypes.Giam1NhietDo: {
			const newState = { ...state };
			if (newState.trangThai === 'Mo') {
				newState.nhietDo --;
			}
			return newState;
		}

		case mayLanhActionTypes.TangNNhietDo: {
			const newState = { ...state };
			if (newState.trangThai === 'Mo') {
				newState.nhietDo += action.payload;
			}
			return newState;
		}
		case mayLanhActionTypes.GiamNNhietDo: {
			const newState = { ...state };
			if (newState.trangThai === 'Mo') {
				newState.nhietDo -= action.payload;
			}
			return newState;
		}

		default:
			return state;
	}
};

export default mayLanhReducer;
