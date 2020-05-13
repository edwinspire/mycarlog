import { v, w } from "@dojo/framework/core/vdom";
import WidgetBase from "@dojo/framework/core/WidgetBase";
// import * as css from '../styles/Profile.m.css';
// import TextInput from '@dojo/widgets/text-input';
// import Checkbox from '@dojo/widgets/checkbox';
// import Textarea from '@dojo/widgets/text-area';
// import SelectFromURL from '.././modules/SelectFromURL';
// //import Lbox from '.././modules/ListboxUri';
import watch from "@dojo/framework/core/decorators/watch";
// import ToolBar from '@dojo/widgets/toolbar';
// import Icon from '.././Icon/Icon';
// // // import SBar from '@dojo/widgets/snackbar';
// import TitlePane from '@dojo/widgets/title-pane';
import Menu from ".././Menu";

export default class Fueling extends WidgetBase {
  @watch() Vehicles: any[] = [];

  onAttach() {
    setInterval(() => {
      this.Vehicles.push(v('div', {}, ["Se ha agregado uno más"]));
      console.log("Se agrega un vehiculo");
      this.invalidate();
    }, 3000);
  }

  protected render() {
    return v("div", {}, [w(Menu, {}), 'Este es una prueba nada más', v("div", {}, this.Vehicles)]);
  }
}
