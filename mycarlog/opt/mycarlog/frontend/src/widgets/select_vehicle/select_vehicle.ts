import { v, w } from '@dojo/framework/core/vdom';
import WidgetBase from '@dojo/framework/core/WidgetBase';
// import * as css from '../styles/Profile.m.css';
// import TextInput from '@dojo/widgets/text-input';
// import Checkbox from '@dojo/widgets/checkbox';
// import Textarea from '@dojo/widgets/text-area';
// import SelectFromURL from '.././modules/SelectFromURL';
// //import Lbox from '.././modules/ListboxUri';
import watch from '@dojo/framework/core/decorators/watch';
// import ToolBar from '@dojo/widgets/toolbar';
// import Icon from '.././Icon/Icon';
// // // import SBar from '@dojo/widgets/snackbar';
// import TitlePane from '@dojo/widgets/title-pane';
import Menu from '.././Menu';


export default class Fueling extends WidgetBase {

	async onAttach(){

setInterval(()=>{
	this.Vehicles.push('Se ha agregado uno más');
}, 3000);

	}

	@watch() Vehicles:any[] = [];

	protected render(){

		return v('div', {}, [
			w(Menu, {}),				
			v('div', {}, this.Vehicles)
			]);

}
}