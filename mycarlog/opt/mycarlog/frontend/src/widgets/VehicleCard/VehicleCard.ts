import { v} from "@dojo/framework/core/vdom";
import WidgetBase from "@dojo/framework/core/WidgetBase";
import * as css from "./VehicleCard.m.css";
//import Card from "@dojo/widgets/card";
//import Icon from ".././Icon/Icon";

export interface VehicleCardProperties {
  idvehicle?: string;
  idaccount?: string;
  account?: string;
  idcontact?: string;
  license_plate: string;
  year: string;
  fuel_tank_capacity: string;
  vin: string;
  name: string;
  idvehicletype?: string;
  mark?: string;
  model?: string;
  color: string;
  fueltype: string;
  unit_measure_fuel_tank?: string;
  lfname: string;
}

export default class VehicleCard extends WidgetBase<VehicleCardProperties> {
  private Color: string = this.properties.license_plate;

  protected render() {
    return v("div", { classes: css.container }, [
      v("div", { classes: [css.column] }, [
        v("div", {onclick:(e)=>{
          console.log(e);
          this.Color = "prueba";
          this.invalidate();
        }}, [this.Color
          // w(Card, {}, [
          //   w(Icon, {
          //     key: 'sss',
          //     label:
          //       this.properties.name ||
          //       this.properties.license_plate + " - " + this.properties.vin,
          //     classes: ["fa-car-side", "far", css.title],
          //     ShowLabel: true,
          //     onClick: () => {
          //       //window.location.href = "/#contacts";
          //       //this.Selected = "fa-star";
          //       console.log("Se ha presionado");
          //       this.invalidate();
          //     },
          //   }),
          //   v("div", {}, [
          //     // v("div", {}, [this.properties.license_plate]),
          //     v("img", { classes: [css.image] }, []),
          //     v("div", {}, [
          //       v("div", {}, [
          //         v("div", {}, [
          //           v("span", { classes: [css.label] }, ["VIN: "]),
          //           v("span", {}, [this.properties.vin]),
          //         ]),
          //         v("div", {}, [
          //           v("span", { classes: [css.label] }, ["Año: "]),
          //           v("span", {}, [this.properties.year]),
          //         ]),
          //         v("div", {}, [
          //           v("span", { classes: [css.label] }, ["Propietario: "]),
          //           v("span", {}, [this.properties.lfname]),
          //         ]),
          //         v("div", {}, [
          //           v("span", { classes: [css.label] }, ["Tipo combustible: "]),
          //           v("span", {}, [this.properties.fueltype]),
          //         ]),
          //         v("div", {}, [
          //           v("span", {}, ["Color: "]),
          //           v("span", {}, [this.Color]),
          //         ]),
          //       ]),
          //     ]),
          //     v("div", {onclick:()=>{
          //       this.Color = "Verde";
          //       console.log('Invalida');
          //       this.invalidate();
          //     }}, ["Piecito"]),
          //   ]),
          // ]),
        ]),
      ]),
    ]);
  }
}
