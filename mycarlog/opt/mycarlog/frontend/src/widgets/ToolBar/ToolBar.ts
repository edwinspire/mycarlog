import { v } from "@dojo/framework/core/vdom";
import WidgetBase from "@dojo/framework/core/WidgetBase";
import * as css from "./ToolBar.m.css";
//import TextInput from "@dojo/widgets/text-input";
//import watch from "@dojo/framework/core/decorators/watch";

export interface VehicleCardProperties {
  idvehicle?: number;
}

export default class ToolBar extends WidgetBase<VehicleCardProperties> {
  //private clase = "fa-car-side";
  //@watch() private Data: VehicleCardProperties = this.properties;

  onAttach() {}


  protected render() {
    /*
    <div class="topnav">
  <a class="active" href="#home">Home</a>
  <a href="#news">News</a>
  <a href="#contact">Contact</a>
  <div class="topnav-right">
    <a href="#search">Search</a>
    <a href="#about">About</a>
  </div>
</div>
    */

    return v("div", { classes: css.topnav }, [
      v("a", { classes: [css.active] }, ["Uno"]),
      v("a", { classes: [] }, ["Dos"]),
      v("a", { classes: [] }, ["Tres"]),
      v("div", { classes: [css.topnav_right] }, [
        v("a", { classes: [] }, ["Cuatro"]),
        v("input", { classes: [] }),
        v("a", { classes: [] }, ["Buscar"])
      ]),
    ]);
  }
}
