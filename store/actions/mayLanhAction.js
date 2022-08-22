export const mayLanhActionTypes = {
	MoMay: 'mayLanh/moMay',
	TatMay: 'mayLanh/tatMay',
	Tang1NhietDo: 'mayLanh/tang1NhietDo',
	TangNNhietDo: 'mayLanh/tangNNhietDo',
	Giam1NhietDo: 'maylanh/giam1NhietDo',
	GiamNNhietDo: 'maylanh/giamNNhietDo'
};

const moMay = () => ({
	type: mayLanhActionTypes.MoMay
});

const tatMay = () => ({
	type: mayLanhActionTypes.TatMay
});

const tang1NhietDo = () => ({
	type: mayLanhActionTypes.Tang1NhietDo
});

const tangNNhietDo = (n) => ({
	type: mayLanhActionTypes.TangNNhietDo,
	payload: n
});
const giam1NhietDo = () => ({
	type: mayLanhActionTypes.Giam1NhietDo,
})
const giamNNhietDo = (n) => ({
	type: mayLanhActionTypes.GiamNNhietDo,
	payload: n
})


const mayLanhAction = {
	moMay,
	tatMay,
	tang1NhietDo,
	tangNNhietDo,
	giam1NhietDo,
	giamNNhietDo
};

export default mayLanhAction;
