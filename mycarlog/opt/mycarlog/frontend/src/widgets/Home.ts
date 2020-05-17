import { create, w, v } from '@dojo/framework/core/vdom';
import Summary from './VehicleSummary/VehicleSummary';
import Menu from './Menu';

const factory = create();

export default factory(function Profile() {
	return  v('div', {}, [
		w(Menu, {}),
		w(Summary, {idvehicle: localStorage.getItem("1") as string}, [])
		]) ;
});
