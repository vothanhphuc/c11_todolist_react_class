import { createSelector} from 'reselect';

const selecMayLanh = (state) => state.mayLanh;

const selecTrangThai = createSelector(
    selecMayLanh,(mayLanh) => mayLanh.trangThai
);

const mayLanhSelector = {
    selecTrangThai,
}
export default mayLanhSelector;